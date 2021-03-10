<template>
  <div style="margin-top:2%;" class="menu">
    <div class="wrap">
      <router-link to="/salon"
        ><img
          color="white"
          width="30px"
          height="30px"
          src="../assets/previous.png"
          alt="icon-menu"
      /></router-link>

      <img
        @click="clickRemove()"
        width="30px"
        height="30px"
        src="../assets/logout.png"
        alt="icon-menu"
      />
    </div>
    <p style="font-size: 1.5em;">{{ pseudo }}</p>

    <div class="dash" v-if="admin">
      <router-link to="/dashboard"
        ><b-button style="margin-top: 10%;" variant="primary"
          >Dashboard</b-button
        ></router-link
      >
    </div>
    <h2 style="margin-top: 20%;">MEMBRES</h2>

    <div style="margin-top: 5%;" class="member">
      <Gid />
    </div>
  </div>
</template>
<script>
import Gid from './Gid';

export default {
  name: 'Menu',
  components: {Gid},
  computed: {
    pseudo() {
      return this.$store.getters.member.user_pseudo;
    },
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


/* ------------------------------------------------------------------- */

@media screen and (max-width: 376px) {
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .member {
    width: 70vw;
    height: 50vh;
  }
  .deco {
    position: absolute;
    top: 0px;
    right: 3px;
  }
  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
