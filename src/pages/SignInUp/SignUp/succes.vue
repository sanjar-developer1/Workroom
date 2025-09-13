<template>
    <div class="step5">
        <img src="/src/assets/images/Illustration.png" alt="bu yerda rasm bor">
        <p>You are successfully registered!</p>
        <button @click="nextStep">Let's Start <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step1: JSON.parse(localStorage.getItem('stepInfo1')),
        }
    },
    methods: {
        async nextStep() {
            this.$router.push('/dashboard');

            try {
                const res = await api.post("/users/register", {
                    //   name: this.step1.name,
                    email: this.step1.email,
                    password: this.step1.password,
                    phone: Number(this.step1.phone),
                    position: localStorage.getItem('stepInfo2'),
                    company: localStorage.getItem('stepInfo3')
                });

                const { token, user } = res.data;

                localStorage.setItem("token", token);

                Toastify({
                    text: "Registratsiya muvaffaqiyatli",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    background: "#4caf50",
                    close: true,
                }).showToast();

                this.$router.push("/dashboard");
            } catch (err) {
                console.error(err);

                let msg = "Kirishda xatolik yuz berdi";
                if (err.response?.data?.message) {
                    msg = err.response.data.message;
                }

                Toastify({
                    text: msg,
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    background: "#f44336",
                    close: true,
                }).showToast();
            } finally {
                localStorage.setItem(
                    'token',
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Yjk2Y2U3OWFhOTY3YjVmZTdlMjFkNSIsImVtYWlsIjoiYWxpY2UzQGV4YW1wbGUuY29tIiwibmFtZSI6IkFsaWNlIiwiaWF0IjoxNzU2OTgyNTAzLCJleHAiOjE3NTY5ODYxMDN9.zW0sWKFsr5hpWO52wFA4RH5Qjncw2jBrV4tu6tOZ9yo"
                );
                this.loading = false;
            }
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
    text-align: center;
}

.step5 button {
    margin-top: calc(24/13.6*1vw);
}
</style>
