<template lang="pug">
button.btn(v-if="type === 'Text'", @click="$emit('handleClick')" :disabled="disabled") {{ text }}
button.btn-type(
  v-else-if="type === 'Edit'",
  @click.prevent="editClick"
)
  svg.btn-type__img(viewBox="0 0 528.899 528.899")
    use(xlink:href=`../../images/icons/pencil.svg#pencil`)
button.btn-type(
  v-else-if="type === 'Submit'"
  type="submit"
)
  svg.btn-type__img(viewBox="0 0 352.62 352.62")
    use(xlink:href=`../../images/icons/checkMark.svg#check`)
button.btn-type.btn-type_exit(
  v-else-if="type === 'Close'",
  @click.prevent="editClick"
)
  svg.btn-type__img(viewBox="0 0 329.26933 329")
    use(xlink:href=`../../images/icons/close.svg#close`)
button.btn-type.btn-type_delete(
  v-else-if="type === 'Delete'",
  @click.prevent="editClick"
)
  svg.btn-type__img(viewBox="0 0 329.26933 329")
    use(xlink:href=`../../images/icons/close.svg#close`)
button.btn-type.btn-type_exit(v-else-if="type === 'Exit'", @click.prevent="logout")
  svg.btn-type__img(viewBox="0 0 512.001 512.001")
    use(xlink:href=`../../images/icons/logout.svg#logout`)
input.btn-file-input(v-else-if="type === 'File' && !isMultiple" type="file" v-on="$listeners")
input.btn-file-input(v-else-if="type === 'File' && isMultiple" type="file" multiple v-on="$listeners")
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
    isEdit: {
      type: Boolean,
      default: false,
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      logout: "user/logout",
    }),
    editClick() {
      this.$emit("wasClick");
    },
  },
};
</script>

<style lang="scss" scoped src="./button.scss"></style>
