<script>
export default {
  name: "AppCard",
  props: {
    card: Object,
  },
  data() {
    return {
      availableFlags: ["en", "it"],
    };
  },
  computed: {
    getTitle() {
      return this.card.title ? this.card.title : this.card.title;
    },
    getOriginalTitle() {
      return this.card.original_title
        ? this.card.original_title
        : this.card.original_title;
    },
  },
};
</script>

<template>
  <div class="conatainer">
    <h2>{{ card.original_title }}</h2>
    <div>
      <img
        v-if="availableFlags.includes(card.original_language)"
        :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`"
        alt="" />
      <p>{{ card.vote_average }} <i class="fa-solid fa-star"></i></p>
      <p>{{ card.original_title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
