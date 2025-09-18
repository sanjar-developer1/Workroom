<template>
  <div class="main">
    <sideBar />
    <!-- <OneTask :tasks="tasks"/> -->
    <router-view :tasks="tasks" />

    <div class="projects-container">
      <div class="projects-header">
        <h3 class="projects-title">Projects</h3>
        <button class="add-btn">
          <img src="../../assets/images/Projects-image/add.png" alt="" /> Add
          Project
        </button>
      </div>
      <div class="projects-body">
        <div class="current-projects">
          <h5 class="current-projects-title">Current Projects &#9662;</h5>
          <div class="project-boxes">
            <div
              class="projects-box"
              v-for="project in projects"
              :key="project.id"
            >
              <p class="code">PN0001245</p>
              <p>{{ project.name }}</p>
              <router-link :to="`/projects/${project._id}`" class="more"
                >View more &#9656;</router-link
              >
            </div>
          </div>
        </div>
        <div class="tasks">
          <div class="tasks-header">
            <h4 class="tasks-title">Tasks</h4>
            <div class="tasks-filter">
              <img
                src="../../assets/images/Projects-image/notifications.png"
                alt="Filter"
                loading="lazy"
                width="30"
                height="30"
              />
            </div>
          </div>
          <div class="tasks-body">
            <div class="tasks-active">Active Tasks</div>
            <div class="all-tasks" v-for="task in tasks" :key="task._id">
              <router-link :to="`/projects/tasks/${task.projectId}`" class="task">
                <div class="tasks-name">
                  <small>Task name</small>
                  <p class="task-name">{{ task.title }}</p>
                </div>
                <div class="task-other">
                  <div class="tasks-name">
                    <small>Start Time</small>
                    <p class="task-deadline">{{ task.startTime }}</p>
                  </div>
                  <div class="tasks-name">
                    <small>End Time</small>
                    <p>{{ task.endTime }}</p>
                  </div>
                  <!-- <p>{{ task.assignee }}</p> -->
                  <div class="tasks-name priority">
                    <small>Priority</small>
                    <p :class="['priority-badge', task.priority.toLowerCase()]">
                      <span v-if="task.priority.toLowerCase() === 'low'"
                        >&#9662;</span
                      >

                      <span v-if="task.priority.toLowerCase() === 'medium'"
                        >&#9650;</span
                      >

                      <span v-if="task.priority.toLowerCase() === 'hard'"
                        >&#9650;</span
                      >

                      {{ task.priority }}
                    </p>
                  </div>

                  <div class="tasks-name">
                    <small>Status</small>
                    <p
                      :class="[
                        'status-badge',
                        task.status.toLowerCase().replace(' ', '-'),
                      ]"
                    >
                      {{ task.status }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "../../components/Sidebar.vue";
import OneTask from "./OneTask.vue";
import api from "../../utils/axios";

export default {
  components: {
    sideBar,
    OneTask,
  },

  data() {
    return {
      projects: [],
      tasks: [],
    };
  },

  methods: {
    async fetchProjects() {
      try {
        const response = await api.get("/projects/projects");
        this.projects = response.data;

        // once projects are loaded, fetch tasks for all
        await this.fetchAllTasks();
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    async fetchAllTasks() {
      try {
        const allTasks = [];

        for (const project of this.projects) {
          const response = await api.get(`/projects/tasks/${project._id}`);
          const projectTasks = response.data.map((task) => ({
            ...task,
            projectName: project.name,
            projectId: project._id, // force attach projectId
          }));
          allTasks.push(...projectTasks);
        }

        this.tasks = allTasks;
        console.log(JSON.parse(JSON.stringify(this.tasks))); // plain array
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },
  },

  mounted() {
    document.title = "Projects - Task Management System";
    this.fetchProjects();
  },
};
</script>

<style scoped>
.projects-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: 80px;
}
.more {
  visibility: hidden;
  color: #3f8cff;
  cursor: pointer;
}
.code {
  font-weight: 200;
  font-size: 15px;
}

.current-projects {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.project-boxes {
  border-top: 1px solid #ccc;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: none;
  overflow-x: auto;
  margin-left: 20px;
}
.projects-box {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 10px;
  cursor: default;
  user-select: none;
}
.projects-box:hover {
  background-color: #f4f9fd;
}

.projects-box:hover .more {
  visibility: visible;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #fff;
}
.projects-title {
  font-size: 34px;
  font-weight: 700;
}

.current-projects-title {
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
}

.projects-body {
  display: flex;
  gap: 30px;
}

.tasks-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 63vw;
  height: 60px;
}

.tasks-title {
  font-size: 28px;
  font-weight: 500;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
}

.add-btn {
  padding: 15px 30px;
  color: #ffffff;
  background-color: #1f6de0;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(16 / 13.6 * 1vw);
  line-height: 100%;
  gap: calc(5 / 13.6 * 1vw);
  border: none;
  border-radius: 1vw;
}
.tasks-active {
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  height: 60px;
  background-color: #e6edf5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
}
.tasks-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.all-tasks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.task {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tasks-name {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}
.tasks-name small {
  font-weight: 300;
}
.tasks-name p {
  font-weight: 600;
  font-size: 18px;
  text-transform: capitalize;
  color: #0a1629;
}
.priority-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 16px;
  padding: 4px 10px;
  border-radius: 8px;
  color: #fff;
  width: fit-content;
}

.task {
  padding: 10px;
  border-radius: 10px;
}

.task:hover {
  background-color: #f4f9fd;
}

/* Green for Low */
.priority-badge.low {
  color: #2ecc71;
}

/* Yellow for Medium */
.priority-badge.medium {
  color: #f1c40f;
}

/* Red for Hard */
.priority-badge.hard {
  color: #e74c3c;
}
.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 8px;
  color: #fff;
  width: fit-content;
  text-transform: capitalize;
}

/* Example colors */
.status-badge.pending {
  color: #f39c12;
}

.status-badge.in-progress {
  color: #3498db;
}

.status-badge.completed {
  color: #2ecc71;
}

.status-badge.on-hold {
  color: #9b59b6;
}
</style>
