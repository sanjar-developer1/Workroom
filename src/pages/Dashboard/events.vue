<template>
  <div class="events-wrapper">
    <Sidebar />
    <div class="events">
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
        <div class="add-tasks-btn">
          <div class="dashboard-center-left" style="align-items: start">
            <router-link to="/dashboard" style="color: #3f8cff"
              ><i class="fa-solid fa-arrow-left"></i>Back to
              Dashboard</router-link
            >
            <p>Nearest Events</p>
          </div>
          <button><i class="fa-solid fa-plus"></i>Add Event</button>
        </div>
      </div>
      <div class="event-grid">
        <div class="event-card" v-for="event in sortedEvents" :key="event.id">
          <div
            class="event-line"
            :class="{
              'event-line-blue': isNearest(event),
              'event-line-pink': !isNearest(event),
            }"
          ></div>

          <div class="event-info">
            <h3>{{ event.title }}</h3>
            <p>{{ formatDateTime(event.date, event.time) }}</p>
          </div>

          <div class="event-right">
            <span class="event-duration">{{ event.duration }}</span>
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
import events from "../../data/events.json";
import Sidebar from "../../components/sidebar.vue";

export default {
  name: "Events",
  data() {
    return {
      events,
    };
  },
  components: {
    Sidebar,
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
  methods: {
    isNearest(event) {
      const now = new Date();
      const futureEvents = this.sortedEvents.filter(
        (e) => new Date(`${e.date}T${e.time}`) > now
      );
      return futureEvents.length > 0 && futureEvents[0].id === event.id;
    },
    formatDateTime(date, time) {
      const today = new Date().toISOString().split("T")[0];
      const tomorrow = new Date(Date.now() + 86400000)
        .toISOString()
        .split("T")[0];

      if (date === today) return `Today | ${time}`;
      if (date === tomorrow) return `Tomorrow | ${time}`;

      const dt = new Date(`${date}T${time}`);
      return dt.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
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
