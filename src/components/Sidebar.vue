<template>
    <div class="sidebar2">
        <img src="../assets/images/logoblue.png" alt="bu yerda logo bor" />
        <ul>
            <li>
                <img src="../assets/images/active.svg" alt="bu yerda dashboard icon bor"
                    style="width: 24px; height: 24px;" />
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li>
                <img src="../assets/images/inactive.svg" alt="bu yerda projects icon bor"
                    style="width: 24px; height: 24px;" />
                <router-link to="/projects">Projects</router-link>
            </li>
            <li>
                <img src="../assets/images/calendar.svg" alt="bu yerda calendar icon bor"
                    style="width: 24px; height: 24px;">
                <router-link to="/calendar">Calendar</router-link>
            </li>
            <li>
                <img src="../assets/images/vacitons.svg" alt="bu yerda vacations icon bor"
                    style="width: 24px; height: 24px;">
                <router-link to="/vacations">Vacations</router-link>
            </li>
            <li>
                <img src="../assets/images/users.svg" alt="bu yerda employees icon bor"
                    style="width: 24px; height: 24px;">
                <router-link to="/employees">Employees</router-link>
            </li>
        </ul>
        .s
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar2 {
    width: calc(200 / 13.6 * 1vw);
    background-color: white;
    border-radius: calc(24 / 13.6 * 1vw);
    padding-top: calc(40 / 13.6 * 1vw);
    padding-left: calc(24 / 13.6 * 1vw);
    color: #7d8592;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
}

.sidebar2 img {
    width: calc(50 / 13.6 * 1vw);
    height: calc(50 / 13.6 * 1vw);
    cursor: pointer;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: calc(21 / 13.6 * 1vw);
    padding: 0;
    margin: 0;
    margin-top: calc(52 / 13.6 * 1vw);
}

li {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    height: calc(44 / 13.6 * 1vw);
    border-radius: 10px;
    padding: 10px 8px;
}



li::after {
    content: "";
    position: absolute;
    right: 0;
    height: calc(40 / 13.6 * 1vw);
    width: 4px;
    background-color: transparent;
    border-radius: 5px;
    right: -8px;
}


li i,
li a {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: calc(16 / 13.6 * 1vw);
    line-height: 100%;
    letter-spacing: 0px;
    color: #7D8592;
    padding: 0;
}


li:hover {
    background-color: #b9bfca;
}

li:hover::after {
    background-color: #7D8592;
}
</style>
