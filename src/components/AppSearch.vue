<script>
import { store } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <input type="search" v-model="store.newSearch" />
    <button @click="$emit('performSearch')">Search</button>
  </div>
</template>
