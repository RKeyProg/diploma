<template lang="pug">
.curren-task
  section-title(title="Задание")
  .current-task__content(v-if="this.post !== 'teacher' || this.isTeacherClick")
    .current-task__wording 
      div(v-if="this.task.description") {{ this.task.description }}
      div(v-else) Формулировка задания не добавлена
    .current-task__note 
      pre(v-if="this.task.help") {{ this.task.help }}
      pre(v-else) Примечание задания не добавлено
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
      ul.files(
        v-if="post === 'teacher' && isTeacherClick && this.task.type !== 'visual'"
      )
        li(v-for="(file, index) in answerFiles", :key="index")
          app-link(file, :link="'http://172.20.10.4:8000/' + file.path") {{ file.name }}
      ul.components(v-else-if="post === 'teacher' && this.task.type === 'visual'")
        div.components__title Выбранные компоненты: 
        li(v-for="(component, index) in answerComponents", :key="index")
          div.components__answer
            span {{ index }}:
            span {{ component }}
      .buttons
        app-btn.current-task__btn(
          v-if="post === 'teacher' && !isTeacherClick",
          text="Сохранить",
          @handleClick="changeTask"
        )
        app-btn.current-task__btn(
          v-if="post === 'teacher' && isTeacherClick",
          text="Зачесть",
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
      .answer__add-files-container
        form.form
          label.form__data
            .send-task__button
              .send-task__button-cross
            app-btn(type="File", isMultiple, @change="addFile")
        .answer-container(v-if="this.files.length")
          ul.answer-files__list
            li(v-for="(file, index) in files", :key="index")
              app-link(file, disabled) {{ file.name }}
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
      answerComponents: {},
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
        const response = await $axios.post(
          `/task/edit/${this.task.id}`,
          this.currentTask
        );

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });

        this.$router.replace("/tasks");
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

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });

        if (this.task.type === "visual") {
          this.$router.replace("/visualizationTask");
        }

        this.isTask = !this.isTask;
        this.setActiveTask(this.task);
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
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
      this.files = [];
    },
    async acceptTask() {
      try {
        const response = await $axios.get(
          `/task/accept/answer/${this.currentStudent.id}`
        );

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });

        this.$router.replace("/group");
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    },
  },
  async mounted() {
    this.currentTask.description = this.task.description;
    this.currentTask.help = this.task.help;

    if (this.isTeacherClick && this.post === "teacher") {
      if (this.task.type !== "visual") {
        const response = await $axios.get(
          `/task/get/answer/${this.currentStudent.id}`
        );

        this.answerFiles = response.data;
      } else {
        const response = await $axios.get(
          `/task/get/pc/${this.currentStudent.id}`
        );

        let components = {};
        let compRow = "";

        for (const id in response.data) {
          for (const param in response.data[id]) {
            if (param !== "id") {
              compRow += `${response.data[id][param]} / `;
            }
          }
          components[id] = compRow.substring(0, compRow.length - 2);
          compRow = "";
        }

        this.answerComponents = components;
      }
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
