<template lang="pug">
.photo(v-if="photo || user")
  img.photo-img(v-if="photo" :src="coverWithPhoto")
  img.photo-img(v-else-if="user" :src="cover")
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
    user: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    cover() {
      if (store.state.user.user.photo) {
        return `http://172.20.10.4:8000/${store.state.user.user.photo}`;
      } else {
        return null;
      }
    },
    coverWithPhoto() {
      return `http://172.20.10.4:8000/${this.photo}`;
    }
  },
};
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
