<template lang="pug">
	button.btn {{text}}
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: ""
		}
	}
}
</script>

<style lang="scss" scoped src="./button.scss"></style>