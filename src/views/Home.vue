<template lang="pug">
.home
  homeHeader(activePage="1")
  homeTaskList
  homeInfo
  homeCelendar
</template>

<script>
import homeHeader from "../components/homeHeader";
import homeTaskList from "../components/homeTaskList";
import homeInfo from "../components/homeInfo";
import homeCelendar from "../components/homeСalendar";
export default {
  name: "Home",
  components: {
    homeHeader,
    homeTaskList,
    homeInfo,
    homeCelendar
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 10;
}

.home {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
</style>
