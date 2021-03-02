<template lang="pug">
.header
  .header__container
    homeHeaderList(:activePage="activePage")
    user.user
</template>

<script>
import user from "../user";
import homeHeaderList from "../homeHeaderList";
export default {
  name: "homeHeader",
  props: {
    activePage: {
      type: String,
      default: "1"
    }
  },
  components: {
    user,
    homeHeaderList
  }
};
</script>

<style lang="scss" scoped src="./homeHeader.scss"></style>
