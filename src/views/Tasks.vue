<template lang="pug">
.tasks
  home-header(activePage="2")
  add-task(isTeacher)
  splide.task__list(:options="options")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" taskType="clipboard", link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" taskType="settings", link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" link="/task")
    splide-slide
      task.task(taskName="Работа с Microsoft Excel" link="/task")
</template>

<script>
import homeHeader from "../components/homeHeader";
import addTask from "../components/addTask";
import task from "../components/homeTask";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  name: "Tasks",
  components: {
    homeHeader,
    addTask,
    task,
    Splide,
    SplideSlide
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
          right: "2.08vw"
        }
      }
    };
  }
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
  user-select: none;
  overflow: hidden;
  height: 100%;

  & .splide__track {
    height: 100% !important;
    padding: 0 2.08vw;
  }

  & .splide__slide {
    width: fit-content !important;
  }

  & .task__container {
    width: 27vw;
  }
}

.task__list ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
