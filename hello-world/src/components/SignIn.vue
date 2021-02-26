<template>
<b-container>
<!-- <h1>Connexion</h1> -->
  <div class="container" style="max-width: 500px; text-align: left">
    
<!-- <div >
    <router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>
    <router-link to="/" class="btn btn-link" >Se connecter</router-link>
</div> -->
    <b-form @submit="onsubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          v-if="!$v.email.required"
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your password:"
        label-for="input-2"
      >
        <b-form-input
          v-if="!$v.password.required"
          type="password"
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
    
<br>
      <b-button @click="clickAdd()" type="submit" variant="primary"
        >Se connecter</b-button
      >
    </b-form>
  </div>
  </b-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

import axios from 'axios';
import jwt from 'jsonwebtoken';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'SignIn',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
    };
  },
  validations: {
    name: { required },
    email: {
      required,
      email,
    },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    onsubmit(e) {
      e.preventDefault();
    },
    clickAdd() {
      axios
        .post('http://localhost:3000/sign-in', this.form)
        .then((response) => {
          if (response.data == 'sorry we dont know this user') {
            console.log(response.data);
          } else {
            var decoded = jwt.decode(response.data);
            this.$store.dispatch('addToken', response.data);
            this.$store.dispatch('addName', decoded.user_name);
            this.$store.dispatch('addName', decoded.user_pseudo);
            this.$store.dispatch('addId', decoded.user_id);
            console.log('token', response.data);
            console.log('pseudo =',decoded.user_pseudo);
            this.$router.push('/dashboard');
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    
    },
  },
};
</script>

<style>

.error-message {
  color: red;
}
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
input:focus {
  outline: none;
}
.error {
  border: 1px solid red;
}
.form {
  display: inline-block;
  text-align: center;
  width: 49%;
}
.validators {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: top;
}
.input {
  padding: 5px;
}
element.style {
    max-width: 500px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
