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
  <main class="big-box">
    <section>
      <h3>Movies</h3>
      <div class="box">
        <AppCard
          class="flex-box"
          v-for="card in store.movies"
          :key="card.id"
          :card="card" />
      </div>
    </section>
    <section>
      <h3>Tv-Series</h3>
      <AppCard v-for="serie in store.series" :key="serie.id" :card="serie" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1em;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-box {
    padding: 0.5rem;
    width: calc(100% / 4 - 10px);
    margin-bottom: 1rem;
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>
