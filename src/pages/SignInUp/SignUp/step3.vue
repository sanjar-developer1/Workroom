<template>
    <div class="step3-wrapper">
        <Stepper />
        <div class="step3">
            <span>Step 3/4</span>
            <p>Tell about your company</p>
        </div>
    </div>
</template>
<script>
import Stepper from './stepper.vue';
export default {
    components: {
        Stepper
    }

}
</script>
<style>
.step3-wrapper {
    width: 100%;
}

.step3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.step3 span {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
    color: #3F8CFF;
}

.step3 p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(22/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    margin-top: calc(6/13.6*1vw);
}
</style>