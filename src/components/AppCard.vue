<script>
export default {
  name: "AppCard",
  props: {
    card: Object,
  },
  data() {
    return {
      availableFlags: ["italian-flag", "uk-flag"],
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
    getImage() {
      return this.card.poster_path
        ? `http://image.tmdb.org/t/p/w342/${this.card.poster_path}`
        : this.getImgUrl("no-image.jpg");
    },
    getNumberStars() {
      return Math.ceil(this.card.vote_average / 2);
    },

    methods: {
      getImgUrl(imgName) {
        return new URL(`../assets/${imgName}`, import.meta.url).href;
        // console.log("getImgUrl");
      },
    },
  },
};
</script>

<template>
  <!-- CARDS -->
  <div class="card">
    <div class="card_inner">
      <div class="card_front">
        <img
          v-if="card.poster_path"
          :src="`http://image.tmdb.org/t/p/w342/${card.poster_path}`"
          alt="" />
        <img v-else src="../assets/images/no-image.jpg" alt="" />
        <img :src="getImage" alt="" />
      </div>
      <div class="card_back">
        <h2>Title: {{ card.title }}</h2>
        <h4>Ooriginal Title: {{ card.original_title }}</h4>
        <div class="flag">
          <img
            v-if="availableFlags.includes(card.original_language)"
            :src="getImgUrl(`${card.original_language}.jpg`)" />
          <p v-else>Language: {{ card.original_language }}</p>
        </div>
        <div>
          <h5>Vote: {{ card.vote_average }}</h5>
          <h5>Vote: {{ getNumberStars }}</h5>

          <i
            v-for="n in 5"
            :key="n"
            :class="n <= getNumbersStars ? 'fa-solid' : 'fa-regular'"
            class="fa-star"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
  perspective: 1000px;
  &__inner {
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s;
  }
  &:hover &__inner {
    transform: rotateY(180deg);
  }
  &__front,
  &__back {
    backface-visibility: hidden;
  }
  &__front {
    height: 100%;
    img {
      height: 100%;
    }
  }
  &__back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgba(#000000, 0.8);
    color: white;
    padding: 1rem;
    transform: rotateY(180deg);

    .flag {
      width: 50px;
    }
  }
}
</style>
