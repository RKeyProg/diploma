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
	a(href="#").task__container-send
		svg.task__container-send-icon(
			viewBox="0 0 512.001 512.001",
			preserveAspectRatio="none"
		)
			use(xlink:href=`../../images/icons/send.svg#send`)
</template>

<script>
export default {
  props: {
    add: {
      type: Boolean,
      default: false
    },
    taskType: {
      type: String,
      default: "brain"
    }
  },
  methods: {
    addTask() {
      console.log("Add new task");
    }
  }
};
</script>

<style lang="scss" scoped src="./homeTask.scss"></style>
