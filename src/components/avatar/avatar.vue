<template lang="pug">
.photo(v-if="photo")
  img.photo-img(v-if="photo" :src="cover")
.photo__empty(v-else)
  svg.photo__empty-icon(
    viewBox="0 0 512.001 512.001",
    preserveAspectRatio="none"
  )
    use(xlink:href=`../../images/icons/camera.svg#camera`)
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      default: "",
    },
    user: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    cover() {
      return `http://172.20.10.4:8000/${this.photo}`;
    },
  },
};
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
