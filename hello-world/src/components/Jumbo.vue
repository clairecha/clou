<template>
  <div class="wra" >
    <h1>CLOU</h1>
<router-link to="/sign-in" class="btn btn-link" >Se connecter</router-link>  
  <!-- <div class="wrapper" ><Form /></div>  -->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import Form from './Form';

export default {
  name: 'App',
  components: {
    // Form,
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6067ac;
  margin-top: 0px;
  /* background-color: inherit; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10%; */


}
.tab-content > .active {
  display: flex;
  align-items: center;
  justify-content: center;
}
.containerrr {
  border-radius: 15px;
  color: white;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  border:1.5px solid white;
  /* background-color: #7277AB; */
  justify-content: center;
  
}
.template {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
/* .wra{
    border:4px solid white;
    width: 40vw;
    height: 70vh;
    background-color: #4E538B;

} */


</style>
