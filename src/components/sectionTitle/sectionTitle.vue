<template lang="pug">
.title {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped src="./sectionTitle.scss"></style>
