<template>
  <b-container>
    <router-link to="/"><h2 class="clou1">CLOU</h2></router-link>
    <div class="containerr" style="max-width: 500px; text-align: left">
      <!-- <div >
		<router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>
		<router-link to="/sign-in" class="btn btn-link" >Se connecter</router-link>
</div> -->
      <div v-if="status === 'ERROR'" class="global-message error">
        ERROR: Un ou plusieurs des champs sont invalides
      </div>
      <div v-if="status === 'REQUEST-SUCCESS'" class="global-message success">
        SUCCESS: Bienvenue
      </div>
      <div v-if="status === 'REQUEST-ERROR'" class="global-message error">
        OOPS: Une erreur s'est produite
      </div>

      <form @submit.prevent="submit" style="background-color:inherit;">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            required
            placeholder="Entrer email"
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
            <span v-if="$v.email.required">L'email entré est incorrect.</span>
            <span v-if="!$v.email.email">L'email entré est incorrect.</span>
          </div>
        </div>

        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            required
            placeholder="Entrer mot de passe"
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
            <span v-if="$v.password.required"
              >Le mot de passe entré est incorrect.</span
            >
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
            const token = response.data.token;
            const member = response.data.member;
            this.$store.dispatch('addToken', token);
            this.$store.dispatch('getMember', member);
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
  border-radius: 15px;
  color: white;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
