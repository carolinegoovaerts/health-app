import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";

export interface BmiResponse {
    bmi: number;
    classification: BmiClassificationType;
}
