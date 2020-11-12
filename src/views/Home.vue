<template lang="pug">
  .home
    homeHeader
    homeTaskList
    homeInfo
</template>

<script>
import homeHeader from "../components/homeHeader";
import homeTaskList from "../components/homeTaskList";
import homeInfo from "../components/homeInfo";
export default {
  name: "Home",
  components: {
    homeHeader, homeTaskList, homeInfo
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 10;
}

.home {
  padding: 25px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>