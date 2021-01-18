<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand>Dashboard</b-navbar-brand>
      <b-navbar-brand><ConnectedHeader /></b-navbar-brand>
      <b-navbar-brand
        ><b-button @click="clickRemove()" variant="danger" href="#"
          >Sign-out</b-button
        ></b-navbar-brand
      >
    </b-navbar>

    <div>
      <b-tabs content-class="mt-3">
        <!-- <b-tab title="ContactList" active><ContactList /> </b-tab>
        <b-tab title="AddContactForm"><AddContactForm /> </b-tab> -->
        
        <Chat />
      </b-tabs>
    </div>
  </div>
</template>

<script>
import ConnectedHeader from './ConnectedHeader';
import Chat from './Chat';
// import AddContactForm from './AddContactForm';

export default {
  name: 'Dashboard',
  components: {
       ConnectedHeader, 
    // ContactList, AddContactForm 
  Chat},
  methods: {
    clickRemove() {
      this.$store.dispatch('removeToken');
      this.$router.push('/');
    },
  },
};
</script>

<style>

/* .navbar-brand{
border: 4px solid white;
width: 40px;

} */

</style>
