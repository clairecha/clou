<template>
  <div class="pseu">
    <h3>MEMBERS</h3>
    <ul class="memberul" v-for="all in all" :key="all">
    <li>{{ all }}</li>
    </ul>
    <!-- {{ all.pseudo.join('-') }} -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Gid',
  data() {
    return {
      pseudo: '',
      all: '',
    };
  },
  mounted() {
    axios.get('http://localhost:3000/members').then((response) => {
      console.log('data',response);
      let name = [];
      this.all = name
      for (let i = 0; i < response.data.pseudo.length; i++) {
      console.log('bouclepseudo',response.data.pseudo[i].pseudo)
      name.push(response.data.pseudo[i].pseudo);
}
    });
  },
};
</script>

<style>
.pseu {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
li{
  list-style: none;
  margin-top: 20px;
  text-align: left;

}
.memberul{
  padding-left: 10px;
  /* margin-left: 10px; */
}

</style>
