<template lang="pug">
.current-practice
  section-title(title="Текущая практика")
  .current-practice__data
    .current-practice__title Преддипломная
</template>

<script>
import sectionTitle from "../sectionTitle";
import { mapState } from "vuex";

export default {
  name: "personalDataCurrentPractice",
  components: {
    sectionTitle
  },
  props: {
    user: Object
  },
  computed: {
    ...mapState("user", {
      practice: state => state.user.id_practice,
    })
  }
};
</script>

<style lang="scss" scoped src="./personalDataCurrentPractice.scss"></style>
