<template lang="pug">
.management
  section-title(title="Управление")
  transition(name="static")
    .management-buttons(v-if="!isStudentAdding && !isTeacherAdding && !isInfoAdding")
      .buttons(v-if="userPost == 'Администратор'")
        appBtn(
          text="Добавить учащегося",
          @handleClick="changeStudentAdingView"
        )
        appBtn(text="Добавить преподавателя", @handleClick="changeTeacherAdingView")
      .buttons(v-else-if="userPost == 'Преподаватель'")
        appBtn(text="Добавить объявление", @handleClick="changeInfoAdingView")
  transition(name="editor")
    .management-content(v-if="isStudentAdding || isTeacherAdding || isInfoAdding")
      personal-data-add-student(
        v-if="isStudentAdding",
        @changeIsStudentAdding="changeStudentAdingView"
      )
      personal-data-add-teacher(
        v-else-if="isTeacherAdding",
        @changeIsTeacherAdding="changeTeacherAdingView"
      )
      personal-data-add-info(
        v-else-if="isInfoAdding",
        @changeIsInfoAdding="changeInfoAdingView"
      )
</template>

<script>
import sectionTitle from "../sectionTitle";
import appBtn from "../button";
import personalDataAddStudent from "../personalDataAddStudent";
import personalDataAddTeacher from "../personalDataAddTeacher";
import personalDataAddInfo from "../personalDataAddInfo";

export default {
  components: {
    sectionTitle,
    appBtn,
    personalDataAddStudent,
    personalDataAddTeacher,
    personalDataAddInfo
  },
  props: {
    userPost: String,
  },
  data() {
    return {
      isStudentAdding: false,
      isTeacherAdding: false,
      isInfoAdding: false,
    };
  },
  methods: {
    changeStudentAdingView() {
      this.isStudentAdding = !this.isStudentAdding;
    },
    changeTeacherAdingView() {
      this.isTeacherAdding = !this.isTeacherAdding;
    },
    changeInfoAdingView() {
      this.isInfoAdding = !this.isInfoAdding;
    }
  },
};
</script>

<style lang="scss" src="./personalDataManagement.scss" scoped></style>
