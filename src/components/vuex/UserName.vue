<template>
  <div id="app">
    <h1>Vuex User Example</h1>
    <h2>User Name: {{ userName }}</h2>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const userName = computed(() => store.getters.userName);
    return { userName };
  }
};
</script>