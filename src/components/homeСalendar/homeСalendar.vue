<template lang="pug">
	.calendar
		sectionTitle(title="Календарь")
		homeCalendarList
</template>

<script>
import sectionTitle from '../sectionTitle';
import homeCalendarList from '../homeCalendarlist';
export default {
	components: {
		sectionTitle, homeCalendarList
	}
}
</script>

<style lang="scss" scoped src="./homeСalendar.scss"></style>