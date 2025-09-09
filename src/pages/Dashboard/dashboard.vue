<template>
  <div class="dashboard">
    <Sidebar />
    <div class="dashboard-wrapper">
      <div class="dashboard-top">
        <label class="search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
        </label>

        <div class="dashboard-user">
          <div class="bell">
            <i class="fa-regular fa-bell"></i>
          </div>
          <router-link class="user" to="/profile">
            <img src="../../assets/images/evan.png" alt="" />
            <p>UserName</p>
            <i class="fa-solid fa-chevron-down"></i>
          </router-link>
        </div>
      </div>

      <div class="dashboard-center">
        <div class="dashboard-center-left">
          <span>Welcome back, Evan!</span>
          <p>Dashboard</p>
        </div>
      </div>
      <div class="dashboard-bottom">
        <div class="workload">
          <div class="workload-top">
            <p>Workload</p>
            <router-link to="/profile" class="view-all">
              View all <i class="fa-solid fa-chevron-right"></i
            ></router-link>
          </div>
          <div class="user-wrapper">
            <div class="users" v-for="(user, index) in users" :key="index">
              <img :src="user.image" alt="bu yerda evan bor" />
              <p>{{ user.name }}</p>
              <span>{{ user.position }}</span>
            </div>
          </div>
        </div>
        <div class="near-events">
          <div class="near-top">
            <p>Nearest Events</p>
            <router-link to="/nearestEvents" class="view-all"
              >View all <i class="fa-solid fa-chevron-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../components/sidebar.vue";
import api from "../../utils/axios";

import data from "../../data/data.json";

export default {
  name: "Dashboard",

  data() {
    return {
      users: data,
      events: [],
    };
  },
  components: {
    Sidebar,
  },
  methods: {
    async getUsers() {
      try {
        const res = await api.get("/users/users");
        // const res2 = await api.get("/events"); bu hatolik events bilan bog'liq

        this.users = res.data;
        // this.events = res2.data;
        // console.log("Events", res2);
        console.log("Users", res);
      } catch (error) {
        console.error("Users kelmadi", error);
      }
    },
  },
  mounted() {
    // this.getUsers();
  },
};
</script>


<style>
.dashboard {
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
}

.dashboard-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(30 / 13.6 * 1vw);
}

.dashboard-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  position: relative;
  display: inline-block;
  width: calc(412 / 13.6 * 1vw);
}

.search i {
  position: absolute;
  left: calc(12 / 13.6 * 1vw);
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  /* kulrang */
  font-size: calc(16 / 13.6 * 1vw);
}

.search input {
  width: 100%;
  padding: calc(10 / 13.6 * 1vw) calc(12 / 13.6 * 1vw) calc(10 / 13.6 * 1vw)
    calc(38 / 13.6 * 1vw);
  border: 1px solid #d1d5db;
  border-radius: calc(10 / 13.6 * 1vw);
  outline: none;
  transition: box-shadow 0.15s, border-color 0.15s;
  margin-left: calc(10 / 13.6 * 1vw);
}

.search input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}

.dashboard-user {
  display: flex;
  align-items: center;
  gap: calc(20 / 13.6 * 1vw);
  margin-right: calc(20 / 13.6 * 1vw);
}

.bell {
  width: calc(48 / 13.6 * 1vw);
  height: calc(48 / 13.6 * 1vw);
  border-radius: calc(14 / 13.6 * 1vw);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bell i {
  font-size: calc(20 / 13.6 * 1vw);
  margin: 0;
  padding: 0;
}

.user {
  padding: calc(9 / 13.6 * 1vw) calc(14 / 13.6 * 1vw);
  display: flex;
  align-items: center;
  justify-self: center;
  gap: calc(10 / 13.6 * 1vw);
  background-color: #ffffff;
  border-radius: calc(14 / 13.6 * 1vw);
  color: black;
}

.user p {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(16 / 13.6 * 1vw);
  line-height: calc(24 / 13.6 * 1vw);
  letter-spacing: 0px;
}

.user img {
  width: calc(30 / 13.6 * 1vw);
  height: calc(30 / 13.6 * 1vw);
  border-radius: 50%;
}

.dashboard-center-left {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: calc(10 / 13.6 * 1vw);
}

.dashboard-center-left span {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: calc(16 / 13.4 * 1vw);
  line-height: 100%;
  letter-spacing: 0px;
  color: #7d8592;
}

.dashboard-center-left p {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(36 / 13.6 * 1vw);
  line-height: 100%;
  letter-spacing: 0px;
}

.dashboard-center {
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  margin-top: calc(50 / 13.6 * 1vw);
}

.dashboard-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(30 / 13.6 * 1vw);
}

.workload {
  width: 100%;
  display: flex;
  align-self: start;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: calc(20 / 13.6 * 1vw);
  border-radius: calc(24 / 13.6 * 1vw);
}

.workload-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.workload-top p {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(22 / 13.6 * 1vw);
  line-height: 100%;
  letter-spacing: 0px;
}

.view-all {
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: calc(16 / 13.6 * 1vw);
  line-height: 100%;
  letter-spacing: 0px;
  text-align: right;
  color: #3f8cff;
}

.near-events {
  width: calc(500 / 13.6 * 1vw);
  background-color: #ffffff;
  padding: calc(20 / 13.6 * 1vw);
  border-radius: calc(24 / 13.6 * 1vw);
  padding: calc(25 / 13.6 * 1vw);
}

.near-top p {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(22 / 13.6 * 1vw);
  line-height: 100%;
  letter-spacing: 0px;
}

/* user style start */

.user-wrapper {
  gap: calc(16 / 13.6 * 1vw);
  margin-top: calc(20 / 13.6 * 1vw);
  display: flex;
  flex-wrap: wrap;
}

.users {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: calc(20 / 13.6 * 1vw) calc(35 / 13.6 * 1vw);
  border-radius: calc(24 / 13.6 * 1vw);
  background-color: #f4f9fd;
  width: calc(165 / 13.6 * 1vw);
}

.users img {
  width: calc(50 / 13.6 * 1vw);
  height: calc(50 / 13.6 * 1vw);
  border-radius: 50%;
}

.users p {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(16 / 13.6 * 1vw);
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  margin-top: calc(20 / 13.6 * 1vw);
}

.users span {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: calc(14 / 13.6 * 1vw);
  line-height: calc(21 / 13.6 * 1vw);
  letter-spacing: 0px;
  text-align: center;
}
</style>