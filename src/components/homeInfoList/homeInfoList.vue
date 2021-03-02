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
      text:
        "Изменение аудитории. Практика будет проходить в 7 корпусе БГУИР, 702 аудитория",
      text1: "Изменение расписания. 20.09.2020 практика начинается с 13.55.",
      text2: "Объявление. До 20.09.2020 принести паспорта",
      text3: "Замена. 17.09.2020 занятия будет проводить Иванов Иван Иванович",
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
};
</script>

<style lang="scss" scoped src="./homeInfoList.scss"></style>
