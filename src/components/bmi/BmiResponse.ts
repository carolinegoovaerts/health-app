import { BmiClassification } from "@/components/bmi/BmiClassification";

export interface BmiResponse {
    bmi: number;
    classification: BmiClassification;
}
