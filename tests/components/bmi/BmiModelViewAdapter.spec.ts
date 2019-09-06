import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";
import { BmiModelViewAdapter } from "@/components/bmi/BmiModelViewAdapter";
import { assert } from "chai";
import { BmiFixtures } from "./BmiFixtures";

describe("BmiModelViewAdapter", () => {
    function viewOf(classification: BmiClassificationType) {
        return BmiModelViewAdapter.viewOf(BmiFixtures.bmiResponse(classification));
    }

    it("should return all lowercase", () => {
        const view = viewOf(BmiClassificationType.NORMAL);
        assert.equal("normal", view.style);
    });

    it("should return hyphen when underscore", () => {
        const view = viewOf(BmiClassificationType.SUPER_OBESITY);
        assert.equal("super-obesity", view.style);
    });
});
