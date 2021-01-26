<template lang="pug">
.current-practice
  section-title(title="Текущая практика")
  .current-practice__data
    .current-practice__title Преддипломная практика
    .current-practice__date 31.12.2020 — 27.01.2021
</template>

<script>
import sectionTitle from "../sectionTitle";

export default {
  name: "personalDataCurrentPractice",
  components: {
    sectionTitle
  },
  props: {
    user: Object
  }
};
</script>

<style lang="scss" scoped src="./personalDataCurrentPractice.scss"></style>
