import { BmiAlgorithm } from "@/components/bmi/bmi-algorithm";
import { expect } from "chai";

function bmiFor(length: number, weight: number) {
    return BmiAlgorithm.determine({length, weight});
}

describe("Bmi Algorithm", () => {
    it("should return the correct value", () => {
        expect(bmiFor(1.75, 65)).to.equal(21.2);
    });

    it("should round half-up", () => {
        expect(bmiFor(1.75, 70)).to.equal(22.9);
    });

    it("should return empty when length 0", () => {
        expect(bmiFor(0, 1)).to.equal(0);
    });

    it("should return a message along with the bmi value", () => {
        // use message bundle for i18n
        expect(false).to.equal(true);
    });
});
