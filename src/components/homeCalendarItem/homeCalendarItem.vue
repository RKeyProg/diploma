<template lang="pug">
	div(
		:class="['day', {'active' : !isActive}]"
		@click="changeActive"
	)
		.date
			.number {{day}}
			div(v-if="!isActive").month Сентября
		transition(name="fade")
			div(v-if="!isActive").text Совершенствование навыков печати. Изучение строения ЭВМ
		div
			div(v-if="!isActive").day-name {{dayName}}
			div(v-else).day-name {{getShortDayName}}
</template>

<script>
export default {
	props: {
		day: String,
		dayName: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			isActive: {
				type: Boolean,
				default: false,
			},
		}
	},
	methods: {
		changeActive() {
			this.isActive = !this.isActive;
		}
	},
	computed: {
		getShortDayName() {
			return this.dayName.slice(0, 3);
		}
	}
}
</script>

<style lang="scss" scoped src="./homeCalendarItem.scss"></style>