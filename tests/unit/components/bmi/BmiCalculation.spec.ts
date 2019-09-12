import { BmiCalculation } from "@/components/bmi/BmiCalculation";
import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";
import { BmiResponse } from "@/components/bmi/BmiResponse";
import { assert, expect } from "chai";

describe("Bmi Calculation", () => {
    function bmiFor(length: number, weight: number): BmiResponse {
        return BmiCalculation.determine({length, weight});
    }

    function responseForLengthAndBmi(length: number, bmi: number) {
        return bmiFor(length, weightFor(bmi, length));
    }

    function weightFor(bmi: number, length: number) {
        return bmi * length * length;
    }

    function assertType(expected: BmiClassificationType, response: BmiResponse) {
        assert.equal(expected, response.classification);
    }

    function assertErrorForLengthAndWeight(type: ErrorConstructor, length: number, weight: number) {
        try {
            bmiFor(length, weight);
            assert.fail();
        } catch (e) {
            expect(e).to.be.a.instanceOf(type);
        }
    }

    it("should return the expected bmi value", () => {
        const response = bmiFor(1.75, 65);
        expect(response.bmi).to.equal(21.2);
    });

    it("should round half-up", () => {
        const response = bmiFor(1.75, 70);
        expect(response.bmi).to.equal(22.9);
    });

    it("should return normal", () => {
        const response = bmiFor(1.75, 70);
        assertType(BmiClassificationType.NORMAL, response);
    });

    it("should return underweight when bmi < 18.5", () => {
        const response = responseForLengthAndBmi(1.75, 18);
        assertType(BmiClassificationType.UNDERWEIGHT, response);
    });

    it("should return super obesity when bmi >= 50", () => {
        const response = responseForLengthAndBmi(1.75, 51);
        assertType(BmiClassificationType.SUPER_OBESITY, response);
    });

    it("should return morbid obesity when bmi between 40 and 50", () => {
        const response = responseForLengthAndBmi(1.75, 41);
        assertType(BmiClassificationType.MORBID_OBESITY, response);
    });

    it("should return obesity when bmi between 30 and 40", () => {
        const response = responseForLengthAndBmi(1.75, 30);
        assertType(BmiClassificationType.OBESITY, response);
    });

    it("should return medium overweight when bmi between 27 and 30", () => {
        const response = responseForLengthAndBmi(1.75, 29);
        assertType(BmiClassificationType.MEDIUM_OVERWEIGHT, response);
    });

    it("should return light overweight when bmi between 25 and 27", () => {
        const response = responseForLengthAndBmi(1.75, 25);
        assertType(BmiClassificationType.LIGHT_OVERWEIGHT, response);
    });

    it("should throw an Error when length = 0", () => {
        assertErrorForLengthAndWeight(RangeError, 0, 1);
    });

    it("should throw an Error when weight = 0", () => {
        assertErrorForLengthAndWeight(RangeError, 1, 0);
    });

    it("should throw an error when weight < 0", () => {
        assertErrorForLengthAndWeight(RangeError, 1, -1);
    });

    it("should throw an error when length < 0", () => {
        assertErrorForLengthAndWeight(RangeError, -1, 1);
    });
});
