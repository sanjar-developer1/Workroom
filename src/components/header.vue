<template >
  <div>
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
  </div>
</template>
<script>
export default {};
</script>
<style >
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
</style>