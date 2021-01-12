<template lang="pug">
.tasks
  homeHeader(activePage="2")
</template>

<script>
import homeHeader from "../components/homeHeader";

export default {
  name: "Tasks",
  components: {
    homeHeader
  }
};
</script>

<style lang="scss" scoped>
.tasks {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
</style>
