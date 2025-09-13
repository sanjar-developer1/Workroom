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
            <router-link class="sidebar-center-support" to="">
                <img src="../assets/images/support.png" alt="bu yerda support icon bor" />
                <button><i class="fa-regular fa-comment"></i>Support</button>
            </router-link>
            <router-link to="/" class="logout"><i class="fa-solid fa-right-from-bracket"></i>Logout</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
</style>
