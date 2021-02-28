<template lang="pug">
.add-teacher
  .add-teacher__title Добавить преподавателя
  form.add-teacher__form
    .add-teacher__row
      .add-teacher__input-title Фамилия:
      app-input.add-teacher__input(
        v-model="user.surname",
        fieldType="text",
        title="Радкевич"
      )
    .add-teacher__row
      .add-teacher__input-title Имя:
      app-input.add-teacher__input(
        v-model="user.name",
        fieldType="text",
        title="Радкевич"
      )
    .add-teacher__row
      .add-teacher__input-title Телефон:
      app-input.add-teacher__input(
        v-model="user.phone",
        fieldType="text",
        title="+375291833827"
      )
    .add-teacher__row
      .add-teacher__input-title Группа:
      app-input.add-teacher__input(
        v-model="user.group",
        fieldType="text",
        title="8к2411"
      )
    .add-teacher__row
      .add-teacher__input-title E-Mail:
      app-input.add-teacher__input(
        v-model="user.email",
        fieldType="text",
        title="rkey_rs@mail.ru"
      )
    .add-teacher__row
      .add-teacher__input-title Практика:
      app-input.add-teacher__input(
        v-model="user.practic",
        fieldType="text",
        title="Технологическая"
      )
    .add-teacher__row
      .add-teacher__input-title Пароль:
      app-input.add-teacher__input(
        v-model="user.password",
        fieldType="text",
        title=""
      )
    .add-teacher__row
      .add-teacher__input-title Подтвердите:
      app-input.add-teacher__input(
        v-model="user.password_confirmation",
        fieldType="text",
        title=""
      )
  .add-teacher__buttons
    app-btn.add-teacher__btn(text="Добавить", @handleClick="addTeacher")
    app-btn.add-teacher__btn(
      text="Назад",
      @handleClick="$emit('changeIsTeacherAdding')"
    )
</template>

<script>
import appInput from "../input";
import appBtn from "../button";
import $axios from "../../request";

export default {
  components: {
    appInput,
    appBtn,
  },
  data() {
    return {
      user: {
        name: "",
        surname: "",
        phone: "",
        group: "",
        email: "",
        practic: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async addTeacher() {
      try {
        const response = await $axios.post("/register/worker", this.user);

        console.log(response);
      } catch (error) {
        console.log(error.response.data.error);
      } finally {
        this.isSubmitDisabled = false;
      }
    },
  },
};
</script>

<style lang="scss" src="./personalDataAddTeacher.scss" scoped></style>

<style lang="scss">
.add-teacher__input {
  & .input {
    max-width: 350px;
    padding: 10px 15px;
  }
}
</style>
