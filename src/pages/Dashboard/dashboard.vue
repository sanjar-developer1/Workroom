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
        <!-- workload -->
        <div class="workload">
          <div class="workload-top">
            <p>Workload</p>
            <router-link to="/profile" class="view-all">
              View all <i class="fa-solid fa-chevron-right"></i>
            </router-link>
          </div>
          <div class="user-wrapper">
            <div class="users" v-for="(user, index) in users" :key="index">
              <img :src="user.profilePic" alt="bu yerda evan bor" />
              <p>{{ user.name }}</p>
              <!-- <span>{{ user.position }}</span> -->
            </div>
          </div>
        </div>

        <!-- nearest events -->
        <!-- nearest events -->
        <div class="near-events">
          <div class="near-top">
            <p>Nearest Events</p>
            <router-link to="/nearestEvents" class="view-all">
              View all <i class="fa-solid fa-chevron-right"></i>
            </router-link>
          </div>

          <div
            class="event-card"
            v-for="event in sortedEvents.slice(0, 3)"
            :key="event.id"
          >
            <div
              class="event-line"
              :class="{
                'event-line-blue': isNearest(event),
                'event-line-pink': !isNearest(event),
              }"
            ></div>

            <div class="event-info">
              <h3>{{ event.title }}</h3>
              <p>{{ formatDate(event.date) }} | {{ event.time }}</p>
            </div>

            <div class="event-right">
              <span class="event-duration">
                <i class="fa-regular fa-clock"></i> {{ event.duration }}
              </span>
              <i
                class="fa-solid"
                :class="{
                  'fa-arrow-up text-yellow': isNearest(event),
                  'fa-arrow-down text-green': !isNearest(event),
                }"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/sidebar.vue";
import api from "../../utils/axios";
// import data from "../../data/data.json";
// import events from "../../data/events.json";

export default {
  name: "Dashboard",

  data() {
    return {
      users: [],
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
        this.users = res.data;
      } catch (error) {
        console.error("Users kelmadi", error);
      }
    },
    async getEvents() {
      try {
        const res2 = await api.get("/events/events");
        this.events = res2.data;
      } catch (error) {
        console.error("Events kelmadi", error);
      }
    },

    isNearest(event) {
      const now = new Date();
      const eventDate = new Date(`${event.date}T${event.time}`);
      const futureEvents = this.sortedEvents.filter(
        (e) => new Date(`${e.date}T${e.time}`) > now
      );
      return futureEvents.length > 0 && futureEvents[0].id === event.id;
    },
    formatDate(date) {
      const today = new Date().toISOString().split("T")[0];
      const tomorrow = new Date(Date.now() + 86400000)
        .toISOString()
        .split("T")[0];

      if (date === today) return "Today";
      if (date === tomorrow) return "Tomorrow";
      return date;
    },
  },
  mounted() {
    this.getUsers();
    this.getEvents();
    setTimeout(() => {
      console.log(this.users);
    }, 10000);
  },
  computed: {
    sortedEvents() {
      return [...this.events].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA - dateB;
      });
    },
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
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: calc(16 / 13.6 * 1vw);
  line-height: 100%;
  letter-spacing: 0px;
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
  align-items: top;
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

/* near events davomi */

.near-events {
  width: calc(500 / 13.6 * 1vw);
  background-color: #ffffff;
  border-radius: calc(24 / 13.6 * 1vw);
  padding: calc(25 / 13.6 * 1vw);
  display: flex;
  flex-direction: column;
  gap: calc(16 / 13.6 * 1vw);
}

.near-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(12 / 13.6 * 1vw);
}

.near-top p {
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(22 / 13.6 * 1vw);
  line-height: 100%;
}

/* event styles */
.event-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9fafb;
  border-radius: calc(16 / 13.6 * 1vw);
  padding: calc(14 / 13.6 * 1vw);
  gap: calc(14 / 13.6 * 1vw);
}

.event-line {
  width: calc(4 / 13.6 * 1vw);
  border-radius: calc(2 / 13.6 * 1vw);
  align-self: stretch;
}

.event-line-blue {
  background: #3f8cff;
}

.event-line-pink {
  background: #d946ef;
}

.event-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(6 / 13.6 * 1vw);
}

.event-info h3 {
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: calc(16 / 13.6 * 1vw);
  margin: 0;
}

.event-info p {
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: calc(14 / 13.6 * 1vw);
  color: #6b7280;
  margin: 0;
}

.event-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: calc(8 / 13.6 * 1vw);
}

.event-duration {
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: calc(13 / 13.6 * 1vw);
  color: #374151;
}

.text-yellow {
  color: #fbbf24;
}

.text-green {
  color: #10b981;
}
</style>