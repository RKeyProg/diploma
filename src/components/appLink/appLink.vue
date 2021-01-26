<template lang="pug">
router-link(v-if="send", :to="link").link-send
  svg.link-send__img(
    viewBox="0 0 485.725 485.725"
  )
    use(xlink:href=`../../images/icons/send.svg#send`)
router-link(v-else :to="link").link {{ text }}
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "/",
    },
    send: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped src="./appLink.scss"></style>
