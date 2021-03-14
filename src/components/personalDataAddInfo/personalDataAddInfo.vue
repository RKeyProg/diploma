<template lang="pug">
.add-info
  .add-info__title Добавить объявление
  form.add-info__form
    .add-info__row
      textarea.add-info__textarea(placeholder="Текст объявления", v-model="info.description")
  .add-info__buttons
    app-btn.add-info__btn(text="Добавить", @handleClick="addInfo")
    app-btn.add-info__btn(
      text="Назад",
      @handleClick="$emit('changeIsInfoAdding')"
    )
</template>

<script>
import appBtn from "../button";
import $axios from "../../request";
import store from "../../store";

export default {
  components: {
    appBtn,
  },
  data() {
    return {
      info: {
        description: "",
      }
    };
  },
  methods: {
    async addInfo() {
      const response = await $axios.post("/info/add/", this.info);

      console.log(response);

      store.dispatch("info/setInfo");
    },
  },
};
</script>

<style lang="scss" src="./personalDataAddInfo.scss" scoped></style>