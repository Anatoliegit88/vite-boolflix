<script>
import axios from "axios";
import AppCard from "./components/AppCard.vue";
import AppMain from "./components/AppMain.vue";
import AppSearch from "./components/AppSearch.vue";
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

  // methods: {
  //   ricerca() {
  //     const paramsObj = {
  //       api_key: this.store.apiKey,
  //       query: this.store.newSearch,
  //     };
  //     this.newMovies(paramsObj);
  //     this.newSeries(paramsObj);
  //   },
  //   newMovies(paramsObj) {
  //     axios
  //       .get(`${this.store.apiURL}movie`, {
  //         params: paramsObj,
  //       })
  //       .then((resp) => {
  //         this.store.movies = resp.data.results;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   newSeries(paramsObj) {
  //     axios
  //       .get(`${this.store.apiURL}tv`, {
  //         params: paramsObj,
  //       })
  //       .then((resp) => {
  //         this.store.movies = resp.data.results;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=79fa0912b6192336b0602a46a7d5350f&query=Bella"
      )
      .then((resp) => {
        this.store.movies = resp.data.results;
        // console.log(this.store.movies);
      });
  },
};
</script>

<template>
  <AppCard />
  <AppMain />
  <AppSearch />
</template>

<style lang="scss"></style>
