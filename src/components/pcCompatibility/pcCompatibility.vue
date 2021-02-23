<template lang="pug">
.pc-compatibility
  .pc-compatibility__inputs
    v-select.pc-compatibility__input(
      :options="examplesLeft",
      :placeholder="placeholderLeft",
      @input="selectedLeft"
    )
    .pc-compatibility__icon
      svg.link-send__img(viewBox="0 0 512 512")
        use(xlink:href=`../../images/icons/arrow.svg#arrow`)
    v-select.pc-compatibility__input(
      :options="examplesRight",
      :placeholder="placeholderRight",
      @input="selectedRight"
    )
  .pc-compatibility__visualizations
    visualization(className="canvas1", :objectWay="this.leftObject")
    visualization(className="canvas2", :objectWay="this.rightObject")
  .pc-compatibility__controls
    app-btn(@handleClick="connectComponents", text="Совместить")
    app-btn(@handleClick="$emit('changeCompatibility')", text="Назад")
</template>

<script>
import vSelect from "vue-select";
import appBtn from "../button";
import visualization from "../visualization";

import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
    visualization,
    appBtn,
  },
  data() {
    return {
      currentComponent: {
        name: "Материнская плата",
        desc:
          "Печатная плата, являющаяся основой построения модульного устройства, например - компьютера. Системная плата содержит основную часть устройства, процессор и оперативную память дополнительные же или взаимозаменяемые платы называются платами расширений.",
      },
      examplesLeft: [
        "Материнская плата",
        "Процессор",
        "Видеокарта",
        "Оперативная память",
        "Блок питания",
      ],
      examplesRight: [
        "Материнская плата",
        "Процессор",
        "Видеокарта",
        "Оперативная память",
        "Блок питания",
        "Корпус",
      ],
      leftObject: [],
      rightObject: [],
      placeholderLeft: "Что помещаем",
      placeholderRight: "Куда помещаем",
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
  methods: {
    connectComponents() {
      console.log("connect");
    },
    selectedLeft(val) {
      for (let component in this.objectWay) {
        if (this.objectWay[component][3] == val) {
          this.leftObject = this.objectWay[component];
        }
      }
    },
    selectedRight(val) {
      for (let component in this.objectWay) {
        if (this.objectWay[component][3] == val) {
          this.rightObject = this.objectWay[component];
        }
      }
    },
  },
};
</script>

<style lang="scss" src="./pcCompatibility.scss" scoped></style>
