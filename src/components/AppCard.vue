<script>
export default {
  name: "AppCard",
  props: {
    card: Object,
  },
};
</script>

<template>
  <h2>title</h2>
  <div class="conatainer">
    {{ card.vote_average }}
    {{ card.original_title }}
    <img :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: calc(100% / 4 - 20px);
  display: flex;
  flex-wrap: wrap;
}
</style>
