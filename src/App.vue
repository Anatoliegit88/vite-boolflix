<script>
import axios from "axios";
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
    AppMain,
    AppSearch,
  },

  methods: {
    getSearch() {
      const paramsObj = {
        api_key: this.store.apiKey,
        query: this.store.newSearch,
      };
      this.newMovies(paramsObj);
      this.newSeries(paramsObj);
    },
    newMovies(paramsObj) {
      axios
        .get(`${this.store.apiURL}movie`, {
          params: paramsObj,
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    newSeries(paramsObj) {
      axios
        .get(`${this.store.apiURL}tv`, {
          params: paramsObj,
        })
        .then((resp) => {
          this.store.series = resp.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {},
};
</script>

<template>
  <AppSearch @performSearch="getSearch" />
  <AppMain />
</template>

<style lang="scss"></style>
