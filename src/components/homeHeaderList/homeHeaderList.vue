<template lang="pug">
	nav.nav
		ul.list
			li(v-for="item in items" :key="item.id" :class="['item', {'active' : item.active}]")
				a(href="#").link {{item.title}}
</template>


<script>
export default {
	data() {
		return {
			items: [
				{
					id: 1,
					title: "Главная",
					active: true,
				}, 
				{
					id: 2,
					title: "Задания", 
					active: false,
				},
				{
					id: 3,
					title: "Материалы",
					active: false,
				},
				{
					id: 4,
					title: "Методичка",
					active: false,
				},
				{
					id: 5,
					title: "Контакты",
					active: false,
				}
			],
		}
	}
}
</script>

<style lang="scss" scoped src="./homeHeaderList.scss"></style>