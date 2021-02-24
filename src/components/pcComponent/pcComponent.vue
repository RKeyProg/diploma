<template lang="pug">
.component
  .component__visual
    visualization(className="canvas1", :objectWay="objectWay[this.component]")
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
          0xffffff,
          "Материнская плата",
        ],
        CPU: ["CPU/CPU.mtl", "CPU/CPU.obj", 0x212121, "Процессор"],
        powerBlock: [
          "PowerBlock/block.mtl",
          "PowerBlock/block.obj",
          0xffffff,
          "Блок питания",
        ],
        videoCard: [
          "VideoCard/card.mtl",
          "VideoCard/card.obj",
          0xffffff,
          "Видеокарта",
        ],
        ram: ["RAM/RAM.mtl", "RAM/RAM.obj", 0xffffff, "Оперативная память"],
        body: ["Body/Body.mtl", "Body/Body.obj", 0xffffff, "Корпус"],
      },
    };
  },
  props: {
    component: String,
  }
};
</script>

<style lang="scss" src="./pcComponent.scss" scoped></style>
