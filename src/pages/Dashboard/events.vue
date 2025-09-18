<template>
  <div class="events-wrapper">
    <Sidebar />
    <div class="events">
      <!-- Top qismi -->
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

      <!-- Center qismi -->
      <div class="dashboard-center">
        <div class="add-tasks-btn">
          <div class="dashboard-center-left" style="align-items: start">
            <router-link to="/dashboard" style="color: #3f8cff">
              <i class="fa-solid fa-arrow-left"></i>Back to Dashboard
            </router-link>
            <p>Nearest Events</p>
          </div>
          <button>
            <router-link to="/addEvents" style="color: white">
              <i class="fa-solid fa-plus"></i>Add Event
            </router-link>
          </button>
        </div>
      </div>

      <!-- Eventlar grid -->
      <div class="event-grid">
        <div class="event-card" v-for="event in sortedEvents" :key="event._id">
          <div
            class="event-line"
            :class="{
              'event-line-blue': isNearest(event),
              'event-line-pink': !isNearest(event),
            }"
          ></div>

          <div class="event-info">
            <h3>{{ event.name }}</h3>
            <span class="event-duration">{{ getDuration(event.date) }}</span>
          </div>

          <div class="event-right">
            <span class="event-duration">{{ getDuration(event.date) }}</span>
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
</template>

<script>
import Sidebar from "../../components/sidebar.vue";
import api from "../../utils/axios";

export default {
  name: "Events",
  data() {
    return {
      events: [],
    };
  },
  components: {
    Sidebar,
  },
  computed: {
    sortedEvents() {
      return [...this.events].sort((a, b) => {
        const dateA = new Date(Number(a.date));
        const dateB = new Date(Number(b.date));
        return dateA - dateB;
      });
    },
  },
  methods: {
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
      const futureEvents = this.sortedEvents.filter(
        (e) => new Date(Number(e.date)) > now
      );
      return futureEvents.length > 0 && futureEvents[0]._id === event._id;
    },

    formatDateTime(date) {
      const dt = new Date(Number(date));
      if (isNaN(dt.getTime())) return "--";

      const today = new Date().toDateString();
      const tomorrow = new Date(Date.now() + 86400000).toDateString();

      if (dt.toDateString() === today) return "Today";
      if (dt.toDateString() === tomorrow) return "Tomorrow";

      // Sana formatini DD.MM.YYYY shaklida chiqaramiz ket ma ket
      const day = dt.getDate().toString().padStart(2, "0");
      const month = (dt.getMonth() + 1).toString().padStart(2, "0");
      const year = dt.getFullYear();

      return `${day}.${month}.${year}`;
    },
    getDuration(date) {
      if (!date) return "--"; // agar date bo'sh bo'lsa oddiy turadi

      const dt = new Date(Number(date));
      if (isNaN(dt.getTime())) return "--"; // noto‘g‘ri bo‘lsa

      const now = new Date();
      const diffMs = dt - now;

      if (diffMs <= 0) return "Started";

      const diffMins = Math.floor(diffMs / (1000 * 60));
      const hours = Math.floor(diffMins / 60);
      const minutes = diffMins % 60;

      if (hours > 0) return `${hours}h ${minutes}m left`;
      return `${minutes}m left`;
    },
  },
  mounted() {
    this.getEvents();
    this.getDuration();
  },
};
</script>

<style scoped>
.events-wrapper {
  display: flex;
  width: 100%;
}
.events {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
}

.title {
  font-size: calc(22 / 13.6 * 1vw);
  margin-bottom: calc(16 / 13.6 * 1vw);
  font-family: Nunito Sans;
  font-weight: 700;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(14 / 13.6 * 1vw);
}

.event-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: calc(16 / 13.6 * 1vw);
  padding: calc(30 / 13.6 * 1vw) calc(24 / 13.6 * 1vw);
  gap: calc(14 / 13.6 * 1vw);
  width: calc(530 / 13.6 * 1vw);
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

.add-tasks-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: calc(28 / 13.6 * 1vw);
  padding: 0px calc(30 / 13.6 * 1vw);
}

.add-tasks-btn button {
  font-size: calc(16 / 13.6 * 1vw);
  height: calc(48 / 13.6 * 1vw);
  font-family: Nunito Sans;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0px;
}
</style>
