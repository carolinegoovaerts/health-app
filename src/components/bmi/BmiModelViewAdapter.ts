import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";
import { BmiRequestView } from "@/components/bmi/BmiRequestView";
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

    public static requestFrom(request: BmiRequestView) {
        return {
            length: BmiModelViewAdapter.parse(request.length),
            weight: BmiModelViewAdapter.parse(request.weight)
        };
    }

    private static parse(characters: string): number {
        const value = Number.parseFloat(characters);
        if (Number.isNaN(value)) {
            throw new TypeError();
        }
        return value;
    }

    private static valueFrom(response: BmiResponse): string {
        return response.bmi.toString();
    }

    private static commentFrom(response: BmiResponse): string {
        return BmiModelViewAdapter.bmiClassificationString(response.classification).replace("_", " ");
    }

    private static bmiClassificationString(classification: BmiClassificationType): string {
        return BmiClassificationType[classification].toLocaleLowerCase();
    }

    private static styleFrom(response: BmiResponse): string {
        return BmiModelViewAdapter.bmiClassificationString(response.classification).replace("_", "-");
    }
}
