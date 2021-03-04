<template>
  <div class="wrapp">
    <b-navbar class="navbar" toggleable>
      <b-navbar-brand><ConnectedHeader /></b-navbar-brand>
    <!-- {{ pseuG }} {{ id }} {{ pseudo }} -->
      <b-navbar-brand
        ><b-button @click="clickRemove()" variant="danger" href="#"
          >Sign-out</b-button
        ></b-navbar-brand
      >
    </b-navbar>
    <div class="chaat">
      <div class="divee"></div>

      <b-tabs content-class="mt-3">
        <!-- <b-tab title="ContactList" active><ContactList /> </b-tab>
        <b-tab title="AddContactForm"><AddContactForm /> </b-tab> -->

        <Chat />
      </b-tabs>

      <div class="member"><Gid /></div>
    </div>
  </div>
</template>

<script>
import ConnectedHeader from './ConnectedHeader';
import Chat from './Chat';
import Gid from './Gid';

export default {
  name: 'Dashboard',
  data() {
    return {
      id: Boolean,
      pseu:'',
      pseudo:'',
    };
  },
  components: {
    ConnectedHeader,
    Gid,
    Chat,
  },
  
  //  computed:{
  //   pseuG() {
  //     console.log('contactG', this.$store.getters.pseudo);
  //     // let psou = [];
  //     // this.pseu = psou;
  //     // psou.push(this.$store.getters.id);
  //     return this.$store.getters.id;
  //   },
  //  },
  methods: {
    clickRemove() {
      this.$store.dispatch('removeToken');
      this.$router.push('/');
    },
    
  },
  
//     mounted() {
//     axios.get('http://localhost:3000/members').then((response) => {
//       console.log('data.dash',response.data.pseudo);
//       let idUser = [];
//       this.id = idUser;
//       let pseudoUser = [];
//       this.pseudo = pseudoUser;
//       for (let i = 0; i < response.data.pseudo.length; i++) {
//       console.log('boucleid_user',response.data.pseudo[i].id_user)
//       idUser.push(response.data.pseudo[i].id_user);
//       pseudoUser.push(response.data.pseudo[i].pseudo);
// }
//       if(idUser == this.pseu){
//       console.log('pseudoUser',pseudoUser)
//       return true;
// }


//     });
    
//   },
};
</script>

<style>
.chaat {
  display: flex;
  flex-direction: row;
}
template{
  width: auto;
}

.member {
  /* border: 4px solid black; */
  width: 20%;

  text-align: center;
}
.navbar {
  display: flex;
  flex-direction: column-reverse;
  height: 96vh;
}

.wrapp {
  background-color: #4e538b;
  display: flex;
  height: 600px;
}

</style>
