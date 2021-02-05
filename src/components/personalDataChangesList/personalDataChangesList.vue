<template lang="pug">
div
  splide(:options="options")
    splide-slide.item
      homeInfoItem(date="13.11.2020", :text="text")
    splide-slide.item
      homeInfoItem(date="13.11.2020", :text="text1")
    splide-slide.item
      homeInfoItem(date="13.11.2020", :text="text2")
    splide-slide.item
      homeInfoItem(date="13.11.2020", :text="text3")
    splide-slide.item
      homeInfoItem(date="13.11.2020", :text="text")
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import homeInfoItem from "../homeInfoItem";

export default {
  data() {
    return {
      text: "Добавлено новое задание",
      text1: "Выполненное задание проверено. Отправлено на доработку",
      text2: "Добавлено новое задание",
      text3: "Выполненное задание проверено.",
      options: {
        autoHeight: true,
        autoWidth: true,
        arrows: false,
        pagination: false,
        rewind: true,
        gap: "25px",
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
};
</script>

<style lang="scss" scoped src="./personalDataChangesList.scss"></style>
