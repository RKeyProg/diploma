<template lang="pug">
.curren-task
  section-title(title="Задание")
  .current-task__content(v-if="this.post !== 'teacher' || this.isTeacherClick")
    .current-task__wording {{ this.task.description }}
    pre.current-task__note {{ this.task.help }}
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
  transition(name="start")
    .buttons(v-if="!isTaskActive")
      app-btn.current-task__btn(
        v-if="post === 'teacher' && !isTeacherClick",
        text="Сохранить",
        @handleClick="changeTask"
      )
      app-btn.current-task__btn(
        v-if="post === 'teacher' && isTeacherClick",
        text="Проверить",
        @handleClick="checkTask"
      )
      app-btn.current-task__btn(
        v-if="post !== 'teacher'",
        text="Приступить",
        @handleClick="getStarted"
      )
      app-btn.current-task__btn(text="Назад", @handleClick="back")
  transition(name="start")
    .active-task(v-if="isTaskActive")
      form.form
        label.form__data
          .send-task__button
            .send-task__button-cross
          app-btn(type="File", isMultiple, @change="addFile")
      .buttons
        app-btn.current-task__btn(
          v-if="post !== 'teacher'",
          text="Отправить",
          @handleClick="getEnd"
        )
        app-btn.current-task__btn(text="Назад", @handleClick="back")
</template>

<script>
import sectionTitle from "../sectionTitle";
import appBtn from "../button";
import { mapState, mapActions } from "vuex";
import $axios from "../../request";

export default {
  components: {
    sectionTitle,
    appBtn,
  },
  data() {
    return {
      files: [],
      isTask: false,
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
      activeTask: (state) => state.activeTask,
      isTeacherClick: (state) => state.isTeacherClick,
    }),
    isTaskActive() {
      if (this.activeTask && this.task.id === this.activeTask.id) return true;

      return false;
    },
  },
  methods: {
    ...mapActions({
      setActiveTask: "task/setActiveTask",
      sendAnswer: "task/sendAnswer",
      changeIsTeacherClick: "task/changeIsTeacherClick",
    }),
    async changeTask() {
      await $axios.post(`/task/edit/${this.task.id}`, this.currentTask);
    },
    back() {
      this.$router.replace("/tasks");
    },
    async getStarted() {
      this.isTask = !this.isTask;

      this.setActiveTask(this.task);

      const response = await $axios.post("/task/start", this.task);

      console.log(response.data);
    },
    addFile() {
      const files = event.target.files;
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i]);
      }
    },
    async getEnd() {
      this.sendAnswer(this.files);
    },
    async checkTask() {
      console.log("Проверено");
    },
  },
  mounted() {
    this.currentTask.description = this.task.description;
    this.currentTask.help = this.task.help;

    console.log(this.isTeacherClick);
  },
  destroyed() {
    if (this.isTeacherClick && this.post === "teacher") {
      this.changeIsTeacherClick();
    }
  },
};
</script>

<style lang="scss" src="./currentTask.scss" scoped></style>
