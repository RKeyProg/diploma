<template lang="pug">
.task__container.task__container_add(v-if="add", @click="addTask")
.task__container(v-else)
  .task__container-image(v-if="taskType === 'brain'")
    svg.task__container-icon(
      viewBox="0 0 512.001 512.001",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/brain.svg#brain`)
  .task__container-image(v-else-if="taskType === 'settings'")
    svg.task__container-icon(
      viewBox="0 0 512.001 512.001",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/settings.svg#settings`)
  .task__container-title Работа с Microsoft Excel
  app-link.task__container-send(send, :link="link")
</template>

<script>
import appLink from "../appLink";

export default {
  components: {
    appLink,
  },
  props: {
    add: {
      type: Boolean,
      default: false,
    },
    taskType: {
      type: String,
      default: "brain",
    },
    link: {
      type: String,
      default: "/",
    },
  },
  methods: {
    addTask() {
      console.log("Add new task");
    },
  },
};
</script>

<style lang="scss" scoped src="./homeTask.scss"></style>
