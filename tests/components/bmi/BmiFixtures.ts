import { BmiCalculation } from "@/components/bmi/BmiCalculation";
import { BmiClassification } from "@/components/bmi/BmiClassification";
import { BmiResponse } from "@/components/bmi/BmiResponse";

export class BmiFixtures {
    public static bmiFor(length: number, weight: number): BmiResponse {
        return BmiCalculation.determine({length, weight});
    }

    public static bmiNormalResponse(): BmiResponse {
        return {bmi: 21, classification: BmiClassification.NORMAL};
    }
}
