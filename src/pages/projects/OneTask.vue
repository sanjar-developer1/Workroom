<template>
  <div class="child-tasks-container">
    <sideBar />

    <div class="tasks-wrapper">
      <h2 class="tasks-header">Project Tasks Details</h2>

      <div v-if="tasks.length" class="tasks-list">
        <div v-for="task in tasks" :key="task._id" class="task-card">
          <div class="task-header">
            <h3 class="task-title">{{ task.title }}</h3>
            <span :class="['status-badge', task.status.toLowerCase().replace(' ', '-')]">
              {{ task.status }}
            </span>
          </div>

          <p class="task-group"><strong>Group:</strong> {{ task.taskGroup }}</p>
          <p class="task-desc"><strong>Description:</strong> {{ task.description }}</p>

          <div class="task-times">
            <div>
              <small>Start:</small>
              <p>{{ task.startTime }}</p>
            </div>
            <div>
              <small>End:</small>
              <p>{{ task.endTime }}</p>
            </div>
          </div>

          <div class="task-footer">
            <span :class="['priority-badge', task.priority.toLowerCase()]">
              Priority: {{ task.priority }}
            </span>
            <span class="assignee" v-if="task.assignee">
              Assigned to: {{ task.assignee.name || task.assignee }}
            </span>
          </div>
        </div>
      </div>

      <div v-else class="no-tasks">
        <p>No tasks yet...</p>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "../../components/Sidebar.vue";
import api from "../../utils/axios";

export default {
  components: { sideBar },
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const res = await api.get(`/projects/tasks/${id}`);
      this.tasks = res.data.tasks || res.data;
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  },
};
</script>

<style scoped>
.child-tasks-container {
  display: flex;
}

.tasks-wrapper {
  flex: 1;
  padding: 30px;
  background-color: #f9faff;
  min-height: 100vh;
  flex-direction: column;
}

.tasks-header {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1f6de0;
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.task-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.task-title {
  font-size: 22px;
  font-weight: 600;
  color: #0a1629;
}

.status-badge {
  padding: 5px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  text-transform: capitalize;
}

.status-badge.pending {
  background-color: #f39c12;
}

.status-badge.in-progress {
  background-color: #3498db;
}

.status-badge.completed {
  background-color: #2ecc71;
}

.status-badge.on-hold {
  background-color: #9b59b6;
}

.task-group,
.task-desc {
  margin: 5px 0;
  font-size: 16px;
  color: #2c3e50;
}

.task-times {
  display: flex;
  gap: 40px;
  margin: 10px 0;
}

.task-times div small {
  font-weight: 500;
  color: #7f8c8d;
}

.task-times div p {
  margin: 0;
  font-weight: 600;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.priority-badge {
  padding: 5px 12px;
  border-radius: 8px;
  font-weight: 600;
  color: #fff;
}

.priority-badge.low {
  background-color: #2ecc71;
}

.priority-badge.medium {
  background-color: #f1c40f;
}

.priority-badge.hard {
  background-color: #e74c3c;
}

.assignee {
  font-weight: 500;
  color: #34495e;
}

.no-tasks {
  text-align: center;
  font-size: 18px;
  color: #7f8c8d;
}
</style>
