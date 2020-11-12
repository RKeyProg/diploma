<template lang="pug">
	.header
		.header__container
			homeHeaderList
			user
</template>

<script>
import user from '../user';
import homeHeaderList from '../homeHeaderList';
export default {
	name: "homeHeader",
	components: {
		user, homeHeaderList
	}
}
</script>

<style lang="scss" scoped src="./homeHeader.scss"></style>