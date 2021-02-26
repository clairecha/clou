https://www.positronx.io/vue-js-forms-tutorial-form-validation-in-vue-with-vuelidate/

<template>
 <b-container>
      <!-- <h1>Connexion</h1> -->
      <!-- <Header/> -->
   
    <div class="container" style="max-width: 500px; text-align: left">
<!-- <div>
<router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>
<router-link to="/" class="btn btn-link">Se connecter</router-link>
</div> -->
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Pseudo</label>
                <input type="text" v-model="userForm.pseudo" id="name" name="name" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.pseudo.$error }" />
                <div v-if="isSubmitted && !$v.userForm.pseudo.required" class="invalid-feedback">Pseudo field is required</div>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="userForm.email" id="email" name="email" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }" />
                <div v-if="isSubmitted && $v.userForm.email.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.email.required">Email field is required</span>
                    <span v-if="!$v.userForm.email.email">Please provide valid email</span>
                </div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="userForm.password" id="password" name="password" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.password.$error }" />
                <div v-if="isSubmitted && $v.userForm.password.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.password.required">Password field is required</span>
                    <span v-if="!$v.userForm.password.minLength">Password should be at least 5 characters long</span>
                </div>
            </div>

            <div class="form-group">
                <button @click="clickAdd()" class="btn btn-danger btn-block">S'inscrire</button>
            </div>
         
        </form>
        
    </div>
 </b-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
// import jwt from 'jsonwebtoken';

import axios from 'axios';
    import {
        required,
        email,
        minLength,

    } from "vuelidate/lib/validators";

    export default {
        name: 'SignUp',
        data() {
            return {
                userForm: {
                    pseudo: "",
                    email: "",
                    password: "",
                    accept: ""
                },
                isSubmitted: false
            };
        },
        validations: {
            userForm: {
                pseudo: {
                    required
                },
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(5)
                },
                accept: {
                    required (val) {
                      return val
                    }
                }
            }
        },
        methods: {
            handleSubmit() {
                this.isSubmitted = true;

                this.$v.$touch();
                if (this.$v.$invalid) {
                this.$router.push('/sign-in');
                    return;
                }

                alert("SUCCESS!" + JSON.stringify(this.userForm));
            },
            clickAdd() {
      console.log('toto', this.userForm);
      axios
        .post('http://localhost:3000/sign-up', this.userForm)
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
    },
        }
    };
</script>


<style>
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
