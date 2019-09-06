<template>
    <div class="bmi">
        <h2>BMI Calculator</h2>
        <label for="length">Length</label>
        <input v-on:keyup.enter="computeBmi" id="length" v-model="request.length">

        <label for="weight">Weight</label>
        <input v-on:keyup.enter="computeBmi" id="weight" v-model="request.weight">

        <p :class="response.style">
            The Body Mass Index is {{response.value}}, which is classified as {{response.comment}}.
        </p>
    </div>
</template>

<script lang="ts">
    import { BmiCalculation } from "@/components/bmi/BmiCalculation";
    import { BmiModelViewAdapter } from "@/components/bmi/BmiModelViewAdapter";
    import { BmiResponseView } from "@/components/bmi/BmiResponseView";
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Bmi extends Vue {
        // TODO these should be strings (Presentation logic)
        private request: BmiRequest = {length: 0, weight: 0};
        private response: BmiResponseView = {value: "", style: "", comment: ""};

        protected computeBmi() {
            const bmiResponse = BmiCalculation.determine(this.request);
            this.response = BmiModelViewAdapter.viewOf(bmiResponse);
        }
    }
</script>

<style scoped>
    * {
        line-height: 1.2em;
        font-size: medium;
    }

    h2 {
        font-size: 120%;
    }

    div {
        border: 1px solid lightgrey;
        margin: auto;
    }

    label, input {
        margin: 0.2em;
        width: 5em;
    }

    p {
        background: lavender;
        padding: 0.5em;
    }
</style>

<style scoped media="only screen (min-width: 768px)">
    div {
        width: 50%;
    }
</style>
