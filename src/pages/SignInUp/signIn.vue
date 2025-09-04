<template>
    <div class="signIn">
        <div class="signInLeft">
            <div class="signInLogo">
                <img src="/src/assets/images/logo.svg" alt="bu yerda rasm bor" />
                <router-link to="/" class="logoText">Woorkroom</router-link>
            </div>
            <p>Your place to work Plan. Create. Control.</p>
            <img src="/src/assets/images/Illustration.png" alt="" />
        </div>

        <div class="signInRight">
            <p class="title">Sign In to Woorkroom</p>

            <form @submit.prevent="kirish" class="sign-in-form">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input id="email" v-model="email" type="email" placeholder="Enter your email" />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" v-model="password" type="password" placeholder="Enter your password" />
                </div>

                <button type="submit">
                    Sign In <i class="fa-solid fa-arrow-right"></i>
                </button>
            </form>

            <router-link to="/signUp" class="forgot-password">
                Don’t have an account?
            </router-link>
        </div>
    </div>
</template>

<script>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import api from '../../utils/axios'

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async kirish() {
            if (!this.email || !this.password) {
                Toastify({
                    text: "Iltimos, barcha maydonlarni to'ldiring",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    background: "#f44336",
                    close: true,
                }).showToast();
                return;
            }

            this.loading = true;

            try {
                const res = await api.post("/users/login", {
                    email: this.email,
                    password: this.password,
                });

                // backend might return { token, user }
                const { token, user } = res.data;

                localStorage.setItem("token", token);

                Toastify({
                    text: "Kirish muvaffaqiyatli",
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
                localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Yjk2Y2U3OWFhOTY3YjVmZTdlMjFkNSIsImVtYWlsIjoiYWxpY2UzQGV4YW1wbGUuY29tIiwibmFtZSI6IkFsaWNlIiwiaWF0IjoxNzU2OTgyNTAzLCJleHAiOjE3NTY5ODYxMDN9.zW0sWKFsr5hpWO52wFA4RH5Qjncw2jBrV4tu6tOZ9yo")
                this.loading = false;
            }
        }

    },
};
</script>

<style>
.signIn {
    display: flex;
    min-width: 100vw;

}

.signInLeft {
    background: #3f8cff;
    width: 40%;
    color: #fff;
    padding: calc(40/13.6*1vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(30/13.6*1vw);
    border-top-left-radius: calc(12/13.6*1vw);
    border-bottom-left-radius: calc(12/13.6*1vw);
    padding-bottom: calc(20/13.6*1vw);

}

.signInLeft p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(40/13.6*1vw);
    line-height: calc(56/13.6*1vw);

}

.signInLeft img {
    height: calc(405/13.6*1vw);
}


.signInLogo {
    display: flex;
    align-items: center;
    gap: calc(12/13.6*1vw);
}

.signInLogo img {
    width: calc(50/13.6*1vw);
    height: calc(50/13.6*1vw);
}

.logoText {
    font-weight: 700;
    font-size: calc(24/13.6*1vw);
    color: #fff;
    text-decoration: none;
}

.signInRight {
    flex: 1;
    background: #fff;
    border-top-right-radius: calc(12/13.6*1vw);
    border-bottom-right-radius: calc(12/13.6*1vw);
    padding: calc(40/13.6*1vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.signInRight .title {
    font-size: calc(22/13.6*1vw);
    font-weight: 700;
    margin-bottom: calc(24/13.6*1vw);
}

.sign-in-form {
    width: 100%;
    max-width: calc(400/13.6*1vw);
    display: flex;
    flex-direction: column;
    gap: calc(16/13.6*1vw);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: calc(6/13.6*1vw);
}

.form-group label {
    font-size: calc(14/13.6*1vw);
    font-weight: 600;
    color: #7d8592;
}

.form-group input {
    padding: calc(10/13.6*1vw) calc(14/13.6*1vw);
    border: 1px solid #ccc;
    border-radius: calc(8/13.6*1vw);
    outline: none;
    font-size: calc(14/13.6*1vw);
}

.form-group input:focus {
    border-color: #3f8cff;
    box-shadow: 0 0 0 2px rgba(63, 140, 255, 0.2);
}

.sign-in-form button {
    padding: calc(12/13.6*1vw);
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: calc(8/13.6*1vw);
    cursor: pointer;
    font-weight: 600;
    font-size: calc(14/13.6*1vw);
}

.forgot-password {
    margin-top: calc(16/13.6*1vw);
    color: #3f8cff;
    font-weight: 600;
    font-size: calc(14/13.6*1vw);
    text-decoration: none;
}
</style>
