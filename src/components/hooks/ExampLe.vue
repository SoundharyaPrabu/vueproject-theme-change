<template>
  <h2>Check the console</h2>
</template>

<script>
export default {
  created() {
    console.log("Component created!");
  },
  mounted() {
    console.log("Component mounted!");
  },
  updated() {
    console.log("Component updated!");
  },
  unmounted() {
    console.log("Component destroyed!");
  }
};
</script>
