<template lang="pug">
	router-link(to="/login").main-header__user
		.main-header__user-data
			.main-header__user-name Кирилл Радкевич
			.main-header__user-group 8к2411
		avatar(active)
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