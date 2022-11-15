<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  name: "AppMain",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <section>
      <h3>Movies</h3>
      <AppCard v-for="card in store.movies" :key="card.id" :card="card" />
    </section>
    <section>
      <h3>Tv-Series</h3>
      <AppCard v-for="serie in store.series" :key="serie.id" :card="serie" />
    </section>
  </main>
</template>
