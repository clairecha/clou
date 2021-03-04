<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6067ac;
}
* {
  background-color: #3a3f76;
  font-family: 'Comfortaa', cursive;
}
</style>
