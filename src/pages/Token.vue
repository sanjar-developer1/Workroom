<template>
    <div>
        <h2>Checking token to redirect</h2>
    </div>
</template>

<script>
export default {
    mounted() {
        let token = localStorage.getItem('token') || '';
        if (token) {
            this.$router.push('/dashboard')
        } else {
            this.$router.push('login')
        }
    }
}
</script>

<style scoped>
div {
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
}
</style>