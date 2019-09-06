import { BmiClassification } from "@/components/bmi/BmiClassification";
import { assert, expect } from "chai";
import { BmiFixtures } from "./BmiFixtures";

describe("Bmi Calculation", () => {
    it("should return the correct value", () => {
        const response = BmiFixtures.bmiFor(1.75, 65);
        expect(response.bmi).to.equal(21.2);
    });

    it("should round half-up", () => {
        const response = BmiFixtures.bmiFor(1.75, 70);
        expect(response.bmi).to.equal(22.9);
    });

    it("should throw an Error when length is 0", () => {
        try {
            BmiFixtures.bmiFor(0, 1);
            assert.fail("Expected Error to be thrown");
        } catch (e) {
            expect(e).to.be.a.instanceOf(RangeError);
        }
    });

    it("should return a BMI classification", () => {
        const response = BmiFixtures.bmiFor(1.75, 70);
        expect(response.classification).to.equal(BmiClassification.NORMAL);
    });

    xit("should return the expected BMI classification", () => {
        assert.fail("not yet implemented");
    });
});
