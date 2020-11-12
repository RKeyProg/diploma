<template lang="pug">
	.container
		.date {{date}}
		.text {{text}}
</template>

<script>
export default {
	props: {
		date: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss" scoped src="./homeInfoItem.scss"></style>