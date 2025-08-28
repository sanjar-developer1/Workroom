<template>
  <router-view></router-view>
</template>
<script>

export default {}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans';
  list-style: none;
  text-decoration: none;
}

i {
  width: calc(16/13.6*1vw);
  margin-left: calc(11/13.6*1vw);
}

button {
  padding: calc(13/13.6*1vw) calc(22/13.6*1vw);
  color: #FFFFFF;
  background-color: #1F6DE0;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: calc(16/13.6*1vw);
  line-height: 100%;
  gap: calc(5/13.6*1vw);
  border: none;
  border-radius: 1vw;
}
</style>
