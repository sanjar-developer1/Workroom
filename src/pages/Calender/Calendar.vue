<template>
  <div class="calendar-wrapper-xyz">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Calendar -->
    <div class="calendar-main-xyz">
      <div class="calendar-topbar-xyz">
        <button class="add-event-btn-xyz" @click="openModal">+ Add Event</button>
      </div>

      <FullCalendar :options="calendarOptions" class="fc-unique-xyz" />

      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay-xyz">
        <div class="modal-xyz">
          <h2 class="modal-title-xyz">Add Event</h2>
          <form @submit.prevent="createEvent">
            <div class="form-group-xyz">
              <label>Title</label>
              <input v-model="newEvent.name" required />
            </div>
            <div class="form-group-xyz">
              <label>Start Date</label>
              <input type="date" v-model="newEvent.date" required />
            </div>
            <div class="form-group-xyz">
              <label>End Date</label>
              <input type="date" required />
            </div>
            <div class="modal-actions-xyz">
              <button type="submit" class="save-btn-xyz">Save</button>
              <button type="button" class="cancel-btn-xyz" @click="closeModal">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "../../utils/axios";

export default {
  components: { Sidebar, FullCalendar },
  data() {
    return {
      events: [],
      showModal: false,
      newEvent: {
        name: "",
        date: ""
      },
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        events: [],
      },
    };
  },
  methods: {
    async fetchEvents() {
      try {
        const res = await axios.get("/events/events");
        this.events = res.data;
        this.calendarOptions.events = [...this.events];
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.newEvent = { title: "", start: "", end: "" };
    },
    async createEvent() {
      try {
        const res = await axios.post("/events/createEvent", this.newEvent);
        this.events.push(res.data);
        this.calendarOptions.events = [...this.events];
        this.closeModal();
      } catch (err) {
        console.error("Error creating event:", err);
      }
    },
  },
  mounted() {
    this.fetchEvents();
  },
};
</script>

<style scoped>
.calendar-wrapper-xyz {
  display: flex;
  height: 100vh;
  background: #f8fafc;
}

.calendar-main-xyz {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.calendar-topbar-xyz {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}

.add-event-btn-xyz {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.add-event-btn-xyz:hover {
  background: #1e40af;
}

/* Modal */
.modal-overlay-xyz {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-xyz {
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  width: 380px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.modal-title-xyz {
  margin-bottom: 16px;
  font-size: 20px;
  color: #111827;
}

.form-group-xyz {
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
}

.form-group-xyz label {
  margin-bottom: 4px;
  font-size: 14px;
  color: #374151;
}

.form-group-xyz input {
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.modal-actions-xyz {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.save-btn-xyz {
  background: #16a34a;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

.save-btn-xyz:hover {
  background: #15803d;
}

.cancel-btn-xyz {
  background: #dc2626;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

.cancel-btn-xyz:hover {
  background: #b91c1c;
}

.modal-overlay-xyz{
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
