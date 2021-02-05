<template lang="pug">
div(:class="['personal-data__header', { editing: isEdit }]")
  transition(name="static")
    .personal-data__content(v-if="!isEdit")
      avatar.personal-data__photo
      .personal-data__title.personal-data_js_end.personal-data_as_end {{ user.name }}
      .personal-data__param.personal-data_as_end
        span Телефон:
        span {{ user.phone }}
      .personal-data__param.personal-data_js_end.personal-data_as_start
        span Группа:
        span {{ user.group }}
      .personal-data__param.personal-data_as_start
        span E-Mail:
        span {{ user.mail }}
  transition(name="editor")
    .personal-data__content_edit(v-if="isEdit")
      button.personal-data__new-photo
        svg.personal-data__new-photo-icon(
          viewBox="0 0 512.001 512.001",
          preserveAspectRatio="none"
        )
          use(xlink:href=`../../images/icons/camera.svg#camera`)
      .personal-data__inputs
        div
          span Телефон:
          app-input.personal-data__input(title="+375291243249", smallSize)
        div
          span E-Mail:
          app-input.personal-data__input(title="name@mail.ru", smallSize)
  .personal-data__buttons
    app-btn.personal-data__btn(
      type="Edit",
      @wasClick="editPersonalData",
      :isEdit="isEdit"
    )
    app-btn.personal-data__btn(v-if="!isEdit" type="Exit")
    app-btn.personal-data__btn(v-else @wasClick="isEdit = !isEdit" type="Close")
</template>

<script>
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
  data() {
    return {
      isEdit: false,
    };
  },
  props: {
    user: Object,
  },
  methods: {
    editPersonalData() {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>

<style lang="scss" scoped src="./personalDataHeader.scss"></style>
