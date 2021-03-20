<template lang="pug">
div(:class="['add-task__wrapper', { disabled: !isTeacher }]")
  .add-task(:class="{ active: isEdit }")
    transition(name="btn")
      .add-task__button(v-if="!isEdit", @click="isEdit = !isEdit")
        .add-task__button-cross
    transition(name="editor")
      .add-task__editor(v-if="isEdit")
        .editor__title Добавить задание
        form.editor__form
          .editor__column
            .column__title Тип задания
            .editor__task-type
              label
                input(
                  type="radio",
                  value="intelligent",
                  name="task-type",
                  v-model="newTask.type"
                )
                .editor__radio-view
                .editor__radio-name Интеллектуальное
              label
                input(
                  type="radio",
                  value="practical",
                  name="task-type",
                  v-model="newTask.type"
                )
                .editor__radio-view
                .editor__radio-name Практическое
              label
                input(
                  type="radio",
                  value="visual",
                  name="task-type",
                  v-model="newTask.type"
                )
                .editor__radio-view
                .editor__radio-name 3D
          .editor__column
            .column__title Название
            input(type="text", v-model="newTask.name")
          .editor__column
            .column__title Подтвердить
            .editor__add-buttons
              app-btn.editor__add-btn(
                type="Edit",
                @wasClick="addTask",
                :isEdit="isEdit"
              )
              app-btn.editor__add-btn(
                type="Close",
                @wasClick="isEdit = !isEdit",
                :isEdit="isEdit"
              )
</template>

<script>
import appBtn from "../button";
import $axios from "../../request";
import { mapActions } from "vuex";

export default {
  components: {
    appBtn,
  },
  props: {
    isTeacher: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isEdit: false,
      newTask: {
        name: "",
        type: "",
      },
    };
  },
  methods: {
    ...mapActions({
      showTooltip: "tooltips/show",
    }),
    async addTask() {
      try {
        const response = await $axios.post("/task/add", this.newTask);

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });

        this.$emit("addTask");
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      } finally {
        this.isEdit = !this.isEdit;
      }
    },
  },
};
</script>

<style lang="scss" src="./addTask.scss" scoped></style>
