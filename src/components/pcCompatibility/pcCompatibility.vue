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
import { mapActions } from "vuex";

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
      leftObject: {},
      rightObject: {},
      placeholderLeft: "Что помещаем",
      placeholderRight: "Куда помещаем",
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
  methods: {
    ...mapActions({
      showTooltip: "tooltips/show",
    }),
    connectComponents() {
      const leftObj = this.leftObject;
      const rightObj = this.rightObject;

      if (leftObj.compatibillity == rightObj.name) {
        const index = this.examplesLeft.indexOf(leftObj.nameRus);
        this.examplesLeft.splice(index, 1);

        this.showTooltip({
          text: "Компоненты успешно соединены",
          type: "success",
        });

        this.leftObject = {};
      } else {
        this.showTooltip({
          text: "Выбранные компоненты нельзя соединить. Попробуйте еще раз",
          type: "error",
        });
      }
    },
    selectedLeft(val) {
      for (let component in this.objectWay) {
        if (this.objectWay[component].nameRus == val) {
          this.leftObject = this.objectWay[component];
        }
      }
    },
    selectedRight(val) {
      for (let component in this.objectWay) {
        if (this.objectWay[component].nameRus == val) {
          this.rightObject = this.objectWay[component];
        }
      }
    },
  },
  watch: {
    examplesLeft: function () {
      if (!this.examplesLeft.length) {
        this.$router.replace("/tasks");

        this.showTooltip({
          text: "Задание выполнено успешно",
          type: "success",
        });
      }
    },
  },
};
</script>

<style lang="scss" src="./pcCompatibility.scss" scoped></style>
