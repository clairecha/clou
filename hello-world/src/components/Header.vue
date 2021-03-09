<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="SignIn" active><SignIn /> </b-tab>
      <b-tab title="SignUp"><SignUp /> </b-tab>
    
      <router-link tag="li" to="/sign-up">
        <a>/foo</a>
      </router-link>
    </b-tabs>
  </div>
</template>

<script>
import SignIn from './SignIn';
import SignUp from './SignUp';

export default {
  name: 'Header',
  components: {
    SignIn,
    SignUp,
  },

};
</script>

<style>
template {
  background-color: #3a3f76;
}
</style>
