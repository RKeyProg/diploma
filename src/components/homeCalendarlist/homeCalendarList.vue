<template lang="pug">
div
  splide(:options="options").list
    splide-slide
      homeCalendarItem(day="14", :day-name="dayName")
    splide-slide
      homeCalendarItem(:day="day", day-name="Понедельник")
    splide-slide
      homeCalendarItem(day="16", day-name="Вторник")
    splide-slide
      homeCalendarItem(day="17", day-name="Среда")
    splide-slide
      homeCalendarItem(day="18", day-name="Четверг")
    splide-slide
      homeCalendarItem(day="19", day-name="Пятница")
    splide-slide
      homeCalendarItem(day="20", day-name="Суббота")
    splide-slide
      homeCalendarItem(day="21", day-name="Всокресение")
    splide-slide
      homeCalendarItem(day="22", day-name="Понедельник")
    splide-slide
      homeCalendarItem(day="23", day-name="Вторник")
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import homeCalendarItem from "../homeCalendarItem";

export default {
  components: {
    homeCalendarItem,
    Splide,
    SplideSlide
  },
  data() {
    return {
      active: false,
      day: "15",
      dayName: "Воскресение",
      options: {
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
  }
};
</script>

<style lang="scss" scoped src="./homeCalendarList.scss"></style>
