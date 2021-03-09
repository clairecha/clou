<template>
  <div>
    <div class="pseu">
      <div>
        <ul class="memberul" v-for="all in all" :key="all">
          <li>{{ all }}</li>
        </ul>
      </div>
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
    };
  },
  mounted() {
    axios.get('http://localhost:3000/members').then((response) => {
      console.log('data', response);
      const name = [];
      this.all = name;
      for (let i = 0; i < response.data.members.length; i++) {
        name.push(response.data.members[i].pseudo);
      }
    });
  },
};
</script>

<style>
.pseu {
  margin-bottom: 15px;
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
