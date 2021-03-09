<template>
  <div>
    <h2 style="font-size: 2.5em;  margin-top: 6%;">
      BIENVENUE DANS LE DASHBOARD
    </h2>
    <h5 style="color: red;">
      Click sur un message ou un membre pour le supprimer du salon !
    </h5>

    <div class="title">
      <h2>MESSAGES</h2>
      <h2>MEMBRES</h2>
    </div>
    <div class="wrap">
      <div class="wrapper">
        <div
          @click="clickDelete()"
          class="messages"
          v-for="(msg, index) in messages"
          :key="index"
        >
          <p style="font-size: 1em;" :ref="index">
            <span style="font-size: 1.5em;" class="font-weight-bold"
              >{{ msg.pseudo }} :
            </span>
            {{ msg.content }}
          </p>
        </div>
      </div>
      <div class="wrapper" style="font-size: 1.5em;">
        <Gid />
      </div>
    </div>
    <router-link to="/salon"
      ><b-button class="buttons" variant="primary"
        >Retourner au salon</b-button
      ></router-link
    >
  </div>
</template>

<script>
import Gid from './Gid';
import axios from 'axios';

export default {
  name: 'Dashboard',

  components: {
    Gid,
  },
  data() {
    return {
      messages: '',
    };
  },
  methods: {
    clickDelete() {
      console.log('toto', this.form);
      axios
        .delete('http://localhost:3000/membre')
        .then((response) => {
          console.log('delete', response.data.messages);
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios.get('http://localhost:3000/message').then((response) => {
      this.messages = response.data.messages;
    });
  },
};
</script>

<style>
.active {
  text-decoration: line-through;
}
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  text-align: left;
}

.wrapper {
  padding-top: 5px;
}
.wrapper {
  height: 50vh;
  overflow: auto;
  width: 35%;
  border: 4px solid #333768;
  padding: 2%;
  margin-top: 2%;
}
.wrapper::-webkit-scrollbar {
  width: 13px;
}
.wrapper::-webkit-scrollbar-track {
  background-color: #333768;
  border-radius: 20px;
  border: 0.5px solid #333768;
}
.wrapper::-webkit-scrollbar-thumb {
  background-color: #26294e;
  border-radius: 20px;
  border: 0.5px solid #333768;
}
.title {
  display: flex;
  justify-content: space-around;
  margin-top: 4%;
}
p {
  cursor: pointer;
}
.messages:hover {
  background-color: #424885;
}
.buttons {
  margin-top: 3%;
}

/* ------------------------------------------------------------------- */

@media screen and (max-width: 376px) {
  .wrap {
    display: flex;
    flex-direction: column;
  }
  .wrapper {
    width: auto;
    margin-left: 20%;
  }
}
</style>
