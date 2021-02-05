<template lang="pug">
.changes
  section-title(title="Последние изменения")
  personal-data-changes-list
</template>

<script>
import sectionTitle from "../sectionTitle";
import personalDataChangesList from "../personalDataChangesList";

export default {
  components: {
    sectionTitle,
    personalDataChangesList
  }
};
</script>

<style lang="scss" scoped src="./personalDataChanges"></style>
