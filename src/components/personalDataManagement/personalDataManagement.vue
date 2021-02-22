<template lang="pug">
.management
  section-title(title="Управление")
  .management-buttons(v-if="!isStudentAdding && !isTeacherAdding")
    .buttons(v-if="userPost == 'Администратор'")
      appBtn(text="Добавить учащегося", @handleClick="changeStudentAdingView")
      appBtn(text="Добавить преподавателя", @handleClick="addTeacher")
    .buttons(v-else-if="userPost == 'Преподаватель'")
      appBtn(text="Добавить объявление", @handleClick="addInfo")
  .management-content(v-else-if="isStudentAdding")
    personal-data-add-student(@changeIsStudentAdding="changeStudentAdingView")
</template>

<script>
import sectionTitle from "../sectionTitle";
import appBtn from "../button";
import personalDataAddStudent from "../personalDataAddStudent";

export default {
  components: {
    sectionTitle,
    appBtn,
    personalDataAddStudent,
  },
  props: {
    userPost: String,
  },
  data() {
    return {
      isStudentAdding: false,
      isTeacherAdding: false,
    };
  },
  methods: {
    changeStudentAdingView() {
      this.isStudentAdding = !this.isStudentAdding;
    },
    addTeacher() {
      console.log("teacher");
    },
    addInfo() {
      console.log("info");
    },
  },
};
</script>

<style lang="scss" src="./personalDataManagement.scss" scoped></style>
