<template lang="pug">
.add-student
  .add-student__title Добавить учащегося
  form.add-student__form
    .add-student__row
      .add-student__input-title ФИО:
      app-input.add-student__input(
        fieldType="text",
        title="Радкевич Кирилл Александрович"
      )
    .add-student__row
      .add-student__input-title Телефон:
      app-input.add-student__input(fieldType="text", title="+375291833827")
    .add-student__row
      .add-student__input-title Группа:
      app-input.add-student__input(fieldType="text", title="8к2411")
    .add-student__row
      .add-student__input-title E-Mail:
      app-input.add-student__input(fieldType="text", title="rkey_rs@mail.ru")
    .add-student__row
      .add-student__input-title Практика:
      app-input.add-student__input(fieldType="text", title="Технологическая")
  .add-student__buttons
    app-btn.add-student__btn(text="Добавить", @handleClick="addStudent")
    app-btn.add-student__btn(
      text="Назад",
      @handleClick="$emit('changeIsStudentAdding')"
    )
</template>

<script>
import appInput from "../input";
import appBtn from "../button";

export default {
  components: {
    appInput,
    appBtn,
  },
  methods: {
    addStudent() {
      console.log("add new student");
    },
  },
};
</script>

<style lang="scss" src="./personalDataAddStudent.scss" scoped></style>

<style lang="scss">
.add-student__input {
  & .input {
    max-width: 350px;
    padding: 10px 15px;
  }
}
</style>
