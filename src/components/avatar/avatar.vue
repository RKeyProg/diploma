<template lang="pug">
.photo(v-if="cover")
  //- img.photo-img(:src="this.photo")
  img.photo-img(:src="cover")
.photo__empty(v-else)
  svg.photo__empty-icon(
    viewBox="0 0 512.001 512.001",
    preserveAspectRatio="none"
  )
    use(xlink:href=`../../images/icons/camera.svg#camera`)
</template>

<script>
import store from "../../store";

export default {
  props: {
    photo: {
      type: String,
      default: "",
    },
  },
  computed: {
    cover() {
      if (store.state.user.user.photo) {
        return `http://172.20.10.4:8000/${store.state.user.user.photo}`;
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
