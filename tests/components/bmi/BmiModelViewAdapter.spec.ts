import { BmiModelViewAdapter } from "@/components/bmi/BmiModelViewAdapter";
import { assert } from "chai";
import { BmiFixtures } from "./BmiFixtures";

describe("BmiModelViewAdapter", () => {
    it("should return green when normal", () => {
        const bmiResponse = BmiFixtures.bmiNormalResponse();
        const view = BmiModelViewAdapter.viewOf(bmiResponse);

        assert.equal("ok", view.style);
    });
});
