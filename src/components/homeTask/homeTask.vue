<template lang="pug">
	div(
		v-if="add"
		@click="addTask"
	).task__container.task__container_add
	div(v-else).task__container
</template>

<script>
export default {
	props: {
		add: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		addTask() {
			console.log('Add new task');
		}
	}
}
</script>

<style lang="scss" scoped src="./homeTask.scss"></style>