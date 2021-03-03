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
  .task__container-image(v-else-if="taskType === 'clipboard'")
    svg.task__container-icon(
      viewBox="0 0 512 512",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/clipboard.svg#clipboard`)
  .task__container-image(v-else-if="taskType === 'manual'")
    svg.task__container-icon(
      viewBox="0 0 512 512",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/manual.svg#manual`)
  .task__container-image(v-else-if="taskType === 'letter'")
    svg.task__container-icon(
      viewBox="0 0 512 512",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/letter.svg#letter`)
  .task__container-image(v-else-if="taskType === 'contract'")
    svg.task__container-icon(
      viewBox="0 0 512 512",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/contract.svg#contract`)
  .task__container-title {{taskName}}
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
    taskName: {
      type: String,
      default: ""
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
