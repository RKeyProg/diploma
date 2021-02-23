<template lang="pug">
.management
  section-title(title="Управление")
  transition(name="static")
    .management-buttons(v-if="!isStudentAdding && !isTeacherAdding")
      .buttons(v-if="userPost == 'Администратор'")
        appBtn(
          text="Добавить учащегося",
          @handleClick="changeStudentAdingView"
        )
        appBtn(text="Добавить преподавателя", @handleClick="changeTeacherAdingView")
      .buttons(v-else-if="userPost == 'Преподаватель'")
        appBtn(text="Добавить объявление", @handleClick="addInfo")
  transition(name="editor")
    .management-content(v-if="isStudentAdding || isTeacherAdding")
      personal-data-add-student(
        v-if="isStudentAdding",
        @changeIsStudentAdding="changeStudentAdingView"
      )
      personal-data-add-teacher(
        v-else-if="isTeacherAdding",
        @changeIsTeacherAdding="changeTeacherAdingView"
      )
</template>

<script>
import sectionTitle from "../sectionTitle";
import appBtn from "../button";
import personalDataAddStudent from "../personalDataAddStudent";
import personalDataAddTeacher from "../personalDataAddTeacher";

export default {
  components: {
    sectionTitle,
    appBtn,
    personalDataAddStudent,
    personalDataAddTeacher
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
    changeTeacherAdingView() {
      this.isTeacherAdding = !this.isTeacherAdding;
    },
    addInfo() {
      console.log("info");
    },
  },
};
</script>

<style lang="scss" src="./personalDataManagement.scss" scoped></style>
