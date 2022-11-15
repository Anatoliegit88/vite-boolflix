import { reactive } from "vue";
export const store = reactive({
  movies: [],
  series: [],
  newsearch: "",
  apiKey: "79fa0912b6192336b0602a46a7d5350f",
  apiURL: "https://api.themoviedb.org/3/search",
});
