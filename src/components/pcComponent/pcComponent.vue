<template lang="pug">
.component
  .component__visual
    visualization(className="canvas1", :objectWay="objectWay.motherboard")
  .component__control
    app-btn(@handleClick="$emit('changeComponent')", text="Назад")
</template>

<script>
import visualization from "../visualization";
import appBtn from "../button";

export default {
  components: {
    visualization,
    appBtn,
  },
  data() {
    return {
      objectWay: {
        motherboard: [
          "Motherboard/Motherboard.mtl",
          "Motherboard/Motherboard.obj",
        ],
      },
    };
  },
};
</script>

<style lang="scss" src="./pcComponent.scss" scoped></style>
