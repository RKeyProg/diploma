<template lang="pug">
.task__container(v-else)
  .task__container-image(v-if="taskType === 'intelligent'")
    svg.task__container-icon(
      viewBox="0 0 512.001 512.001",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/brain.svg#brain`)
  .task__container-image(v-else-if="taskType === 'practical'")
    svg.task__container-icon(
      viewBox="0 0 512.001 512.001",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/settings.svg#settings`)
  .task__container-image(v-else-if="taskType === 'visual'")
    svg.task__container-icon(
      viewBox="0 0 24.001 24.001",
      preserveAspectRatio="none"
    )
      use(xlink:href=`../../images/icons/3d.svg#3d`)
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
  app-link.task__container-send(send, :link="link", :external="external" :task="task")
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
      default: "intelligent",
    },
    link: {
      type: String,
      default: "/",
    },
    external: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object,
      default: null
    }
  },
};
</script>

<style lang="scss" scoped src="./homeTask.scss"></style>
