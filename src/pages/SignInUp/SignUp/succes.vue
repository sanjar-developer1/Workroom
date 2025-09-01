<template>
    <div class="step5">
        <img src="/src/assets/images/Illustration.png" alt="bu yerda rasm bor">
        <p>You are successfully registered!</p>
        <button @click="nextStep">Let's Start <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>
<script>
export default {
    methods: {
        nextStep() {
            this.$router.push('/dashboard');
        }
    }
}
</script>
<style>
.step5 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.step5 img {
    margin-top: calc(60/13.6*1vw);
    width: calc(500/13.6*1vw);
    height: calc(373/13.6*1vw);
}

.step5 p {
    margin-top: calc(60/13.6*1vw);
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(22/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
}

.step5 button {
    margin-top: calc(24/13.6*1vw);
}
</style>