<template>
  <div class="calendar-wrapper">
    <!-- Month header -->
    <div class="calendar-header">
      <div class="controls">
        <button @click="prevMonth" aria-label="Previous month">‹</button>
        <span class="month">{{ monthYear }}</span>
        <button @click="nextMonth" aria-label="Next month">›</button>
      </div>
      <button class="add-btn" @click="openAddModal()">+ Add Event</button>
    </div>

    <!-- Weekdays -->
    <div class="calendar-weekdays">
      <div v-for="d in weekdays" :key="d" class="weekday">{{ d }}</div>
    </div>

    <!-- Days grid -->
    <div class="calendar-days">
      <div
        v-for="(day, idx) in daysInMonth"
        :key="`day-${idx}`"
        :class="[
          'calendar-day',
          { 'calendar-empty': !day, 'calendar-today': isToday(day) }
        ]"
        @click="day && openAddModal(day)"
      >
        <div v-if="day" class="calendar-day-number">{{ day.getDate() }}</div>

        <div
          v-for="event in getEventsForDay(day)"
          :key="event._id ? event._id : event.id ? event.id : eventTitleKey(event, idx)"
          class="calendar-event"
          :title="event.title + (event.description ? ' — ' + event.description : '')"
        >
          {{ event.title }}
        </div>
      </div>
    </div>

    <!-- Add/Edit Event Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-box">
        <h2>{{ editingEvent ? 'Edit Event' : 'Add Event' }}</h2>

        <label class="label">Title</label>
        <input v-model="newEvent.title" type="text" placeholder="Event title" />

        <label class="label">Description</label>
        <textarea v-model="newEvent.description" rows="3" placeholder="Optional description"></textarea>

        <label class="label">Date</label>
        <input v-model="newEvent.date" type="date" />

        <div class="modal-actions">
          <button class="save-btn" @click="saveEvent">{{ saving ? 'Saving...' : (editingEvent ? 'Save' : 'Add') }}</button>
          <button class="cancel-btn" @click="closeModal" type="button">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Loading / Empty states -->
    <div v-if="loading" class="loading-overlay">Loading events...</div>
  </div>
</template>

<script>
import api from "../../utils/axios"; // <-- your requested import path
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  name: "Calendar",
  data() {
    return {
      currentDate: new Date(),
      events: [],
      loading: false,
      showModal: false,
      saving: false,
      editingEvent: null,
      newEvent: {
        title: "",
        description: "",
        date: ""
      },
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  },
  computed: {
    monthYear() {
      return this.currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
      });
    },
    daysInMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      const days = [];
      // blanks before first weekday
      for (let i = 0; i < firstDay.getDay(); i++) days.push(null);
      // actual days
      for (let d = 1; d <= lastDay.getDate(); d++) {
        days.push(new Date(year, month, d));
      }
      return days;
    }
  },
  methods: {
    eventTitleKey(event, idx) {
      return `${event.title || "untitled"}-${idx}`;
    },
    async fetchEvents() {
      this.loading = true;
      try {
        const res = await api.get("/events/events", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        const payload = res.data;
        if (Array.isArray(payload)) {
          this.events = payload;
        } else if (payload.events) {
          this.events = payload.events;
        } else if (payload.data && Array.isArray(payload.data)) {
          this.events = payload.data;
        } else {
          // fallback: set to raw payload if looks like array-like
          this.events = payload || [];
        }
      } catch (err) {
        console.error("fetchEvents error:", err);
        Toastify({
          text: err.response?.data?.message || "Failed to load events",
          duration: 3500,
          gravity: "top",
          position: "center",
          background: "#f44336",
          close: true
        }).showToast();
      } finally {
        this.loading = false;
      }
    },
    getEventsForDay(day) {
      if (!day) return [];
      const dateStr = day.toISOString().split("T")[0];
      // backend might store datetime or date-only; match startsWith to be safe
      return this.events.filter((e) => {
        if (!e) return false;
        const d = (e.date || e.eventDate || "").toString();
        return d.startsWith(dateStr);
      });
    },
    isToday(day) {
      if (!day) return false;
      const t = new Date();
      return (
        day.getDate() === t.getDate() &&
        day.getMonth() === t.getMonth() &&
        day.getFullYear() === t.getFullYear()
      );
    },
    prevMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      );
    },
    nextMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      );
    },
    openAddModal(day = null) {
      this.editingEvent = null;
      if (day) this.newEvent.date = day.toISOString().split("T")[0];
      else this.newEvent.date = this.currentDate.toISOString().split("T")[0];
      this.newEvent.title = "";
      this.newEvent.description = "";
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.saving = false;
      this.editingEvent = null;
      this.newEvent = { title: "", description: "", date: "" };
    },
    async saveEvent() {
      if (!this.newEvent.title || !this.newEvent.date) {
        Toastify({
          text: "Please fill title and date",
          duration: 2500,
          gravity: "top",
          position: "center",
          background: "#f44336",
          close: true
        }).showToast();
        return;
      }

      this.saving = true;

      try {
        // CREATE route per your message: /events/createEvent
        const res = await api.post(
          "/events/createEvent",
          {
            title: this.newEvent.title,
            description: this.newEvent.description,
            date: this.newEvent.date
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          }
        );

        // backend might return created event in res.data.event OR res.data
        const created =
          res.data?.event ||
          res.data?.data ||
          (Array.isArray(res.data) ? res.data[0] : res.data);

        // push created or fallback to newEvent (with a temporary id)
        if (created && (created._id || created.id)) {
          this.events.push(created);
        } else if (created && typeof created === "object") {
          // if created object but no id, push as is
          this.events.push(created);
        } else {
          // fallback: construct local event object
          this.events.push({
            _id: `local-${Date.now()}`,
            title: this.newEvent.title,
            description: this.newEvent.description,
            date: this.newEvent.date
          });
        }

        Toastify({
          text: "Event added successfully",
          duration: 2500,
          gravity: "top",
          position: "center",
          background: "#4caf50",
          close: true
        }).showToast();

        this.closeModal();
      } catch (err) {
        console.error("saveEvent error:", err);
        const msg = err.response?.data?.message || err.message || "Error adding event";
        Toastify({
          text: msg,
          duration: 3500,
          gravity: "top",
          position: "center",
          background: "#f44336",
          close: true
        }).showToast();
        this.saving = false;
      }
    }
  },
  mounted() {
    this.fetchEvents();
  }
};
</script>

<style scoped>
/* ===== Calendar Box ===== */
.calendar-wrapper {
  background: #fff;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  position: relative;
}

/* Header */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.controls button {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #374151;
  cursor: pointer;
}
.month {
  font-weight: 600;
  font-size: 1.125rem;
  color: #111827;
}
.add-btn {
  background: #3f8cff;
  color: #fff;
  border: none;
  padding: 0.5rem 0.85rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
}

/* Weekdays */
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}
.weekday {
  padding: 0.25rem 0;
}

/* Days */
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}
.calendar-day {
  min-height: 6rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
}
.calendar-empty {
  background: #f9fafb;
  border-style: dashed;
  opacity: 0.6;
}
.calendar-day-number {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

/* highlight today */
.calendar-today {
  box-shadow: inset 0 0 0 2px rgba(59, 130, 246, 0.12);
  border: 2px solid #3b82f6;
}

/* Events */
.calendar-event {
  width: 100%;
  background: #dbeafe;
  color: #1d4ed8;
  border-radius: 0.375rem;
  padding: 0.125rem 0.35rem;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 1.05rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
}
.modal-box {
  background: #fff;
  border-radius: 1rem;
  padding: 1.25rem;
  width: 22rem;
  max-width: 92%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
.modal-box h2 {
  margin: 0 0 0.75rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
}
.label {
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
  color: #6b7280;
}
.modal-box input,
.modal-box textarea {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  outline: none;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.85rem;
}
.save-btn {
  background: #3f8cff;
  color: #fff;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
}
.cancel-btn {
  background: #f3f4f6;
  color: #374151;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

/* Loading overlay */
.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  background: rgba(255,255,255,0.6);
  border-radius: 1.5rem;
  font-weight: 600;
}
</style>
