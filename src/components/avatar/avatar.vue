<template lang="pug">
div.photo(v-if="photo")
  //- img.photo-img(:src="this.photo")
  img.photo-img(src="../../images/content/avatar.jpg")
  .photo-active(v-show="active")
div.photo__empty(v-else)
  svg.photo__empty-icon(
    viewBox="0 0 512.001 512.001",
    preserveAspectRatio="none"
  )
    use(xlink:href=`../../images/icons/camera.svg#camera`)
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
