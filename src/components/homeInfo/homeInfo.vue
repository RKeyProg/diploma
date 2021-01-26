<template lang="pug">
.info
  section-title(title="Объявления")
  home-info-list
</template>

<script>
import sectionTitle from "../sectionTitle";
import homeInfoList from "../homeInfoList";
export default {
  components: {
    sectionTitle,
    homeInfoList
  }
};
</script>

<style lang="scss" scoped src="./homeInfo.scss"></style>
