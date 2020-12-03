<template lang="pug">
	ul.list
		li.item
			homeInfoItem(date="13.11.2020" :text="text")
		li.item
			homeInfoItem(date="13.11.2020" :text="text1")
		li.item
			homeInfoItem(date="13.11.2020" :text="text2")
		li.item
			homeInfoItem(date="13.11.2020" :text="text3")
		li.item
			homeInfoItem(date="13.11.2020" :text="text")
</template>

<script>
import homeInfoItem from '../homeInfoItem';
export default {
	data() {
		return {
			text: "Изменение аудитории. Практика будет проходить в 7 корпусе БГУИР, 702 аудитория",
			text1: "Изменение расписания. 20.09.2020 практика начинается с 13.55.",
			text2: "Объявление. До 20.09.2020 принести паспорта",
			text3: "Замена. 17.09.2020 занятия будет проводить Иванов Иван Иванович",
		}
	},
	components: {
		homeInfoItem
	}
}
</script>

<style lang="scss" scoped src="./homeInfoList.scss"></style>