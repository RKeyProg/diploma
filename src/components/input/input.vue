<template lang="pug">
label
  input(
    :placeholder="title",
    v-bind="$attrs",
    :type="fieldType",
    :class="['input', { checkbox: fieldType === 'checkBox', error: !!errorMessage, 'input_size_small': smallSize }]",
    :value="value",
    @input="$emit('input', $event.target.value)"
  )
  .input__error-message {{ errorMessage }}

  div(v-if="fieldType === 'checkBox'").check-input
    span.check-picture(
      :value="value",
      @input="$emit('input', $event.target.value)"
    )
      svg.check-picture_active(
        viewBox="0 0 352.62 352.62",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/checkMark.svg#check`)
    .check-text {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    fieldType: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: String,
      default: ""
    },
    smallSize: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped src="./input.scss"></style>
