<template lang="pug">
div
  splide(:options="options" :slides="info")
    splide-slide(v-for="item in info" :key="item.id").item
      homeInfoItem(:date="item.created_at", :text="item.description")
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import homeInfoItem from "../homeInfoItem";
import store from "../../store";
import $axios from "../../request";

export default {
  data() {
    return {
      info: [],
      options: {
        autoHeight: true,
        autoWidth: true,
        arrows: false,
        pagination: false,
        rewind: true,
        gap: "0",
        padding: {
          left: "2.08vw",
          right: "2.08vw",
        },
      },
    };
  },
  components: {
    homeInfoItem,
    Splide,
    SplideSlide,
  },
  async mounted() {
    const response = await $axios.get("/info/all");

    store.dispatch("info/setInfo", response.data);
    this.info = response.data;
  },
};
</script>

<style lang="scss" scoped src="./homeInfoList.scss"></style>
