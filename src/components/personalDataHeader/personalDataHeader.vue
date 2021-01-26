<template lang="pug">
.personal-data__header
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
  .personal-data__buttons
    app-btn(type="Edit").personal-data__btn
    app-btn(type="Exit").personal-data__btn
</template>

<script>
import avatar from "../avatar";
import appBtn from "../button";

export default {
  name: "personalDataHeader",
  components: {
    avatar,
    appBtn
  },
  props: {
    user: Object
  }
};
</script>

<style lang="scss" scoped src="./personalDataHeader.scss"></style>
