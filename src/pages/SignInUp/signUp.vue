<template>
    <div>
        <Stepper step="1"/>
        <Step1 />
    </div>
</template>
<script>
import Step1 from "./SignUp/step1.vue";
import Stepper from "./SignUp/stepper.vue"
export default {
    components: {
        Stepper,
        Step1
    }
}
</script>
<style>
div {
    display: flex;
    column-gap: calc(30/13.6*1vw);
}
</style>