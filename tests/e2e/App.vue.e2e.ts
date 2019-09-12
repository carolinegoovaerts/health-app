import Bmi from "@/components/bmi/Bmi.vue";
import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

describe("App.vue", () => {
    it("should display error message when error occurs", () => {
        const options = {
            propsData: {
                errors: [],
                request: {length: "0", weight: "1"},
                response: {value: "", comment: "", style: ""}
            }
        };
        const wrapper = shallowMount(Bmi, options);
        wrapper.find("#length").trigger("keyup.enter");

        assert.equal(wrapper.props().errors.length, 1);
    });

    it("should clear the screen before processing the input");
});
