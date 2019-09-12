<template>
    <div class="bmi">
        <h2>BMI Calculator</h2>

        <ul class="errors" v-if="errors.length">
            <li v-for="error in errors">{{ error }}</li>
        </ul>

        <label for="length">Length (m)</label>
        <input v-on:keyup.enter="computeBmi" id="length" v-model="request.length">

        <label for="weight">Weight (kg)</label>
        <input v-on:keyup.enter="computeBmi" id="weight" v-model="request.weight">

        <p :class="response.style" v-if="response.value.length">
            The Body Mass Index is {{response.value}}, which is classified as {{response.comment}}.
        </p>
    </div>
</template>

<script lang="ts">
    import { BmiCalculation } from "@/components/bmi/BmiCalculation";
    import { BmiModelViewAdapter } from "@/components/bmi/BmiModelViewAdapter";
    import { BmiRequestView } from "@/components/bmi/BmiRequestView";
    import { BmiResponseView } from "@/components/bmi/BmiResponseView";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class Bmi extends Vue {
        @Prop({default: {length: "", weight: ""}}) private request!: BmiRequestView;
        @Prop({default: {style: "", comment: "", value: ""}}) private response!: BmiResponseView;
        @Prop({default: []}) private errors!: string[];

        // TODO fix deprecated Prop Mutation
        protected computeBmi() {
            this.resetErrorsAndResponse();
            try {
                const bmiRequest = BmiModelViewAdapter.requestFrom(this.request);
                const bmiResponse = BmiCalculation.determine(bmiRequest);
                this.response = BmiModelViewAdapter.viewOf(bmiResponse);
            } catch (e) {
                this.handleError();
            }
        }

        private handleError() {
            this.errors.push("Both values are required");
            this.errors.push("Both values must be positive numbers");
        }

        private resetErrorsAndResponse() {
            this.response = {style: "", comment: "", value: ""};
            this.errors = [];
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
        padding: 0.5em;
    }

    .errors li {
        color: firebrick;
        text-align: left;
        margin: auto;
    }

    .normal {
        background-color: greenyellow;
        color: black;
    }

    .underweight, .light-overweight {
        background-color: yellow;
        color: black;
    }

    .medium-overweight {
        background-color: orange;
        color: black;
    }

    .obesity {
        background-color: orangered;
        color: white;
    }

    .morbid-obesity {
        background-color: red;
        color: white;
    }

    .super-obesity {
        background-color: purple;
        color: white;
    }
</style>

<style scoped media="only screen (min-width: 768px)">
    div {
        width: 50%;
    }
</style>
