import { BmiClassification } from "@/components/bmi/BmiClassification";

export class BmiFixtures {
    public static bmiResponse(classification: BmiClassification) {
        return {bmi: 1, classification};
    }
}
