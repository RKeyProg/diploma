<template lang="pug">
.tasks
  homeHeader(activePage="2")
  splide.task__list(:options="options")
    splide-slide
      task.task(taskType="brain", link="/")
    splide-slide
      task.task(taskType="settings", link="/")
    splide-slide
      task.task(link="/")
    splide-slide
      task.task(link="/")
    splide-slide
      task.task(link="/")
</template>

<script>
import homeHeader from "../components/homeHeader";
import task from "../components/homeTask";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  name: "Tasks",
  components: {
    homeHeader,
    task,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        direction: "ttb",
        height: "26.666vh",
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

<style lang="scss">
* {
  outline: none;
}

.tasks {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.task__list {
  overflow: hidden;
  height: 100%;
}

.task__list ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
