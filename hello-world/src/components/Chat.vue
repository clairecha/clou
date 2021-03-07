<template>
  <div id="wrip">
    <div class="card-body">
      <div class="card-title"></div>
      <div class="over">
        <div class="messages" v-for="(msg, index) in messages" :key="index">
          <p :ref="index">
            <span class="font-weight-bold">{{ msg.pseudo }}: </span
            >{{ msg.content }}
          </p>
        </div>
      </div>

      <form @submit.prevent="sendMessage">
        <div class="gorm-group">
          <!-- <label for="pseudo">pseudo:</label> -->
          <!-- <input type="text" v-model="pseudo" class="form-control" /> -->
        </div>
        <div class="gorm">
          <!-- <label for="message">Message:</label> -->
          <input
            placeholder="Entrer votre message ..."
            type="text"
            v-model="content"
            class="form-control"
          />
          <button type="submit" class="btn btn-light">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import axios from 'axios';

export default {
  data() {
    return {
      pseudo: '',
      id: Boolean,
      content: '',
      messages: [],
      socket: io('localhost:3000', {withCredentials: true}),
      // getMessages: '',
    };
  },

  computed: {
    pseudoState() {
      return this.$store.getters.pseudo;
    },
    idState() {
      return this.$store.getters.id;
    },
  },

  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit('SEND_MESSAGE', {
        pseudo: this.pseudoState,
        content: this.content,
        id: this.idState,
      });
      this.content = '';
      const messageList = document.querySelector('.over');
      messageList.scrollTo(0, messageList.scrollHeight);
      // console.log('msg', this.message);
    },
  },

  mounted() {
    console.log('WESH ALORS', this.socket);
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data];

      // you can also do this.messages.push(data)
      // get messages de l'api ( dans lapi new route /messages recupe les 20 derniers msg content , iduser date )
    });
    axios.get('http://localhost:3000/message').then((response) => {
      console.log('getmsg', response.data.messages);
      this.messages = response.data.messages;
      console.log('this.$refs', this.$refs);
      // this.$refs[response.data.messages.length - 1][0].scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'start',
      // });
      // this.id = response.data;
      // console.log('yuuu', this.id);
    });
  },
};
</script>

<style>
#wrip {
  background-color: #4e538b;
  border: 4px solid #4e538b;
  border-radius: 4px;
}
/* .card {
  background-color: #4e538b;
} */

input {
  width: 60%;
  background-color: #7277ab;
}
.tabs {
  height: 400px;
  width: 75vw;
}

.over {
  height: 75vh;
  overflow: auto;
}
.over::-webkit-scrollbar {
  width: 13px;
}
.over::-webkit-scrollbar-track {
  background-color: #333768;
  border-radius: 20px;
  border: 0.5px solid #333768;
}
.over::-webkit-scrollbar-thumb {
  background-color: #26294e;
  border-radius: 20px;
  border: 0.5px solid #333768;
}

.gorm {
  display: flex;
  padding-top: 4%;
}
.card-body {
  text-align: left;
}
/* .wrup {
  display: flex;
  flex-direction: row;
  border: 4px solid black;
} */
</style>
