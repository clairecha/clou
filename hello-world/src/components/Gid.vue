<template>
  <div>
    <!-- <h2>MEMBRES</h2> -->

    <div class="pseu">
      <ul class="memberul" v-for="all in all" :key="all">
        <li>{{ all }}</li>
      </ul>
    </div>
    <!-- <button id="but">yooo</button> -->

    <div v-if="status === ''" >
      <router-link class="dash" to="/dashboard"
        ><b-button style="margin-top: 90%;" variant="primary"
          >Dashboard</b-button
        ></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Gid',

  data() {
    return {
      isDisplay: false,
      pseudo: '',
      all: '',
      admin: '',
    };
  },
  methods: {
    show: function() {
      this.isDisplay = true;
    },
    hide: function() {
      this.isDisplay = false;
    },
  },
  mounted() {
    axios.get('http://localhost:3000/members').then((response) => {
      console.log('data', response);
      console.log('admin', response.data.membres);
      const name = [];
      const ad = [];
      this.all = name;
      this.admin = ad;
      // const button = document.getElementById('but');

      for (let i = 0; i < response.data.membres.length; i++) {
        console.log('bouclepseudo', response.data.membres[i].pseudo);
        name.push(response.data.membres[i].pseudo);
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
li {
  list-style: none;
  margin-top: 20px;
  text-align: left;
}
.memberul {
  padding-left: 10px;
}
#but {
  visibility: hidden;
}
</style>
