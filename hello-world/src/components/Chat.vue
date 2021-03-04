<template>
<div id="wrip" >
    <div class="card-body">
      <div class="card-title">
        
       
      </div>
      <div class="over">
        <div class="card-body">
          <div class="messages" v-for="(msg, index) in messages" :key="index">
            <p>
              <span class="font-weight-bold"
                >{{ msg.pseudo }}: </span
              >{{ msg.message }}
            </p>
          </div>
        </div>
      </div>
   
    
      <form @submit.prevent="sendMessage">
        <div class="gorm-group">
          <!-- <label for="pseudo">pseudo:</label> -->
          <!-- <input type="text" v-model="pseudo" class="form-control" /> -->
        </div>
        <div class="gorm">
          <!-- <label for="message">Message:</label> -->
          <input placeholder="Entrer votre message ..." type="text" v-model="message" class="form-control" />
        <button type="submit" class="btn btn-light">Envoyer</button></div>
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
      message: '',
      messages: [],
      socket: io('localhost:3000', {withCredentials: true}),
    };
  },
  
  computed: {
    pseudoState() {
      return this.$store.getters.pseudo;
    },
   
  },

  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit('SEND_MESSAGE', {
        pseudo: this.pseudoState,
        message: this.message,
      });
      this.message = '';
      console.log('msg', this.message);
    },
  },
  mounted() {
    console.log('WESH ALORS', this.socket);
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data];
      console.log('MESSSAAAAGEE', this.message, data);

      // you can also do this.messages.push(data)
      // get messages de l'api ( dans lapi new route /messages recupe les 20 derniers msg content , iduser date ) 
    });
    axios.get('http://localhost:3000/users:id').then((response) => {
      console.log(response);
      this.id = response.data;
      console.log('yuuu', this.id);
    });
  },
};
</script>

<style>
#wrip{
  background-color: #4E538B;
  border: 4px solid #4E538B;
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
    height: 80vh;
    overflow: auto;
}
.gorm{
  display: flex;
}
.card-body {
   
    text-align: left;
}

</style>
