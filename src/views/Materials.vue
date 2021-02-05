<template lang="pug">
.materials-container
  homeHeader(activePage="3")
</template>

<script>
import homeHeader from "../components/homeHeader";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.materials-container {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
