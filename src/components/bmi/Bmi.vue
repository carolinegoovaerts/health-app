<template>
    <div class="bmi">
        <h2>BMI Calculator</h2>
        <label for="length">Length</label>
        <input v-on:keyup.enter="computeBmi" id="length" v-model="request.length">

        <label for="weight">Weight</label>
        <input v-on:keyup.enter="computeBmi" id="weight" v-model="request.weight">

        <p>The Body Mass Index is {{response.bmi}}</p>
    </div>
</template>

<script lang="ts">
    import { BmiAlgorithm } from "@/components/bmi/bmi-algorithm";
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Bmi extends Vue {
        private request: BmiRequest = {length: 0, weight: 0};
        private response: BmiResponse = {bmi: 0};

        protected computeBmi() {
            this.response.bmi = BmiAlgorithm.determine(this.request);
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
