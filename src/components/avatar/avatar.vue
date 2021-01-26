<template lang="pug">
.photo
  img.photo-img(src="../../images/content/avatar.jpg")
  div.photo-active(v-show="active")
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
