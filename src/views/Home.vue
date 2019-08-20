<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <Bmi/>
    </div>
</template>

<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import HelloWorld from '@/components/HelloWorld.vue';
   import Bmi from '@/components/Bmi.vue';

   @Component({
      components: {
         HelloWorld, Bmi,
      },
   })
   export default class Home extends Vue {
   }
</script>
