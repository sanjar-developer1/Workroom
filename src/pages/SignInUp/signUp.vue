<template>
    <div>
        <Stepper />
        <Steep1 />
    </div>
</template>
<script>
import Steep1 from "./SignUp/steep1.vue";
import Stepper from "./SignUp/stepper.vue"
export default {
    components: {
        Stepper,
        Steep1
    }
}
</script>
<style>
div {
    display: flex;
    column-gap: calc(30/13.6*1vw);
}
</style>