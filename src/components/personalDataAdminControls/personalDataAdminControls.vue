<template lang="pug">
.controls
  .controls__btns
		app-btn(text="Добавить ученика")
</template>

<script>
import appBtn from "../button";

export default {
  components: {
    appBtn,
  },
};
</script>

<style lang="scss" src="./adminControls.scss" scoped></style>
