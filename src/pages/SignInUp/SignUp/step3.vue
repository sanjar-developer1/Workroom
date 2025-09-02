<template>
    <div class="step3-wrapper">
        <Stepper step="3"/>
        <div class="step3">
            <span>Step 3/4</span>
            <p>Tell about your company</p>
            <form action="">
                <div class="form-group">
                    <label for="companyName">Your Company’s Name</label>
                    <input id="companyName" v-model="companyName" type="text" placeholder="Company’s Name" />
                </div>

                <div class="form-group">
                    <label for="password">Business Direction</label>
                    <select name="businessDirection" v-model="businessDirection">
                        <option value="">Select an option</option>
                        <option value="developer">It and programming</option>
                        <option value="designer">Design and creativity</option>
                        <option value="manager">Management and strategy</option>
                    </select>
                </div>
            </form>

            <form action="/submit" method="POST" class="form">
                <p>How many people in your team?</p>

                <div class="options">
                    <label v-for="(opt, index) in options" :key="index" class="option"
                        :class="{ active: teamSize === opt.value }" @click="teamSize = opt.value">
                        {{ opt.label }}
                    </label>
                </div>
            </form>


            <hr class="step2-hr" style="margin-top: calc(140/13.6*1vw);">
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
import Stepper from './stepper.vue';
import toastify from 'toastify-js';
export default {
    components: {
        Stepper
    },

    data() {
        return {
            companyName: '',
            businessDirection: '',
            teamSize: '',
            options: [
                { label: "Only me", value: "only_me" },
                { label: "2-5", value: "2-5" },
                { label: "6-10", value: "6-10" },
                { label: "11-20", value: "11-20" },
                { label: "21-40", value: "21-40" },
                { label: "41-50", value: "41-50" },
                { label: "51-100", value: "51-100" },
                { label: "101-500", value: "101-500" },
            ]
        }
    },
    methods: {
        nextStep() {
            if (this.companyName && this.businessDirection && this.teamSize) {
                localStorage.setItem('companyName', this.companyName);
                localStorage.setItem('businessDirection', this.businessDirection);
                localStorage.setItem('teamSize', this.teamSize);

                toastify({
                    text: "Kirish muvaffaqiyatli",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    background: "#4caf50",
                    close: true,
                }).showToast();

                this.$router.push('/step4');
            }
            else {
                toastify({
                    text: "Iltimos, barcha maydonlarni to'ldiring",
                    duration: 3000,
                    gravity: "top",
                    limit: 1,
                    position: "center",
                    background: "#f44336",
                    close: true,
                }).showToast();
            }
        },
        previous() {
            this.$router.push('/step2');
        }
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
    background-color: #FFFFFF;
    border: calc(1/13.6*1vw) solid #000;
    border-radius: calc(24/13.6*1vw);
    padding: calc(40/13.6*1vw);
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

.form {
    width: calc(403/13.6*1vw);
    color: #7D8592;
}

.form p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: calc(24/13.6*1vw);
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: calc(7/13.6*1vw);
}

.options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: calc(8/13.6*1vw);
}

.option {
    border: 1px solid #ccc;
    border-radius: calc(10/13.6*1vw);
    transition: 0.2s;
    text-align: center;
    padding: calc(11/13.6*1vw) calc(18/13.6*1vw);
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: calc(14/13.6*1vw);
    line-height: calc(24/13.6*1vw);
    letter-spacing: 0px;
    text-align: center;

}

.option.active {
    border-color: #D8E0F0;
    background: #3F8CFF;
    color: #fff;
}
</style>