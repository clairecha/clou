<template>
  <div>{{ nameG }}</div>
</template>

<script>
export default {
  name: 'ConnectedHeader',
  computed: {
    nameG() {
      return this.$store.getters.name;
    },
  },
};
</script>

<style></style>
