<template lang="pug">
.task-container
  splide.home-task__list(:options="options", :slides="tasks")
    splide-slide(v-for="task in tasks", :key="task.id")
      task(
        :taskName="task.name",
        :taskType="task.type",
        :task="task",
        link="/task",
        :active="task.status"
      )
</template>

<script>
import task from "../homeTask";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import $axios from "../../request";
import { mapState, mapActions } from "vuex";

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
      tasks: [],
    };
  },
  methods: {
    ...mapActions({
      setActiveTask: "task/setActiveTask",
      etCurrentTask: "task/setCurrentTask",
    }),
    async getTasks() {
      const response = await $axios.get("/task/all");
      const tasks = response.data;

      if (this.post === "student") {
        const activeTask = await $axios.get(`/task/active/${this.userId}`);

        this.setActiveTask(activeTask.data[0]);

        tasks.forEach(el => {
          if (el.id === activeTask.data[0].id) {
            el.status = "active";
          }
        });
      }

      this.tasks = tasks;
    },
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
      userId: (state) => state.user.id,
    }),
  },
  async mounted() {
    this.getTasks();
  },
};
</script>

<style lang="scss">
.home-task__list {
  & .splide__slide {
    margin-right: 15px;
  }
}
</style>

<style lang="scss" scoped src="./homeTaskList.scss"></style>
