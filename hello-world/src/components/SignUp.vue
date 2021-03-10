https://www.positronx.io/vue-js-forms-tutorial-form-validation-in-vue-with-vuelidate/

<template>
  <div class="container" style="max-width: 500px; text-align: left">
    <!-- <h2>CONNEXION</h2> -->
    <router-link to="/"><h2 class="clou1">CLOU</h2></router-link>

    <!-- <div >
		<router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>
		<router-link to="/sign-in" class="btn btn-link" >Se connecter</router-link>
</div> -->
    <div v-if="status === 'ERROR'" class="global-message error">
      ERROR: Please do the right thing 🤙
    </div>
    <div v-if="status === 'REQUEST-SUCCESS'" class="global-message success">
      SUCCESS: Welcome onboard 💪
    </div>
    <div v-if="status === 'REQUEST-ERROR'" class="global-message error">
      OOPS: Something went wrong 🙀
    </div>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="name">Pseudo</label>
        <input
          type="text"
          v-model="userForm.pseudo"
          placeholder="Enter pseudo"
          id="name"
          name="name"
          class="form-control"
          :class="{'is-invalid': isSubmitted && $v.userForm.pseudo.$error}"
        />
        <div
          v-if="isSubmitted && !$v.userForm.pseudo.required"
          class="invalid-feedback"
        >
          Pseudo field is required
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="userForm.email"
          placeholder="Enter email"
          id="email"
          name="email"
          class="form-control"
          :class="{'is-invalid': isSubmitted && $v.userForm.email.$error}"
        />
        <div
          v-if="isSubmitted && $v.userForm.email.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.email.required"
            >Email field is required</span
          >
          <span v-if="!$v.userForm.email.email"
            >Please provide valid email</span
          >
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="userForm.password"
          placeholder="Enter password"
          id="password"
          name="password"
          class="form-control"
          :class="{'is-invalid': isSubmitted && $v.userForm.password.$error}"
        />
        <div
          v-if="isSubmitted && $v.userForm.password.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.password.required"
            >Password field is required</span
          >
          <span v-if="!$v.userForm.password.minLength"
            >Password should be at least 8 characters long</span
          >
        </div>
      </div>
      <br />
      <div class="form-group">
        <b-button type="submit" variant="primary">S'inscrire</b-button
        ><router-link to="/sign-in" class="btn btn-link"
          >Se connecter</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import {required, email, minLength} from 'vuelidate/lib/validators';

export default {
  name: 'SignUp',
  data() {
    return {
      userForm: {
        pseudo: '',
        email: '',
        password: '',
      },
      isSubmitted: false,
      status: undefined,
    };
  },
  validations: {
    userForm: {
      pseudo: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    validate() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.status = 'ERROR';
        return false;
      }
      return true;
    },
    submit() {
      const isValidated = this.validate();

      if (!isValidated) {
        return;
      }
      axios
        .post('http://localhost:3000/sign-up', this.userForm)
        .then((response) => {
          if (response.statusText === 'OK') {
            this.status = 'REQUEST-SUCCESS';
            this.$router.push('sign-in');
          }
        })
        .catch(() => (this.status = 'REQUEST-ERROR'));
    },
  },
};
</script>

<style>
.container {
  /* background-color: #4e538b; */
  border-radius: 15px;
  color: white;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* box-shadow: 0.2px 0.2px 2px #585c88;	 */
  margin-right: 2px;
  margin-left: 2px;
  padding-top: 20%;
}

.template {
  width: 40%;
}
.global-message {
  color: #fff;
  font-weight: 800;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 4px;
}
.global-message.error {
  background: rgb(189, 80, 80);
}
.global-message.success {
  background: rgb(23, 185, 58);
}

.error-message {
  color: red;
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
/* .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    width: 40%;
    margin-left: 27%;
} */
</style>
