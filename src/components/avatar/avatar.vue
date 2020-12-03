<template lang="pug">
	.photo
		img(src="../../images/content/avatar.jpg").photo-img
		div(v-show="active").photo-active
</template>

<script>
export default {
	props: {
		active: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss" scoped src="./avatar.scss"></style>