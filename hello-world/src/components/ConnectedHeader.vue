<template>
  <div class="pseudo">
    <a href=""></a>

    <p style="font-size: 1.5em;">{{ pseudo }}</p>
  </div>
</template>

<script>
export default {
  name: 'ConnectedHeader',
  computed: {
    pseudo() {
      console.log('pseudo', this.$store.getters.id);
      return this.$store.getters.pseudo;
    },
  },
};
</script>

<style>
.pseudo {
  color: white;
}
</style>
