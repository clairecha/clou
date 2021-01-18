<template>
  <div id="app">
    <!-- <Chat /> -->
    <router-view></router-view>
  </div>
</template>


<script>
// import Chat from './components/Chat';

export default {
  name: 'App',
  components: {
    // Chat,
    
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}
*{
    background-color: #3A3F76;
    font-family: 'Comfortaa', cursive;
}


</style>
