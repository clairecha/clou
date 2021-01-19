<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="SignIn" active><SignIn /> </b-tab>
      <!-- <b-tab title="SignUp" active><SignUp /> </b-tab> -->
    </b-tabs>
  </div>
</template>

<script>
import SignIn from "./SignIn";
// import SignUp from "./SignUp";

export default {
  name: "Form",
  components: {
    SignIn,
    // SignUp,
  },
};
</script>

<style >
template{
      background-color: #3A3F76;

}

</style>