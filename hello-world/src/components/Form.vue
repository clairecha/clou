<template>
  <div class="center">
    <div>
      
      <b-tabs content-class="mt-3">
        <b-tab title="SignIn" active><SignIn /> </b-tab>
        <b-tab title="SignUp"><SignUp /> </b-tab>
      </b-tabs>
    </div>
    
  </div>
</template>

<script>
import SignIn from './SignIn';
import SignUp from './SignUp';
// import Gid from './Gid';

export default {
  name: 'Form',
  components: {
    SignIn,
    SignUp,
    // Gid,
  },
};
</script>

<style>

template {
  background-color: #4e538b;
}
.center {
  display: flex;
  justify-content: center; 
  margin-top: 50px;
}
.nav-tabs {
    border-bottom: 0px solid #dee2e6;
    width: 20%;
    margin-left: 40%;
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    
}
.nav-tabs .nav-link {
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-radius: 0.7rem;
    border:1.5px solid white;

}

</style>
