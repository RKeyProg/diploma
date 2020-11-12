<template lang="pug">
	.info
		sectionTitle(title="Объявления").title
		homeInfoList
</template>

<script>
import sectionTitle from '../sectionTitle';
import homeInfoList from '../homeInfoList';
export default {
	components: {
		sectionTitle, homeInfoList
	}
}
</script>

<style lang="scss" scoped>
.info {
	margin-bottom: 20px;
}
</style>