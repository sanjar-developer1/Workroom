<template>
  <div class="addEvents">
    <div class="add-project">
      <!-- Header -->
      <div class="header">
        <h2 class="title">Add Project</h2>
        <router-link to="/" class="close-icon">
          <i class="fa-solid fa-xmark"></i>
        </router-link>
      </div>

      <!-- Form -->
      <form class="project-form">
        <div class="form-group">
          <label>Project Name</label>
          <input type="text" placeholder="Project Name" />
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label>Starts</label>
            <input type="date" />
          </div>
          <div class="form-group half">
            <label>Deadline</label>
            <input type="date" />
          </div>
        </div>

        <div class="form-group">
          <label>Priority</label>
          <select>
            <option>Low</option>
            <option selected>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            placeholder="Add some description of the project"
          ></textarea>
        </div>

        <button class="submit-btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// hech narsa kerak emas
</script>

<style scoped>
.addEvents {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
}

.add-project {
  width: 45vw;
  padding: 2vw;
  background: #fff;
  border-radius: 1vw;
  box-shadow: 0 0.6vw 2vw rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5vw;
  font-weight: 700;
  color: #111827;
}

.close-icon {
  font-size: 1.5vw;
  color: #374151;
  transition: 0.2s;
}

.close-icon:hover {
  color: #ef4444;
}

/* Form */
.project-form {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  width: 100%;
}

.form-row {
  display: flex;
  gap: 2vw;
}

.form-group.half {
  flex: 1;
}

input,
select,
textarea {
  width: 100%;
  padding: 1vh 1vw;
  border: 1px solid #e5e7eb;
  border-radius: 0.5vw;
  font-size: 1vw;
  outline: none;
  transition: 0.2s;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0.5vw rgba(59, 130, 246, 0.3);
}

textarea {
  min-height: 12vh;
  resize: none;
}

/* Button */
.submit-btn {
  padding: 1vh 0;
  font-size: 1vw;
  font-weight: 600;
  color: #fff;
  background: #3b82f6;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #2563eb;
}
</style>
