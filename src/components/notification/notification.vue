<template lang="pug">
div(:class="['inner-tooltip-container', type]")
  .tooltip__text {{ text }}
  button.tooltip__close(v-on="$listeners")
    svg.btn-type__img(viewBox="0 0 329.26933 329")
      use(xlink:href=`../../images/icons/close.svg#close`)
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "success",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped src="./notification.scss"></style>