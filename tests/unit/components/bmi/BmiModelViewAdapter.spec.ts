import { BmiClassificationType } from "@/components/bmi/BmiClassificationType";
import { BmiModelViewAdapter } from "@/components/bmi/BmiModelViewAdapter";
import { BmiRequestView } from "@/components/bmi/BmiRequestView";
import { assert, expect } from "chai";
import { BmiFixtures } from "./BmiFixtures";

describe("BmiModelViewAdapter", () => {
    function viewOf(classification: BmiClassificationType) {
        return BmiModelViewAdapter.viewOf(BmiFixtures.bmiResponse(classification));
    }

    function expectTypeError(view: BmiRequestView) {
        try {
            BmiModelViewAdapter.requestFrom(view);
            assert.fail();
        } catch (e) {
            expect(e).to.be.instanceOf(TypeError);
        }
    }

    it("should return all lowercase", () => {
        const view = viewOf(BmiClassificationType.NORMAL);
        assert.equal("normal", view.style);
    });

    it("should return hyphen when underscore", () => {
        const view = viewOf(BmiClassificationType.SUPER_OBESITY);
        assert.equal("super-obesity", view.style);
    });

    it("should parse strings as a numbers", () => {
        const view = {length: "1", weight: "1"};
        const expectedModel = {length: 1, weight: 1};
        const request: BmiRequest = BmiModelViewAdapter.requestFrom(view);

        assert.deepEqual(expectedModel, request);
    });

    it("should throw error when length is not a number", () => {
        expectTypeError({length: "a", weight: "1"});
    });

    it("should throw error when weight is not a number", () => {
        expectTypeError({length: "1", weight: "a"});
    });

    it("should throw error when length is empty", () => {
        expectTypeError({length: "", weight: "1"});
    });

    it("should throw error when weight is empty", () => {
        expectTypeError({length: "1", weight: ""});
    });

    it("should parse the applicable number format regarding i18n");
});
