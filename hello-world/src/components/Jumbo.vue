<template>
  <div class="wra">
    <h1 class="clou">CLOU</h1>
    <h2 class="bienvenue">Bienvenue dans l'application chat CLOU !</h2>
    <div class="log">
      <router-link to="/sign-in" class="btn btn-link">Se connecter</router-link>
      <router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 1.5px solid white;
  /* background-color: #7277AB; */
  justify-content: center;
}
.template {
  display: flex;
  justify-content: center;
  align-items: center;
}
.log {
  width: auto;
}
.wra {
  position: relative;
  width: 100%;
}

h1 {
  position: absolute;
  top: 5px;
  left: 5px;
}
.bienvenue {
  margin-top: 20%;
  margin-bottom: 1%;
}

/* ------------------------------------------------------------------- */

@media screen and (max-width: 376px) {
  h1 {
    font-size: 1.5em;
  }
  .bienvenue {
    margin-top: 30%;
    margin-bottom: 30%;
  }
  .btn-link {
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
  }
}
</style>
