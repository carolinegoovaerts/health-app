import { BmiCalculation } from "@/components/bmi/BmiCalculation";
import { BmiClassification } from "@/components/bmi/BmiClassification";
import { BmiResponse } from "@/components/bmi/BmiResponse";
import { assert, expect } from "chai";

describe("Bmi Calculation", () => {
    function bmiFor(length: number, weight: number): BmiResponse {
        return BmiCalculation.determine({length, weight});
    }

    it("should return the correct value", () => {
        const response = bmiFor(1.75, 65);
        expect(response.bmi).to.equal(21.2);
    });

    it("should round half-up", () => {
        const response = bmiFor(1.75, 70);
        expect(response.bmi).to.equal(22.9);
    });

    it("should throw an Error when length is 0", () => {
        try {
            bmiFor(0, 1);
            assert.fail("Expected Error to be thrown");
        } catch (e) {
            expect(e).to.be.a.instanceOf(RangeError);
        }
    });

    it("should return a BMI classification", () => {
        const response = bmiFor(1.75, 70);
        expect(response.classification).to.equal(BmiClassification.NORMAL);
    });

    xit("should return the expected BMI classification", () => {
        assert.fail("not yet implemented");
    });
});
