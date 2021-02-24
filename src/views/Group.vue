<template lang="pug">
.group
  homeHeader(activePage="4")
  student-list
</template>

<script>
import homeHeader from "../components/homeHeader";
import studentList from "../components/studentList";

export default {
  name: "Home",
  components: {
    homeHeader,
    studentList
  }
};
</script>

<style lang="scss" scoped>
.group {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
