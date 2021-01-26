<template lang="pug">
button.btn(v-if="type === 'Text'", :disabled="disabled") {{ text }}
button.btn-type(v-else-if="type === 'Edit'")
  svg.btn-type__img(viewBox="0 0 528.899 528.899")
    use(xlink:href=`../../images/icons/pencil.svg#pencil`)
button.btn-type.btn-type_exit(v-else-if="type === 'Exit'" @click="logout")
  svg.btn-type__img(viewBox="0 0 512.001 512.001")
    use(xlink:href=`../../images/icons/logout.svg#logout`)
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "Text",
    },
  },
  methods: {
    ...mapActions({
      logout: "user/logout",
    }),
  },
};
</script>

<style lang="scss" scoped src="./button.scss"></style>
