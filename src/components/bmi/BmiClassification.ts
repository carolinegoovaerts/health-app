import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";

export interface BmiClassification {
    threshold: number;
    type: BmiClassificationType;
}
