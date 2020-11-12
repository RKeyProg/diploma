<template lang="pug">
	.container
		ul.list
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

<style lang="scss" scoped>
.list {
	overflow: hidden;
}

.item {
	margin-right: 20px;

	&:last-child {
		margin-right: 0;
	}
}
</style>