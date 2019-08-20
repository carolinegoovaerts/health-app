<template>
    <div class="bmi">
        <h1>BMI Calculator</h1>
        <label for="length">Length</label>
        <input id="length" v-model="length">

        <label for="weight">Weight</label>
        <input id="weight" v-model="weight">

        <button v-on:click="computeBmi">Compute!</button>
        <p>The Body Mass Index is {{bmi}}</p>
    </div>
</template>

<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import { BmiAlgorithm } from '@/components/bmiAlgorithm';

   @Component
   export default class Bmi extends Vue {
      private bmi = 0;
      private length = 0;
      private weight = 0;

      protected computeBmi() {
         this.bmi = BmiAlgorithm.determine(this.length, this.weight);
      }
   }
</script>
