<template lang="pug">
	.container
		ul.list
			li.item
				task(add)
			li.item
				task
			li.item
				task
			li.item
				task
			li.item
				task
			li.item
				task
			li.item
				task
</template>

<script>
import task from "../homeTask";
export default {
	components: {
		task
	}
}
</script>

<style lang="scss" scoped src="./homeTaskList.scss"></style>