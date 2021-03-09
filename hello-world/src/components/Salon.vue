<template>
  <div class="wrapp">
    <b-navbar class="navbar" toggleable>
      <b-navbar-brand><ConnectedHeader /></b-navbar-brand
      ><i class="fal fa-ellipsis-h"></i>
      <b-navbar-brand
        ><b-button class="deco" @click="clickRemove()" variant="danger" href="#"
          >Sign-out</b-button
        ></b-navbar-brand
      >
    </b-navbar>
    <div class="chaat">
      <div class="divee"></div>

      <b-tabs content-class="mt-3">
        <Chat />
      </b-tabs>

      <div class="member">
        <h2>MEMBRES</h2>

        <Gid />
      </div>
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
      pseu: '',
      pseudo: '',
    };
  },
  components: {
    ConnectedHeader,
    Gid,
    Chat,
  },

  methods: {
    clickRemove() {
      this.$store.dispatch('removeToken');
      this.$router.push('/');
    },
  },
};
</script>

<style>
.chaat {
  display: flex;
  flex-direction: row;
}
.fal {
  display: flex;
}
template {
  background-color: #4e538b;

  width: auto;
}

.member {
  border: 4px solid #4e538b;
  width: 15%;
  margin-top: 3%;
  padding-top: 2%;
  margin-left: 3%;
  text-align: center;
  height: 80vh;
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
.nav-tabs {
  border-bottom: 0px solid #dee2e6;
}

/* ------------------------------------------------------------------- */

@media screen and (max-width: 376px) {
  .wrapp {
    background-color: #4e538b;
    display: flex;
    height: 600px;
    display: flex;
    flex-direction: column;
  }
  .gorm {
    display: flex;
    padding-top: 4%;
    position: absolute;
    top: 400px;
  }
  .navbar {
    display: flex;
    flex-direction: row;
  }
  /* .btn:not(:disabled):not(.disabled) {
    display: none;
  } */
  .member {
    display: none;
  }
  .navbar {
    height: 10vh;
  }
}
</style>
