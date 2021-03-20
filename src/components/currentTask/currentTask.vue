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
    .answer-container(v-if="!isTaskActive")
      ul.files(v-if="post === 'teacher' && isTeacherClick")
        li(v-for="(file, index) in answerFiles", :key="index")
          app-link(file, :link="'http://172.20.10.4:8000/' + file.path") {{ file.name }}
      .buttons
        app-btn.current-task__btn(
          v-if="post === 'teacher' && !isTeacherClick",
          text="Сохранить",
          @handleClick="changeTask"
        )
        app-btn.current-task__btn(
          v-if="post === 'teacher' && isTeacherClick",
          text="Подтвердить",
          @handleClick="acceptTask"
        )
        app-btn.current-task__btn(
          v-if="post !== 'teacher'",
          text="Приступить",
          @handleClick="getStarted"
        )
        app-btn.current-task__btn(text="Назад", @handleClick="back")
  transition(name="start")
    .active-task(v-if="isTaskActive && this.task.type !== 'visual'")
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
import appLink from "../appLink";
import { mapState, mapActions } from "vuex";
import $axios from "../../request";

export default {
  components: {
    sectionTitle,
    appBtn,
    appLink,
  },
  data() {
    return {
      files: [],
      isTask: false,
      currentTask: {
        description: "",
        help: "",
      },
      answerFiles: {},
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
    ...mapState("student", {
      currentStudent: (state) => state.currentStudent,
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
      showTooltip: "tooltips/show",
    }),
    async changeTask() {
      try {
        const response = await $axios.post(`/task/edit/${this.task.id}`, this.currentTask);
        
        this.showTooltip({
          text: response.data.message,
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    },
    back() {
      this.$router.replace("/tasks");
    },
    async getStarted() {
      try {
        const response = await $axios.post("/task/start", this.task);

        console.log(response.data);

        if (this.task.type === "visual") {
          this.$router.replace("/visualizationTask");
        }

        this.isTask = !this.isTask;
        this.setActiveTask(this.task);
      } catch (error) {
        console.log(error.response.data.message);
      }
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
    async acceptTask() {
      await $axios.get(`/task/accept/answer/${this.currentStudent.id}`);

      this.$router.replace("/group");
    },
  },
  async mounted() {
    this.currentTask.description = this.task.description;
    this.currentTask.help = this.task.help;

    if (this.isTeacherClick && this.post === "teacher") {
      const response = await $axios.get(
        `/task/get/answer/${this.currentStudent.id}`
      );

      this.answerFiles = response.data;
    }
  },
  destroyed() {
    if (this.isTeacherClick && this.post === "teacher") {
      this.changeIsTeacherClick();
    }
  },
};
</script>

<style lang="scss" src="./currentTask.scss" scoped></style>
