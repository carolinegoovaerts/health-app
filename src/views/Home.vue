<template>
    <div class="home">
        <HelloWorld msg="Health Tools"/>
        <Bmi/>
    </div>
</template>

<script lang="ts">
    import Bmi from "@/components/bmi/Bmi.vue";
    import HelloWorld from "@/components/HelloWorld.vue";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {
            Bmi, HelloWorld,
        },
    })
    export default class Home extends Vue {
    }
</script>
