<template lang="pug">
.student
  avatar.photo(photo="have")
  .student__name {{ this.name }}
</template>

<script>
import avatar from "../avatar";

export default {
  components: {
    avatar,
  },
  props: {
    name: {
      type: String,
      default: "Учащийся",
    },
  },
};
</script>

<style lang="scss" src="./student.scss" scoped></style>