<template lang="pug">
form(
  :class="['personal-data__header', { editing: isEdit }]",
  @submit.prevent="handleSubmit"
)
  transition(name="static")
    .personal-data__content(v-if="!isEdit")
      avatar.personal-data__photo
      .personal-data__title.personal-data_js_end.personal-data_as_end {{ user.name }}
      .personal-data__param.personal-data_as_end
        span Телефон:
        span {{ user.phone }}
      div(v-if="user.post == 'Студент'").personal-data__param.personal-data_js_end.personal-data_as_start
        span Группа:
        span {{ user.group }}
      div(v-else).personal-data__param.personal-data_js_end.personal-data_as_start
        span
        span {{ user.post }}
      .personal-data__param.personal-data_as_start
        span E-Mail:
        span {{ user.mail }}
  transition(name="editor")
    .personal-data__content_edit(v-if="isEdit")
      label.personal-data__new-photo(
        :style="{ backgroundImage: `url(${newPersonData.preview})` }"
      )
        app-btn(type="File", @change="handleChange")
        div(v-if="!newPersonData.preview")
          svg.personal-data__new-photo-icon(
            viewBox="0 0 512.001 512.001",
            preserveAspectRatio="none"
          )
            use(xlink:href=`../../images/icons/camera.svg#camera`)
      .personal-data__inputs
        div
          span Телефон:
          app-input.personal-data__input(
            title="+375291243249",
            v-model="newPersonData.phone",
            smallSize
            :errorMessage="validation.firstError('newPersonData.phone')"
          )
        div
          span E-Mail:
          app-input.personal-data__input(
            title="name@mail.ru",
            v-model="newPersonData.mail",
            smallSize
            :errorMessage="validation.firstError('newPersonData.mail')"
          )
  .personal-data__buttons
    app-btn.personal-data__btn(
      type="Edit",
      @wasClick="editPersonalData",
      v-if="!isEdit"
    )
    app-btn.personal-data__btn(
      type="Submit"
      v-else
    )
    app-btn.personal-data__btn(v-if="!isEdit", type="Exit")
    app-btn.personal-data__btn(v-else, @wasClick="closeEditing", type="Close")
</template>

<script>
import { Validator } from "simple-vue-validator";
import avatar from "../avatar";
import appBtn from "../button";
import appInput from "../input";

export default {
  name: "personalDataHeader",
  components: {
    avatar,
    appBtn,
    appInput,
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "newPersonData.phone"(value) {
      return Validator.value(value).required("Введите телефон");
    },
    "newPersonData.mail"(value) {
      return Validator.value(value).required("Введите E-Mail");
    }
  },
  data() {
    return {
      isEdit: false,
      hovered: false,
      newPersonData: {
        phone: "",
        mail: "",
        photo: {},
        preview: "",
      },
    };
  },
  props: {
    user: Object,
  },
  methods: {
    editPersonalData() {
      this.isEdit = !this.isEdit;
    },
    async handleSubmit() {
      if ((await this.$validate()) === false) return;

      console.log("submit");
    },
    handleChange(event) {
      const file = event.target.files[0];

      this.newPersonData.photo = file;

      this.renderPhoto(file);
    },
    renderPhoto(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.newPersonData.preview = reader.result;
      };
    },
    closeEditing() {
      this.isEdit = !this.isEdit;
      this.newPersonData.phone = "";
      this.newPersonData.mail = "";
      this.newPersonData.photo = {};
      this.newPersonData.preview = "";
    },
  },
};
</script>

<style lang="scss" scoped src="./personalDataHeader.scss"></style>
