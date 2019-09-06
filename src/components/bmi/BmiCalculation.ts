import { BmiClassification } from "@/components/bmi/BmiClassification";
import { BmiResponse } from "@/components/bmi/BmiResponse";

export class BmiCalculation {
    public static determine(request: BmiRequest): BmiResponse {
        if (request.length === 0) {
            throw new RangeError("Given length must be > 0");
        }
        const bmi = request.weight / Math.pow(request.length, 2);
        const roundedBmi = parseFloat(bmi.toFixed(1));
        return {bmi: roundedBmi, classification: this.classification()};
    }

    // TODO finish
    // OR create function: classification = (bmi) => fn;
    private static classification(): BmiClassification {
        return BmiClassification.NORMAL;
    }
}
