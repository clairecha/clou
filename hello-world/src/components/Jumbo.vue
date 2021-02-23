<template>
 
  <b-container>
      <h1>Connexion</h1>
      <Form />
      <!-- <Header/> -->
    </b-container>
  
</template>

<script>
import Form from './Form';
// import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
  components: {
    Form,
    // Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab-content>.active {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
}
.container {    
    background-color: #4E538B;
    border-radius: 15px;
    /* border: 4px solid black; */
    color: white;
    width: 40vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.template{
    width: 40%;
}
*{
    background-color: #4E538B;

}

</style>
