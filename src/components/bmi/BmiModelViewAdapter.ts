import { BmiClassification } from "@/components/bmi/BmiClassification";
import { BmiResponse } from "@/components/bmi/BmiResponse";
import { BmiResponseView } from "@/components/bmi/BmiResponseView";

export class BmiModelViewAdapter {

    public static viewOf(response: BmiResponse): BmiResponseView {
        return {
            comment: BmiModelViewAdapter.commentFrom(response),
            style: BmiModelViewAdapter.styleFrom(response),
            value: BmiModelViewAdapter.valueFrom(response)
        };
    }

    private static valueFrom(response: BmiResponse): string {
        return response.bmi.toString();
    }

    private static commentFrom(response: BmiResponse): string {
        return BmiModelViewAdapter.bmiClassificationString(response.classification).replace("_", " ");
    }

    private static bmiClassificationString(classification: BmiClassification): string {
        return BmiClassification[classification].toLocaleLowerCase();
    }

    private static styleFrom(resonse: BmiResponse): string {
        return BmiModelViewAdapter.bmiClassificationString(resonse.classification).replace("_", "-");
    }
}
