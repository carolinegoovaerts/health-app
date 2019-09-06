import { BmiClassification } from "@/components/bmi/BmiClassification";
import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";
import { BmiResponse } from "@/components/bmi/BmiResponse";

export class BmiCalculation {

    public static determine(request: BmiRequest): BmiResponse {
        // TODO test if number
        if (request.length === 0) {
            throw new RangeError("Given length must be > 0");
        }
        const bmi = request.weight / Math.pow(request.length, 2);
        const roundedBmi = parseFloat(bmi.toFixed(1));
        return {bmi: roundedBmi, classification: BmiCalculation.classify(bmi)};
    }

    private static readonly classifications: BmiClassification[] = [
        {threshold: 50, type: BmiClassificationType.SUPER_OBESITY},
        {threshold: 40, type: BmiClassificationType.MORBID_OBESITY},
        {threshold: 30, type: BmiClassificationType.OBESITY},
        {threshold: 27, type: BmiClassificationType.MEDIUM_OVERWEIGHT},
        {threshold: 25, type: BmiClassificationType.LIGHT_OVERWEIGHT},
        {threshold: 18.5, type: BmiClassificationType.NORMAL}
    ];

    private static classify(bmi: number): BmiClassificationType {
        const result = BmiCalculation.classifications.find((classification) => {
            return bmi >= classification.threshold;
        });
        return result === undefined ? BmiClassificationType.UNDERWEIGHT : result.type;
    }
}
