<template>
    <div class="step4-wrapper">
        <Stepper step="4" />
        <div class="step4">
            <span>Step 4/4</span>
            <p>Invite Team Members</p>


            <form @submit.prevent="addMember">
                <div class="form-group">
                    <label for="memberEmail">Member’s Email</label>
                    <input id="memberEmail" v-model="memberEmail" type="email" placeholder="memberemail@gmail.com" />
                </div>
                <button type="submit" class="addAnother">
                    <i class="fa-solid fa-plus"></i>
                    Add another Member
                </button>
            </form>


            <hr class="step2-hr" style="margin-top: calc(300/13.6*1vw);">
            <div class="step2-bottom">
                <button @click="previous" style="background-color: transparent; color: #3F8CFF;"><i
                        class="fa-solid fa-arrow-left"></i>
                    Previous</button>
                <button @click="nextStep">Next Step<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import toastify from 'toastify-js';
import Stepper from './stepper.vue';


export default {
    components: {
        Stepper
    },
    data() {
        return {
            memberEmail: ''
        }
    },
    methods: {
        addMember() {
            if (this.memberEmail) {
                localStorage.setItem('teamMembers', JSON.stringify([...JSON.parse(localStorage.getItem('teamMembers') || '[]'), this.memberEmail]));
                this.memberEmail = '';

                toastify({
                    text: "A'zo muvaffaqiyatli qo'shildi!",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    background: "#4CAF50",
                }).showToast();
            }
            else {
                toastify({
                    text: "Iltimos, to'g'ri e-pochta manzilini kiriting.",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    background: "#FF5722",
                }).showToast();
            }
        },
        previous() {
            this.$router.push('/step3');
        },
        nextStep() {
            const members = JSON.parse(localStorage.getItem('teamMembers') || '[]');

            if (members.length > 0) {
                toastify({
                    text: "Kirish muvaffaqiyatli",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    background: "#4CAF50",
                }).showToast();               

                this.$router.push('/success')
            } else {
                toastify({
                    text: "Yangi Member qo'shilishi kerak",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    background: "#FF5722",
                }).showToast();
            }
        }
    }
}
</script>
<style>
.step4-wrapper {
    width: 100%;
}

.step4 {
    display: flex;
    align-items: center;
    justify-content: top;
    flex-direction: column;
    width: 100%;
    background-color: #FFFFFF;
    border: calc(1/13.6*1vw) solid #000;
    border-radius: calc(24/13.6*1vw);
    padding: calc(40/13.6*1vw);
    padding-top: calc(75/13.6*1vw);
}

.step4 span {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    text-transform: uppercase;
    color: #3F8CFF;
}

.step4 p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(22/13.6*1vw);
    line-height: 100%;
    text-align: center;
    margin-top: calc(6/13.6*1vw);
}

.addAnother {
    background: none;
    color: #3F8CFF;
    gap: calc(10/13.6*1vw);
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: calc(16/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    text-align: left;
    padding: calc(6/13.6*1vw) calc(6/13.6*1vw);
    margin-top: calc(8/13.6*1vw);
}
</style>