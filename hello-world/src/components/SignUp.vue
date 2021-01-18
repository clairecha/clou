<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          class="input"
          :class="{ error: $v.email.$error }"
          id="input-1"
          v-model="form.email"
          @input="$v.email.$touch()"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
        <div v-if="$v.email.$dirty">
          <p class="error-message" v-if="!$v.email.email">
            Please enter a valid email address.
          </p>
          <p class="error-message" v-if="!$v.email.required">
            Email must not be empty.
          </p>
        </div>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          class="input"
          :class="{ error: $v.name.$error }"
          id="input-2"
          v-model="form.name"
          @input="$v.name.$touch()"
          required
          placeholder="Enter name"
          ><p v-if="$v.name.$error" class="error-msg">
            Please fill the name
          </p></b-form-input
        >
        <div v-if="$v.name.$dirty">
          <p class="error-message" v-if="!$v.name.required">
            Name must not be empty.
          </p>
        </div>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Your password:"
        label-for="input-3"
      >
        <b-form-input
          class="input"
          :class="{ error: $v.name.$error }"
          type="password"
          id="input-3"
          v-model="form.password"
          @input="$v.password.$touch()"
          required
          placeholder="Enter password"
        ></b-form-input>
        <div v-if="$v.password.$dirty">
          <p class="error-message" v-if="!$v.password.required">
            Password must not be empty.
          </p>
        </div>
      </b-form-group>

      <b-button
        :disabled="$v.$invalid"
        type="submit"
        variant="primary"
        @click="clickAdd()"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
      },
    };
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    password: { required, minLength: minLength(8) },
  },
  methods: {
    clickAdd() {
      console.log('toto', this.form);
      axios
        .post('http://localhost:3000/sign-up', this.form)
        .then((response) => console.log(response))

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
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
</style>
