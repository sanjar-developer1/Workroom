<template>
  <div class="sidebar">
    <img src="/src/assets/images/logo.svg" alt="bu yerda logo svg bor" class="logo-svg">
    <h1 class="get-started">Get Started</h1>
    
    <div v-for="(label, index) in steps" :key="index" class="step">
      <div class="circle-wrapper">
        <!-- Highlight active and completed -->
        <div
          class="circle"
          :class="{
            active: step === index + 1,
            completed: step > index + 1
          }"
        ></div>
        <p>{{ label }}</p>
      </div>
      
      <div v-if="index < steps.length - 1" class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // step is 1-based (1,2,3,4)
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      steps: [
        "Valid your phone",
        "Tell about yourself",
        "Tell about your company",
        "Invite Team Members"
      ]
    }
  }
}
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

.circle-wrapper {
  display: flex;
  align-items: center;
  gap: calc(22/13.6*1vw);
}

.get-started {
  font-family: Nunito Sans, sans-serif;
  font-weight: 700;
  font-size: calc(36/13.6*1vw);
  line-height: 100%;
  margin-bottom: calc(50/13.6*1vw);
}

.logo-svg {
  width: calc(50/13.6*1vw);
  height: calc(50/13.6*1vw);
  margin-bottom: calc(60/13.6*1vw);
}

/* Circle base */
.circle {
  width: calc(20/13.6*1vw);
  height: calc(20/13.6*1vw);
  border-radius: 50%;
  border: calc(2/13.6*1vw) solid white;
  background: transparent;
  transition: all 0.3s ease;
}

/* Current step */
.circle.active {
  background: white;
}

/* Completed steps */
.circle.completed {
  background: white;
  border-color: #3f8cff;
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
