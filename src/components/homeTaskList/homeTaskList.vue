<template lang="pug">
.task-container
  splide(:options="options" :slides="tasks").home-task__list
    splide-slide(v-for="task in tasks", :key="task.id")
      task.task(:taskName="task.name", :taskType="task.type", :task="task" link="/task")
</template>

<script>
import task from "../homeTask";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import $axios from "../../request";

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
        gap: "20px",
        padding: {
          left: "2.08vw",
          right: "2.08vw",
        },
      },
      tasks: {},
    };
  },
  methods: {
    async getTasks() {
      const response = await $axios.get("/task/all");
      console.log(response);
      this.tasks = response.data;
    },
  },
  async mounted() {
    this.getTasks();
  },
};
</script>

<style lang="scss">
.home-task__list {

  & .splide__list {
    margin-left: -20px;
  }

  & .splide__slide {
    margin-right: 15px;
  }
}
</style>

<style lang="scss" scoped src="./homeTaskList.scss"></style>
