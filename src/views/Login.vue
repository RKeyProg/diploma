<template lang="pug">
.login
  h4.h4 Вход в аккаунт
  form.form(@submit.prevent="handleSubmit")
    .inputs
      app-input.login-input(
        title="E-Mail",
        v-model="user.name",
        :errorMessage="validation.firstError('user.name')"
      )
      app-input.login-input(
        fieldType="password",
        title="Пароль",
        v-model="user.password",
        :errorMessage="validation.firstError('user.password')"
      )
    btn(text="Войти", :disabled="isSubmitDisabled")
    .param
      a.link-remember(href="#") Забыли пароль?
      app-input(fieldType="checkBox", checked, title="Запомнить пароль")
</template>

<script>
import { Validator } from "simple-vue-validator";
import $axios from "../request";
import appInput from "../components/input";
import btn from "../components/button";

export default {
  components: {
    appInput,
    btn,
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name"(value) {
      return Validator.value(value).required("Введите name");
    },
    "user.password"(value) {
      return Validator.value(value).required("Введите пароль");
    },
  },
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      isSubmitDisabled: false,
    };
  },
  methods: {
    async handleSubmit() {
      if ((await this.$validate()) === false) return;

      this.isSubmitDisabled = true;

      try {
        const response = await $axios.post("/login", this.user);

        const token = response.data.token;
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
      } catch (error) {
        console.log(error.response.data.error);
      } finally {
        this.isSubmitDisabled = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../mixins.scss";

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
  font-size: 24px;
  color: #212121;
  margin-bottom: 20px;

  @include desktop {
    font-size: 20px;
  }

  @include tablets {
    font-size: 18px;
  }

  @include phones {
    font-size: 16px;
  }
}

.form {
  display: flex;
  flex-direction: column;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  &::after {
    content: "";
    display: block;
    width: 99%;
    height: 1px;
    background-color: #ff4081;
  }

  @include desktop {
    margin-bottom: 15px;
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

  @include desktop {
    font-size: 14px;
  }

  @include phones {
    flex-direction: column;

    & .link-remember {
      margin-bottom: 10px;
    }
  }
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

.login-input {
  margin-bottom: 20px;

  @include desktop {
    margin-bottom: 15px;
  }
}
</style>
