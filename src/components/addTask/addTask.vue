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
                input(type="radio", name="task-type")
                .editor__radio-view
                .editor__radio-name Интелектуальное
              label
                input(type="radio", name="task-type")
                .editor__radio-view
                .editor__radio-name Практическое
              label
                input(type="radio", name="task-type")
                .editor__radio-view
                .editor__radio-name 3D
          .editor__column
            .column__title Название
            input(type="text")
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
    };
  },
  methods: {
    addTask() {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>

<style lang="scss" src="./addTask.scss" scoped></style>
