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
        "https://api.themoviedb.org/3/search/movie?api_key=79fa0912b6192336b0602a46a7d5350f&query=title/title_originale/original_language/vote_average"
      )
      .then((resp) => {
        this.store.movies = resp.data.results;
        console.log(store.movies);
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
