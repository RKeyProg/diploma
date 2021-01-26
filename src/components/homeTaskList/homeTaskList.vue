<template lang="pug">
.task-container
  splide(:options="options")
    splide-slide
      task(taskType="brain" link="/")
    splide-slide
      task(taskType="settings" link="/")
    splide-slide
      task(link="/")
    splide-slide
      task(link="/")
    splide-slide
      task(link="/")
</template>

<script>
import task from "../homeTask";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  components: {
    task,
    Splide,
    SplideSlide,
  },
  data() {
    return {
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
  },
};
</script>

<style lang="scss" scoped src="./homeTaskList.scss"></style>
