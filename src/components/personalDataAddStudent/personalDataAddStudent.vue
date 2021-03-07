<template lang="pug">
.add-student
  .add-student__title Добавить учащегося
  form.add-student__form
    .add-student__row
      .add-student__input-title Фамилия:
      app-input.add-student__input(
        v-model="user.surname",
        fieldType="text",
        title="Радкевич"
      )
    .add-student__row
      .add-student__input-title Имя:
      app-input.add-student__input(
        v-model="user.name",
        fieldType="text",
        title="Кирилл"
      )
    .add-student__row
      .add-student__input-title Отчество:
      app-input.add-student__input(
        v-model="user.patronymic",
        fieldType="text",
        title="Александрович"
      )
    .add-student__row
      .add-student__input-title Телефон:
      app-input.add-student__input(
        v-model="user.phone",
        fieldType="text",
        title="+375291833827"
      )
    .add-student__row
      .add-student__input-title Группа:
      app-input.add-student__input(
        v-model="user.group",
        fieldType="text",
        title="8к2411"
      )
    .add-student__row
      .add-student__input-title E-Mail:
      app-input.add-student__input(
        v-model="user.email",
        fieldType="text",
        title="rkey_rs@mail.ru"
      )
    .add-student__row
      .add-student__input-title Практика:
      app-input.add-student__input(
        v-model="user.practice",
        fieldType="text",
        title="Технологическая"
      )
    .add-student__row
      .add-student__input-title Пароль:
      app-input.add-student__input(
        v-model="user.password",
        fieldType="text",
        title=""
      )
    .add-student__row
      .add-student__input-title Подтвердите:
      app-input.add-student__input(
        v-model="user.password_confirmation",
        fieldType="text",
        title=""
      )
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
        patronymic: "",
        phone: "",
        group: "",
        email: "",
        practice: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async addStudent() {
      try {
        const response = await $axios.post("/register/student", this.user);

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

<style lang="scss" src="./personalDataAddStudent.scss" scoped></style>

<style lang="scss">
@import "../../mixins.scss";

.add-student__input {
  & .input {
    max-width: 350px;
    min-width: 250px;
    width: 27vw;
    padding: 10px 15px;

    @include tablets {
      max-width: 300px;
      min-width: 200px;
      width: 42vw;
    }

    @include phones {
      max-width: 100%;
      width: 60vw;
    }
  }
}
</style>
