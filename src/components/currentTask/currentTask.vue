<template lang="pug">
.curren-task
  section-title(title="Задание")
  .current-task__content(v-if="post !== 'teacher'")
    .current-task__wording {{ this.task.description }}
    .current-task__note {{ this.task.help }}
  .current-task__content(v-else)
    .current-task__wording
      textarea.current-task__textarea(
        placeholder="Формулировка задания",
        v-model="currentTask.description"
      )
    .current-task__note
      textarea.current-task__textarea(
        placeholder="Формулировка задания",
        v-model="currentTask.help"
      )
  app-btn.current-task__btn(
    v-if="post === 'teacher'",
    text="Сохранить",
    @handleClick="changeTask"
  )
  app-btn.current-task__btn(v-else, text="Приступить")
  app-btn.current-task__btn(text="Назад" @click="")
</template>

<script>
import sectionTitle from "../sectionTitle";
import appBtn from "../button";
import { mapState } from "vuex";
import $axios from "../../request";

export default {
  components: {
    sectionTitle,
    appBtn,
  },
  data() {
    return {
      currentTask: {
        description: "",
        help: "",
      },
    };
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
    }),
    ...mapState("task", {
      task: (state) => state.currentTask,
    }),
  },
  methods: {
    async changeTask() {
      console.log(this.task.description);
      const response = await $axios.post(
        `/task/edit/${this.task.id}`,
        this.currentTask
      );
      console.log(response);
    },
  },
  mounted() {
    console.log(this.task);
  }
};
</script>

<style lang="scss" src="./currentTask.scss" scoped></style>
