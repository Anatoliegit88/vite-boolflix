<script>
import axios from "axios";
import AppCard from "./components/AppCard.vue";
import { store } from "./store";
export default {
  data() {
    return {
      newSearch: "",
      store,
    };
  },
  components: {
    AppCard,
  },

  methods: {
    ricerca() {},
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=79fa0912b6192336b0602a46a7d5350f&query=movie"
      )
      .then((resp) => {
        this.store.movies = resp.data.results;
        console.log(this.store.movies);
      });
  },
};
</script>

<template>
  <div>
    <input v-model="newSearch" type="text" />
    <button @click="ricerca">search</button>
    <div v-for="movie in store.movies">
      <AppCard :card="movie" />
    </div>
  </div>
</template>

<style></style>
