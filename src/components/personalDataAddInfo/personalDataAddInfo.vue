<template lang="pug">
.add-info
  .add-info__title Добавить объявление
  form.add-info__form
    .add-info__row
      textarea(
        placeholder="Текст объявления",
        v-model="info.description",
        :class="['add-info__textarea', { error: validation.firstError('info.description') }]"
      )
  .add-info__buttons
    app-btn.add-info__btn(text="Добавить", @handleClick="addInfo")
    app-btn.add-info__btn(
      text="Назад",
      @handleClick="$emit('changeIsInfoAdding')"
    )
</template>

<script>
import { Validator } from "simple-vue-validator";
import appBtn from "../button";
import $axios from "../../request";
import store from "../../store";
import { mapActions } from "vuex";

export default {
  components: {
    appBtn,
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "info.description"(value) {
      return Validator.value(value).required("Введите текст объявления");
    },
  },
  data() {
    return {
      info: {
        description: "",
      },
    };
  },
  methods: {
    ...mapActions({
      showTooltip: "tooltips/show",
    }),
    async addInfo() {
      try {
        if ((await this.$validate()) === false) return;

        const response = await $axios.post("/info/add/", this.info);

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });

        this.$emit("addInfo");
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }

      store.dispatch("info/setInfo");
    },
  },
};
</script>

<style lang="scss" src="./personalDataAddInfo.scss" scoped></style>