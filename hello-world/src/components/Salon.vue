<template>
  <div class="wrapp">
    <b-navbar class="navbar" toggleable>
      <b-navbar-brand class="pseudo"><ConnectedHeader /></b-navbar-brand>
      <div>
        <router-link to="/salon"><h2 class="clou2">CLOU</h2></router-link>
        <div>
          <router-link to="/menu"
            ><img
              color="white"
              width="30px"
              height="30px"
              src="../assets/next.png"
              alt="icon-menu"
          /></router-link>
        </div>
      </div>
    </b-navbar>

    <div class="chaat">
      <div class="divee"></div>

      <b-tabs content-class="mt-3">
        <Chat />
      </b-tabs>

      <div class="right">
        <div v-if="admin">
          <router-link class="dash" to="/dashboard"
            ><b-button style="margin-top: 30%;" variant="primary"
              >Dashboard</b-button
            ></router-link
          >
        </div>
        <div style="margin-top: 20%;" class="member">
          <Gid />
        </div>

        <h2 style="margin-top: 30%;">MEMBRES</h2>

        <b-navbar-brand
          ><b-button
            style="margin-top: 10%;"
            class="deco"
            @click="clickRemove()"
            variant="danger"
            href="#"
            >Déconnexion</b-button
          ></b-navbar-brand
        >
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
      id: '',
      pseu: '',
      pseudo: '',
    };
  },
  components: {
    ConnectedHeader,
    Gid,
    Chat,
  },
  computed: {
    admin() {
      return this.$store.getters.member.admin_id;
    },
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
.nav-tabs {
  border-bottom: 0px solid #dee2e6;
}
.clou2 {
  color: #6067ac;
}
.fal {
  display: flex;
}
template {
  background-color: #4e538b;

  width: auto;
}
.right {
  display: flex;
  flex-direction: column-reverse;
}
.member {
  border: 4px solid #4e538b;
  width: auto;
  margin-top: 3%;
  padding-top: 2%;
  margin-left: 8%;
  margin-right: 8%;
  text-align: center;
  height: 70vh;
  overflow: auto;
}
img {
  visibility: hidden;
}
.member::-webkit-scrollbar {
  width: 13px;
}
.member::-webkit-scrollbar-track {
  background-color: #333768;
  border-radius: 20px;
  border: 0.5px solid #333768;
}
.member::-webkit-scrollbar-thumb {
  background-color: #26294e;
  border-radius: 20px;
  border: 0.5px solid #333768;
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
  .pseudo {
    display: none;
  }
  .clou2 {
    position: absolute;
    left: 0px;
  }
  .right {
    display: none;
  }
  .navbar {
    height: 10vh;
  }
  .over {
    height: 68vh;
  }
  img {
    visibility: visible;
  }
  .navbar {
    justify-content: flex-end;
  }
}
</style>
