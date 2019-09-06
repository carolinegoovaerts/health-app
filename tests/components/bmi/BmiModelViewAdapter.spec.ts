import { BmiClassification } from "@/components/bmi/BmiClassification";
import { BmiModelViewAdapter } from "@/components/bmi/BmiModelViewAdapter";
import { assert } from "chai";
import { BmiFixtures } from "./BmiFixtures";

describe("BmiModelViewAdapter", () => {
    function viewOf(classification: BmiClassification) {
        return BmiModelViewAdapter.viewOf(BmiFixtures.bmiResponse(classification));
    }

    it("should return all lowercase", () => {
        const view = viewOf(BmiClassification.NORMAL);
        assert.equal("normal", view.style);
    });

    it("should return hyphen when underscore", () => {
        const view = viewOf(BmiClassification.SUPER_OBESITY);
        assert.equal("super-obesity", view.style);
    });
});
