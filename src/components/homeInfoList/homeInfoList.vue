<template lang="pug">
div
  splide(
    v-if="this.info.length && this.post !== 'admin'",
    :options="options",
    :slides="info"
  )
    splide-slide.item(v-for="item in info", :key="item.id")
      homeInfoItem(
        :date="item.created_at",
        :text="item.description",
        :id="item.id",
        @deleteInfo="getInfo"
      )
  .home-info__stub(v-else) Объявления не добавлены
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import homeInfoItem from "../homeInfoItem";
import store from "../../store";
import $axios from "../../request";
import { mapState } from "vuex";

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
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
    }),
  },
  methods: {
    async getInfo() {
      if (this.post !== "admin") {
        const response = await $axios.get("/info/all");

        store.dispatch("info/setInfo", response.data);
        this.info = response.data;
      }
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss">
.info__delete {
  & .btn-type__img {
    fill: #212121;
  }
}
</style>

<style lang="scss" scoped src="./homeInfoList.scss"></style>
