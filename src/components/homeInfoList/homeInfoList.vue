<template lang="pug">
	ul.list
		li.item
			homeInfoItem(date="13.11.2020" :text="text")
		li.item
			homeInfoItem(date="13.11.2020" :text="text")
		li.item
			homeInfoItem(date="13.11.2020" :text="text")
		li.item
			homeInfoItem(date="13.11.2020" :text="text")
		li.item
			homeInfoItem(date="13.11.2020" :text="text")
</template>

<script>
import homeInfoItem from '../homeInfoItem';
export default {
	data() {
		return {
			text: "Изменение аудитории. Практика будет проходить в 7 корпусе БГУИР, 702 аудитория",
		}
	},
	components: {
		homeInfoItem
	}
}
</script>

<style lang="scss" scoped>
.list {
	overflow: hidden;
}
</style>