<template>
  <div class="pseudo">
    <p style="font-size: 1.5em;">{{ pseudo }}</p>
  </div>
</template>

<script>
export default {
  name: 'ConnectedHeader',
  computed: {
    pseudo() {
      return this.$store.getters.members.user_pseudo;
    },
  },
};
</script>

<style>
.pseudo {
  color: white;
}
</style>
