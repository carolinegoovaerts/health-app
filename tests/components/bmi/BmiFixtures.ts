import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";

export class BmiFixtures {
    public static bmiResponse(classification: BmiClassificationType) {
        return {bmi: 1, classification};
    }
}
