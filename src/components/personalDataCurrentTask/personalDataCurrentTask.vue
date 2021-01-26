<template lang="pug">
.current-task
  section-title(title="Текущее задание")
  .current-task__data
    .current-task__title Работа с Microsoft Excel
    app-link(send :link="link")
</template>

<script>
import sectionTitle from "../sectionTitle";
import appLink from "../appLink";

export default {
  name: "personalDataCurrentTask",
  components: {
    sectionTitle,
    appLink
  },
  props: {
    user: Object
  },
  data() {
    return {
      link: '/'
    }
  }
};
</script>

<style lang="scss" scoped src="./personalDataCurrentTask.scss"></style>
