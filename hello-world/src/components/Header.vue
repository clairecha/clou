<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="SignIn" active><SignIn /> </b-tab>
      <b-tab title="SignUp" ><SignUp /> </b-tab>
        <!-- <b-button @click="clickAdd()" type="submit" variant="primary"
        >SignIn</b-button
      > -->
       <!-- <b-button @click="clickAdd(UP)" type="submit" variant="primary"
        >SignUp</b-button
      > -->
    <router-link tag="li" to="/sign-up">
  <a>/foo</a>
</router-link>
    </b-tabs>
  </div>
</template>

<script>
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import axios from 'axios';


export default {
  name: "Header",
  components: {
    SignIn,
    SignUp,
  },
//     methods: {
//     clickAdd() {
//       console.log('toto', this.form);
//       axios
//         .post('http://localhost:3000/sign-up', this.form)
//         .then((response) => console.log(response))

//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },

};
</script>

<style >
template{
      background-color: #3A3F76;

}

</style>