import { BmiClassification } from "@/components/bmi/BmiClassification";
import { BmiResponse } from "@/components/bmi/BmiResponse";
import { BmiResponseView } from "@/components/bmi/BmiResponseView";

export class BmiModelViewAdapter {

    public static viewOf(response: BmiResponse): BmiResponseView {
        return {
            comment: BmiClassification[response.classification].replace("_", " ").toLocaleLowerCase(),
            style: this.bmiViewMap.get(response.classification) || "",
            value: response.bmi.toString()
        };
    }

    private static bmiViewMap: Map<BmiClassification, string> = BmiModelViewAdapter.initializeBmiMap();

    private static initializeBmiMap(): Map<BmiClassification, string> {
        const bmiMap: any[] = [
            [BmiClassification.NORMAL, "ok"],
            [BmiClassification.LIGHT_OVERWEIGHT, "nok-1"],
            [BmiClassification.MEDIUM_OVERWEIGHT, "nok-1"],
            [BmiClassification.OBESITY, "nok-2"],
            [BmiClassification.MORBID_OBESITY, "nok-3"],
            [BmiClassification.UNDERWEIGHT, "nok-4"],
            [BmiClassification.SUPER_OBESITY, "nok-4"]
        ];
        return new Map(bmiMap);
    }
}
