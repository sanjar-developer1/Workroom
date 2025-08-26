<template>
    <div class="signIn">
        <div class="signInLeft">
            <div class="signInLogo">
                <img src="/src/assets/images/logo.svg" alt="bu yerda rasm bor">
                <router-link to="/" class="logoText">Woorkroom</router-link>
            </div>
            <p>Your place to work Plan. Create. Control.</p>
            <img src="/src/assets/images/Illustration.png" alt="">
        </div>
        <div class="signInRight">
            <p>Sign In to Woorkroom</p>
            <form @submit.prevent="kirish" class="sign-in-form">
                <div class="email">
                    <p>Email Address</p>
                    <input v-model="email" type="email" placeholder="Enter your email" />
                </div>
                <div class="password">
                    <p>Password</p>
                    <input v-model="password" type="password" placeholder="Enter your password" />
                </div>
                <button type="submit">
                    Sign In <i class="fa-solid fa-arrow-right"></i>
                </button>
            </form>
            <router-link to="/forgot-password" class="forgot-password">Don’t have an account?</router-link>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        kirish() {
            if (this.email && this.password) {
                alert('Kirish muvaffaqiyatli');
                this.$router.push("/steep1")
            } else {
                alert('Iltimos, barcha maydonlarni to\'ldiring.');
            }
        }
    }
}
</script>


<style>
.signIn {
    display: flex;
}

.signInLogo {
    display: flex;
    align-items: center;
    gap: calc(30/13.6*1vw);
}

.signInLogo img {
    width: calc(50/13.6*1vw);
    height: calc(50/13.6*1vw);
}

.logoText {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(30/13.6*1vw);
    line-height: 100%;
}

.signInLeft {
    background-color: #3F8CFF;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    row-gap: calc(50/13.6*1vw);
    border-top-left-radius: calc(12/13.6*1vw);
    border-bottom-left-radius: calc(12/13.6*1vw);
    padding: calc(25/13.6*1vw) calc(96/13.6*1vw) calc(25/13.6*1vw) calc(96/13.6*1vw);
}

.signInLeft p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(40/13.6*1vw);
    line-height: calc(56/13.6*1vw);
    color: #FFFFFF;
    width: calc(400/13.6*1vw);
}

.signInLeft>img {
    width: calc(500/13.6*1vw);
    height: calc(373/13.6*1vw);
}


.signInRight {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    border-top-right-radius: calc(12/13.6*1vw);
    border-bottom-right-radius: calc(12/13.6*1vw);
}

.signInRight>p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(22/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: calc(33/13.6*1vw);

}

form {
    font-family: "Nunito Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
}

form p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 1vw;
    line-height: calc(24/13.6*1vw);
    color: #7D8592;
}

form input {
    width: calc(403/13.6*1vw);
    padding: calc(11/13.6*1vw) calc(18/13.6*1vw);
    font-size: calc(14/13.6*1vw);
    border: 1px solid #ccc;
    border-radius: calc(14/13.6*1vw);
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: calc(14/13.6*1vw);
    line-height: calc(24/13.6*1vw);

}

form .email,
form .password {
    margin-bottom: calc(16/13.6*1vw);
    /* har bir blok orasida bo‘shliq */
}

form button {
    width: calc(170/13.6*1vw);
    padding: calc(10/13.6*1vw);
    background-color: #4a90e2;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: calc(6/13.6*1vw);
    cursor: pointer;
}

.forget {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(403/13.6*1vw);
    margin: calc(16/13.6*1vw) 0;
    font-size: calc(14/13.6*1vw);
    font-family: Nunito Sans;
}

/* label ichidagi checkbox va matn yonma-yon chiqishi uchun */
.forget label {
    display: flex;
    align-items: center;
    gap: calc(8/13.6*1vw);
    cursor: pointer;
    color: #7D8592;
    font-weight: 400;
}

/* checkbox o'zi */
.forget input[type="checkbox"] {
    width: calc(18/13.6*1vw);
    height: calc(18/13.6*1vw);
    accent-color: #3F8CFF;
    /* yangi browserlarda rang berish */
    cursor: pointer;
    margin: 0;
}

/* "Forgot Password?" link ko‘rinishi */
.forget span {
    color: #3F8CFF;
    font-weight: 600;
    cursor: pointer;
}

.forgot-password {
    margin-top: calc(20/13.6*1vw);
    color: #3F8CFF;
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: calc(16/13.6*1vw);
    line-height: 100%;
    text-align: center;

}

.sign-in-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(15/13.6*1vw);
}

.sign-in-form button {
    padding: calc(10/13.6*1vw) calc(20/13.6*1vw);
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: calc(8/13.6*1vw);
    cursor: pointer;
    font-weight: 500;
}
</style>