<template lang="pug">
	router-link(to="/about").main-header__user
		.main-header__user-data
			.main-header__user-name Кирилл Радкевич
			.main-header__user-group 8к2411
		avatar
</template>

<script>
import avatar from '../avatar';
export default {
	components: {
		avatar
	}
}
</script>

<style lang="scss" scoped src="./user.scss"></style>