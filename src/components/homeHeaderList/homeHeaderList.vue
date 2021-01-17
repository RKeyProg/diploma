<template lang="pug">
nav.nav
  ul.list
    li(
      v-for="item in items",
      :key="item.id",
      :class="['item', { active: +activePage === item.id}]"
    )
      router-link.link(:to="item.page") {{ item.title }}
</template>

<script>
export default {
  props: {
    activePage: String
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Главная",
          active: false,
          page: "/"
        },
        {
          id: 2,
          title: "Задания",
          active: false,
          page: "/tasks"
        },
        {
          id: 3,
          title: "Материалы",
          active: false,
          page: "/materials"
        },
        {
          id: 4,
          title: "Методичка",
          active: false,
          page: "/manual"
        },
        {
          id: 5,
          title: "Контакты",
          active: false,
          page: "/contacts"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped src="./homeHeaderList.scss"></style>
