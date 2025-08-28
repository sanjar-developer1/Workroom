<template>
    <div class="sidebar">
        <img src="/src/assets/images/logo.svg" alt="bu yerda logo svg bor" class="logo-svg">
        <h1 class="get-started">Get Started</h1>
        <div v-for="(step, index) in steps" :key="index" class="step">
            <div class="circle-wrapper">
                <div class="circle" :class="{
                    active: currentStep === index,
                    completed: currentStep > index
                }"></div>
                <p>{{ step }}</p>
            </div>
            <div v-if="index < steps.length - 1" class="line"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const steps = [
    "Valid your phone",
    "Tell about yourself",
    "Tell about your company",
    "Invite Team Members"
]

const currentStep = ref(0) // qaysi stepda turganini boshqaradi
</script>

<style>
.sidebar {
    background: #3f8cff;
    color: white;
    width: calc(346/13.6*1vw);
    padding: calc(60/13.6*1vw) calc(40/13.6*1vw);
    border-radius: calc(24/13.6*1vw);
    display: flex;
    flex-direction: column;
    gap: calc(30/13.6*1vw);
}

.step {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: calc(8/13.6*1vw);
    padding-bottom: calc(6.5/13.6*1vw);
}

.circle {
    width: calc(20/13.6*1vw);
    height: calc(20/13.6*1vw);
    border-radius: 50%;
    border: calc(2/13.6*1vw) solid white;
    background: transparent;
    display: flex;
}

.circle-wrapper {
    display: flex;
    align-items: center;
    gap: calc(22/13.6*1vw);
}

.get-started {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(36/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    margin-bottom: calc(50/13.6*1vw);
}

.logo-svg {
    width: calc(50/13.6*1vw);
    height: calc(50/13.6*1vw);
    margin-bottom: calc(60/13.6*1vw);
}

.circle.active {
    background: white;
}

.circle.completed {
    background: white;
    border: calc(2/13.6*1vw) solid white;
}

.step p {
    margin: 0;
    font-size: calc(14/13.6*1vw);
}

.line {
    width: calc(2/13.6*1vw);
    height: calc(30/13.6*1vw);
    background: white;
    margin-left: calc(9/13.6*1vw);
}
</style>
