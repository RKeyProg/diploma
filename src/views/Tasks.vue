<template lang="pug">
.tasks
  home-header(activePage="2")
  add-task(:isTeacher="isTeacher" @addTask="getTasks")
  splide(:options="options" :slides="tasks").task__list
    splide-slide(v-for="task in tasks", :key="task.id")
      task.task(:taskName="task.name", :taskType="task.type", :task="task" link="/task")
</template>

<script>
import homeHeader from "../components/homeHeader";
import addTask from "../components/addTask";
import task from "../components/homeTask";
import store from "../store";
import $axios from "../request";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  name: "Tasks",
  components: {
    homeHeader,
    addTask,
    task,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        direction: "ttb",
        height: "23vh",
        autoHeight: true,
        arrows: false,
        pagination: false,
        rewind: true,
        gap: "15px",
        padding: {
          left: "2.08vw",
          right: "2.08vw",
        },
      },
      tasks: [],
    };
  },
  computed: {
    isTeacher() {
      if (store.state.user.post != "teacher") return false;
      return true;
    },
  },
  methods: {
    async getTasks() {
      const response = await $axios.get("/task/all");

      this.tasks = response.data;
    },
  },
  async created() {
    this.getTasks();
  },
};
</script>

<style lang="scss">
@import "../mixins.scss";

* {
  outline: none;
}

.tasks {
  padding: 2.77vh 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.task__list {
  user-select: none;
  overflow: hidden;
  height: 100%;

  & .splide__list {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, calc(100% / 3 - 15px));
    grid-gap: 15px;

    @include desktop {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }

  & .splide__track {
    height: 100% !important;
    padding: 0 2.08vw;
  }

  & .splide__slide {
    max-width: 100% !important;
    min-height: 240px;
    margin-bottom: 0 !important;

    @include desktop {
      min-height: 180px;
    }
  }

  & .task__container {
    min-width: 0;
    width: 100%;
    height: 100%;
  }

  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }
}
</style>
