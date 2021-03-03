<template lang="pug">
.add-info
  .add-info__title Добавить объявление
  form.add-info__form
    .add-info__row
      textarea(placeholder="Текст объявления").add-info__textarea
  .add-info__buttons
    app-btn.add-info__btn(text="Добавить", @handleClick="addInfo")
    app-btn.add-info__btn(
      text="Назад",
      @handleClick="$emit('changeIsInfoAdding')"
    )
</template>

<script>
import appBtn from "../button";

export default {
  components: {
    appBtn,
  },
  methods: {
    addInfo() {
      console.log("Добавить объявление");
    },
  },
};
</script>

<style lang="scss" src="./personalDataAddInfo.scss" scoped></style>