<template lang="pug">
div(:class="['day', { active: !isActive }]", @click="changeActive")
  .date
    .number {{ day }}
    .month(v-if="!isActive") Сентября
  transition(name="fade")
    .text(v-if="!isActive") Совершенствование навыков печати. Изучение строения ЭВМ
  div
    .day-name(v-if="!isActive") {{ dayName }}
    .day-name(v-else) {{ getShortDayName }}
</template>

<script>
export default {
  props: {
    day: String,
    dayName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: {
        type: Boolean,
        default: false,
      },
    };
  },
  methods: {
    changeActive(e) {
      this.$emit("changeActive", e);
      this.isActive = !this.isActive;
    }
  },
  computed: {
    getShortDayName() {
      return this.dayName.slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped src="./homeCalendarItem.scss"></style>
