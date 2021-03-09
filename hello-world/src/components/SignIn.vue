<template>
  <b-container>
    <router-link to="/"><h2 class="clou1">CLOU</h2></router-link>
    <div class="containerr" style="max-width: 500px; text-align: left">
      <!-- <div >
		<router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>
		<router-link to="/sign-in" class="btn btn-link" >Se connecter</router-link>
</div> -->
      <div v-if="status === 'ERROR'" class="global-message error">
        ERROR: Please do the right thing
      </div>
      <div v-if="status === 'REQUEST-SUCCESS'" class="global-message success">
        SUCCESS: Welcome onboard
      </div>
      <div v-if="status === 'REQUEST-ERROR'" class="global-message error">
        OOPS: Something went wrong
      </div>

      <form @submit.prevent="submit" style="background-color:inherit;">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            required
            placeholder="Enter email"
            v-model="form.email"
            id="input-1"
            name="email"
            class="form-control"
            :class="{'is-invalid': isSubmitted && $v.email.$error}"
          />
          <div
            v-if="isSubmitted && !$v.email.required"
            class="invalid-feedback"
          >
            <span v-if="$v.email.required">Email field is required</span>
            <span v-if="!$v.email.email">Please provide valid email</span>
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            required
            placeholder="Enter password"
            v-model="form.password"
            id="input-2"
            name="password"
            class="form-control"
            :class="{'is-invalid': isSubmitted && $v.password.$error}"
          />
          <div
            v-if="isSubmitted && $v.password.$error"
            class="invalid-feedback"
          >
            <span v-if="$v.password.required">Password field is required</span>
          </div>
        </div>
        <br />
        <b-button type="submit" variant="primary">Se connecter</b-button>
        <router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>

        <br />
      </form>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {required, minLength, email} from 'vuelidate/lib/validators';

export default {
  name: 'SignIn',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      isSubmitted: false,
      status: undefined,
    };
  },
  validations: {
    name: {required},
    email: {
      required,
      email,
    },
    password: {required, minLength: minLength(5)},
  },
  methods: {
    validate() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.status = 'REQUEST-SUCCESS';
        return false;
      }
      return true;
    },
    submit() {
      const isValidated = this.validate();
      if (isValidated) {
        return;
      }
      axios
        .post('http://localhost:3000/sign-in', this.form)
        .then((response) => {
          if (response.data == 'sorry we dont know this user') {
            this.status = 'ERROR';
          } else {
            const members = jwt.decode(response.data);
            console.log('members', members);
            this.$store.dispatch('addToken', response.data);
            this.$store.dispatch('addMembers', members);
            // console.log('id user', members.user_);
            this.status = 'REQUEST-SUCCESS';
            this.$router.push('/salon');
          }
        })
        .catch(function(err) {
          this.status = 'REQUEST-ERROR';
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

input:focus {
  outline: none;
}
.error {
  border: 1px solid red;
}

.validators {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: top;
}
.input {
  padding: 5px;
  background-color: #3a3f76;
}
element.style {
  max-width: 500px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.clou1 {
  position: absolute;
  left: 7px;
  top: 7px;
  color: #6067ac;
}


/* ------------------------------------------------------------------- */

@media screen and (max-width: 376px) {
  .clou1 {
    font-size: 1.5em;
  }
  form {
    position: absolute;
    width: 80vw;
    left: 10%;
    top: 30%;
  }
  .global-message.error {
    background: rgb(189, 80, 80);
    width: 60vw;
    position: absolute;
    top: 10%;
    right: 20%;
  }
}
</style>
