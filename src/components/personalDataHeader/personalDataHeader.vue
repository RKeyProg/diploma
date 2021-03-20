<template lang="pug">
form(
  :class="['personal-data__header', { editing: isEdit }]",
  @submit.prevent="handleSubmit"
)
  transition(name="static")
    .personal-data__content(v-if="!isEdit")
      avatar.personal-data__photo(:user="isUser", :photo="this.user.photo")
      .personal-data__title.personal-data_js_end.personal-data_as_end {{ getUserName }}
      .personal-data__param.personal-data_as_end
        span Телефон:
        span {{ user.phone }}
      .personal-data__param.personal-data_js_end.personal-data_as_start(
        v-if="user.post == 'Студент'"
      )
        span Группа:
        span {{ user.group }}
      .personal-data__param.personal-data_js_end.personal-data_as_start(v-else)
        span
        span {{ post }}
      .personal-data__param.personal-data_as_start
        span E-Mail:
        span {{ user.email }}
  transition(name="editor")
    .personal-data__content_edit(v-if="isEdit")
      .personal-data__inputs.personal-data__inputs_right
        div
          app-input.personal-data__input(
            title="Телефон",
            v-model="newPersonData.phone",
            smallSize,
            :errorMessage="validation.firstError('newPersonData.phone')"
          )
        div
          app-input.personal-data__input(
            title="E-Mail",
            v-model="newPersonData.email",
            smallSize,
            :errorMessage="validation.firstError('newPersonData.email')"
          )
      label.personal-data__new-photo(
        :style="{ backgroundImage: `url(${this.preview})` }"
      )
        app-btn(type="File", @change="handleChange")
        div(v-if="!this.preview")
          svg.personal-data__new-photo-icon(
            viewBox="0 0 512.001 512.001",
            preserveAspectRatio="none"
          )
            use(xlink:href=`../../images/icons/camera.svg#camera`)
      .personal-data__inputs.personal-data__inputs_left
        div
          app-input.personal-data__input(
            title="Пароль",
            v-model="newPersonData.password",
            smallSize
          )
        div
          app-input.personal-data__input(
            title="Подтвердите пароль",
            v-model="newPersonData.password_confirmation",
            smallSize
          )
  .personal-data__buttons(v-if="!noControls")
    transition(name="btn")
      .personal-data__buttons-group(v-if="!isEdit")
        app-btn.personal-data__btn(type="Edit", @wasClick="editPersonalData")
        app-btn.personal-data__btn(type="Exit")
    transition(name="btn") 
      .personal-data__buttons-group(v-if="isEdit")
        app-btn.personal-data__btn(type="Submit")
        app-btn.personal-data__btn(@wasClick="closeEditing", type="Close")
</template>

<script>
import { Validator } from "simple-vue-validator";
import avatar from "../avatar";
import appBtn from "../button";
import appInput from "../input";
import store from "../../store";
import { mapActions } from "vuex";

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
      return Validator.value(value).required("");
    },
    "newPersonData.email"(value) {
      return Validator.value(value).required("");
    },
  },
  data() {
    return {
      isEdit: false,
      hovered: false,
      newPersonData: {
        phone: this.user.phone,
        email: this.user.email,
        photo: {},
        password: "",
        password_confirmation: "",
      },
      preview: "",
    };
  },
  props: {
    user: Object,
    post: String,
    noControls: {
      type: Boolean,
      default: false,
    },
    isUser: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      showTooltip: "tooltips/show",
    }),
    editPersonalData() {
      this.isEdit = !this.isEdit;
    },
    async handleSubmit() {
      if ((await this.$validate()) === false) return;

      try {
        store.dispatch("user/editData", await this.newPersonData);

        this.preview = "";
        this.newPersonData.password = "";
        this.newPersonData.password_confirmation = "";

        this.isEdit = !this.isEdit;
      } catch (error) {
        console.log(error.response.data.error);
      } finally {
        this.isSubmitDisabled = false;
      }
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
        this.preview = reader.result;
      };
    },
    closeEditing() {
      this.isEdit = !this.isEdit;
      this.newPersonData.phone = this.user.phone;
      this.newPersonData.email = this.user.email;
      this.newPersonData.photo = {};
      this.newPersonData.password = "";
      this.newPersonData.password_confirmation = "";
      this.preview = "";
    },
  },
  computed: {
    getUserName() {
      return `${this.user.surname} ${this.user.name} ${this.user.patronymic}`;
    },
  },
};
</script>

<style lang="scss" scoped src="./personalDataHeader.scss"></style>
