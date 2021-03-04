<template>

  <div class="pseudo">{{ pseudo }}</div>
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
