<template>
    <div class="sidebar2">
        <div class="sidebar3">
            <img src="../assets/images/logoblue.png" alt="bu yerda logo bor" />
            <ul>
                <router-link to="/dashboard" class="li">
                    <img src="../assets/images/active.svg" alt="bu yerda dashboard icon bor"
                        style="width: calc(24/13.6*1vw); height: calc(24/13.6*1vw);" />
                    <p>Dashboard</p>
                </router-link>
                <router-link to="/projects" class="li">
                    <img src="../assets/images/inactive.svg" alt="bu yerda projects icon bor"
                        style="width: calc(24/13.6*1vw); height: calc(24/13.6*1vw);" />
                    <p>Projects</p>
                </router-link>
                <router-link to="/calendar" class="li">
                    <img src="../assets/images/calendar.svg" alt="bu yerda calendar icon bor"
                        style="width: calc(24/13.6*1vw); height: calc(24/13.6*1vw);">
                    <p>Calendar</p>
                </router-link>
                <router-link to="/vacations" class="li">
                    <img src="../assets/images/vacitons.svg" alt="bu yerda vacations icon bor"
                        style="width: calc(24/13.6*1vw); height: calc(24/13.6*1vw);">
                    <p>Vacations</p>
                </router-link>
                <router-link to="/employees" class="li">
                    <img src="../assets/images/users.svg" alt="bu yerda employees icon bor"
                        style="width: calc(24/13.6*1vw); height: calc(24/13.6*1vw);">
                    <p>Employees</p>
                </router-link>
            </ul>
        </div>
        <div class="sidebar-center">
            <div @click="modal" class="sidebar-center-support">
                <img src="../assets/images/support.png" alt="bu yerda support icon bor" />
                <button><i class="fa-regular fa-comment"></i>Support</button>
            </div>
            <router-link to="/" class="logout"><i class="fa-solid fa-right-from-bracket"></i>Logout</router-link>
        </div>
    </div>
    <div class="modal" v-show="modalShow">
        <div class="support">
            <div class="support-top">
                <p>Need some Help?</p>
                <div class="x">
                    <i @click="modalShow = false" class="fa-solid fa-xmark" style="cursor: pointer;"></i>
                </div>
            </div>
            <img src="../assets/images/support-img.png" alt="bu yerda support bor">
            <p>Describe your question and our specialists will answer you within 24 hours.</p>
            <div class="form-group">
                <label>Request Subject</label>
                <select aria-placeholder="Select an option" class="form-control">
                    <option>Technical difficulties</option>
                    <option>Design issues</option>
                    <option>Managerial concerns</option>
                    <option>Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description" id="description"
                    placeholder="Add some description of the request"></textarea>
            </div>
            <button @click="sendRequest">Send Request</button>
        </div>
    </div>
</template>

<script>
import toastify from 'toastify-js';

export default {

    data() {
        return {
            modalShow: false
        }
    },
    methods: {
        modal() {
            this.modalShow = true;
        },
        sendRequest() {
            this.modalShow = false;
            toastify({
                text: "Request sent successfully!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "#3F8CFF",
            }).showToast();
        }
    }
};
</script>

<style scoped>
.modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(1px);
}

.sidebar2 {
    width: calc(200 / 13.6 * 1vw);
    height: 100%;
    min-height: 100vh;
    background-color: white;
    border-radius: calc(24 / 13.6 * 1vw);
    padding: calc(40 / 13.6 * 1vw) calc(24 / 13.6 * 1vw);
    color: #7d8592;
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
}

.sidebar2 img {
    width: calc(50 / 13.6 * 1vw);
    height: calc(50 / 13.6 * 1vw);
    cursor: pointer;
    margin-left: calc(10/13.6 * 1vw);
}

.sidebar3 {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 60%;
    padding: 0;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: calc(10 / 13.6 * 1vw);
    padding: 0;
    margin: 0;
    margin-top: calc(52 / 13.6 * 1vw);
}

.li {
    display: flex;
    align-items: center;
    gap: calc(10/13.6*1vw);
    position: relative;
    height: calc(44 / 13.6 * 1vw);
    border-radius: calc(10/13.6*1vw);
    padding: calc(10/13.6*1vw) calc(8/13.6*1vw);
}



.li::after {
    content: "";
    position: absolute;
    right: 0;
    height: calc(40 / 13.6 * 1vw);
    width: calc(4 / 13.6 * 1vw);
    background-color: transparent;
    border-radius: calc(5/13.6*1vw);
    right: calc(-8/13.6*1vw);
}


.li i,
.li {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: calc(16 / 13.6 * 1vw);
    line-height: 100%;
    letter-spacing: 0px;
    color: #7D8592;
    padding: 0;
}


.li:hover {
    background-color: #b9bfca;
}

.li:hover::after {
    background-color: #7D8592;
}

.sidebar-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: calc(21/13.6*1vw);
}

.sidebar-center-support {
    width: calc(168/13.6*1vw);
    height: calc(168/13.6*1vw);
    border-radius: calc(24/13.6*1vw);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    padding: calc(10/13.6*1vw);
    background-color: #3F8CFF;
    transform: scale(0.8);
}

.sidebar-center-support img {
    width: calc(140 / 13.6 * 1vw);
    height: calc(124 / 13.6 * 1vw);
    position: absolute;
    top: calc(-50/13.6*1vw);
    left: 0;
}

.sidebar-center-support button {
    margin-top: calc(94/13.6*1vw);
}

.logout {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: calc(16/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #7D8592;
}


/* support style start */
.support {
    padding: calc(30/13.6*1vw);
    background-color: #FFFFFF;
    border-radius: calc(24/13.6*1vw);
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    width: calc(375/13.6*1vw);
}



.support-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.support-top p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(22/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    color: #0A1629;
}

.x {
    background-color: #F4F9FD;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1vw;
    width: calc(44/13.6*1vw);
    height: calc(44/13.6*1vw);
}

.x i {
    font-size: calc(20/13.6*1vw);
    padding: 0;
    margin: 0;
}

.support img {
    width: calc(310/13.6*1vw);
    height: calc(150/13.6*1vw);
    cursor: pointer;
}

.support>p {
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: calc(16/13.6*1vw);
    line-height: calc(24/13.6*1vw);
    letter-spacing: 0px;
    margin-top: calc(30/13.6*1vw);
    color: #7D8592;
    text-align: left;
    width: calc(310/13.6*1vw);

}

.form-control {
    width: calc(310/13.6*1vw);
    height: calc(44/13.6*1vw);
    border: 1px solid #D1D9E6;
    border-radius: calc(14/13.6*1vw);
    padding: calc(10/13.6*1vw);
}

.form-group textarea {
    border: 1px solid #D8E0F0;
    outline: none;
    resize: none;
    width: 100%;
    height: calc(120/13.6*1vw);
    font-size: 1vw;
    padding: calc(11/13.6*1vw) calc(18/13.6*1vw);
    box-sizing: border-box;
    border-radius: 1vw;
}

.support button {
    margin-top: calc(20/13.6*1vw);
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(16/13.6*1vw);
    line-height: 100%;
    letter-spacing: 0px;
    padding: 1vw calc(20/13.6*1vw);
}

/* support style end */
</style>