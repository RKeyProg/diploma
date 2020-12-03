<template lang="pug">
	ul.list
		li.item
			homeCalendarItem(day="14" :day-name="dayName")
		li.item
			homeCalendarItem(:day="day" day-name="Понедельник")
		li.item
			homeCalendarItem(day="16" day-name="Вторник")
		li.item
			homeCalendarItem(day="17" day-name="Среда")
		li.item
			homeCalendarItem(day="18" day-name="Четверг")
		li.item
			homeCalendarItem(day="19" day-name="Пятница")
		li.item
			homeCalendarItem(day="20" day-name="Суббота")
		li.item
			homeCalendarItem(day="21" day-name="Всокресение")
		li.item
			homeCalendarItem(day="22" day-name="Понедельник")
		li.item
			homeCalendarItem(day="23" day-name="Вторник")
</template>

<script>
import homeCalendarItem from "../homeCalendarItem";
export default {
	components: {
		homeCalendarItem
	},
	data() {
		return {
			active: false,
			day: '15',
			dayName: "Воскресение"
		}
	}
}
</script>

<style lang="scss" scoped src="./homeCalendarList.scss"></style>