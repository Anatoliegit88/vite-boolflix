<script>
import axios from "axios";
export default {
  data() {
    return {
      newSearch: "",
    };
  },

  methods: {
    ricerca() {},
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=79fa0912b6192336b0602a46a7d5350f&query="
      )
      .then((resp) => {
        this.store.movies = resp.data.results;
      });
  },
};
</script>

<template>
  <div>
    <input v-model="newSearch" type="text" />
    <button @click="ricerca">search</button>
  </div>
</template>

<style></style>
