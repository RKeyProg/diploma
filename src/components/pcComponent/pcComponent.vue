<template lang="pug">
.component
  .component__visual
    visualization(
      className="canvas1",
      :objectWay="this.objectWay[this.object]"
    )
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
        motherboard: {
          name: "motherboard",
          mtl: "Motherboard/Motherboard.mtl",
          obj: "Motherboard/Motherboard.obj",
          color: 0xffffff,
          nameRus: "Материнская плата",
          compatibillity: "body",
        },
        CPU: {
          name: "CPU",
          mtl: "CPU/CPU.mtl",
          obj: "CPU/CPU.obj",
          color: 0x212121,
          nameRus: "Процессор",
          compatibillity: "motherboard",
        },
        powerBlock: {
          name: "powerBlock",
          mtl: "PowerBlock/block.mtl",
          obj: "PowerBlock/block.obj",
          color: 0xffffff,
          nameRus: "Блок питания",
          compatibillity: "motherboard",
        },
        videoCard: {
          name: "videoCard",
          mtl: "VideoCard/card.mtl",
          obj: "VideoCard/card.obj",
          color: 0xffffff,
          nameRus: "Видеокарта",
          compatibillity: "motherboard",
        },
        ram: {
          name: "ram",
          mtl: "RAM/RAM.mtl",
          obj: "RAM/RAM.obj",
          color: 0xffffff,
          nameRus: "Оперативная память",
          compatibillity: "motherboard",
        },
        body: {
          name: "body",
          mtl: "Body/Body.mtl",
          obj: "Body/Body.obj",
          color: 0xffffff,
          nameRus: "Корпус",
        },
      },
    };
  },
  props: {
    object: {
      type: String,
    },
  },
  watch: {
    object: function () {
      console.log(this.objectWay[this.object]);
    },
  },
};
</script>

<style lang="scss" src="./pcComponent.scss" scoped></style>

<style lang="scss">
.component__visual {
  & > .task-3d__container {
    height: 100% !important;
    padding: 0 2.08vw !important;
  }
}
</style>
