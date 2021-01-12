<template lang="pug">
.login
  h4.h4 Вход в аккаунт
  form.form(@submit.prevent="handleSubmit")
    .inputs
      app-input(title="E-Mail", v-model="user.mail")
      app-input(fieldType="password", title="Пароль", v-model="user.password")
    btn(text="Войти")
    .param
      a.link-remember(href="#") Забыли пароль?
      label.save-password
        app-input(fieldType="checkBox", checked)
        span Запомнить пароль
</template>

<script>
import { Validator } from "simple-vue-validator";
import axios from "axios";
import appInput from "../components/input";
import btn from "../components/button";

export default {
  components: {
    appInput,
    btn
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.mail"(value) {
      return Validator.value(value).required("Введите email");
    },
    "user.password"(value) {
      return Validator.value(value).required("Введите пароль");
    }
  },
  data() {
    return {
      user: {
        mail: "",
        password: "",
        savePassword: false
      }
    };
  },
  methods: {
    handleSubmit() {
      axios.get("http://172.20.10.4:3000").then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.h4 {
  font-weight: 500;
  font-size: 26px;
  color: #212121;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.66vh;

  &::after {
    content: "";
    display: block;
    width: 99%;
    height: 1px;
    background-color: #ff4081;
  }
}

.param {
  display: flex;
  justify-content: space-between;
  padding: 1.66vh 0.69vw 0;
  font-weight: 500;
  font-size: 16px;
  color: #757575;
  user-select: none;
}

.save-password {
  display: flex;
  align-items: center;

  & span {
    margin-left: 4px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
