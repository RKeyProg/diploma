<template lang="pug">
.pc
  .pc__component-info
    .pc__component-name {{ currentComponent.name }}
    .pc__component-desc {{ currentComponent.desc }}
    app-btn.pc__component-open-btn(
      @handleClick="checkComponent",
      text="Открыть 3D модель"
    )
    v-select(
      :options="currentComponent.examples",
      :placeholder="currentComponent.placeholder"
    )
  .pc__right-column
    ul.pc__components-list
      li.pc__components-item(v-for="component in componentsList")
        button(
          @click.prevent="choiceComponent(component.id)",
          :class="{ active: component.isActive }"
        ) {{ component.name }}
    app-btn(@handleClick="checkCompatibility", text="Проверить совместимость")
</template>

<script>
import appBtn from "../button";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
    appBtn,
  },
  data() {
    return {
      currentComponent: {
        name: "Материнская плата",
        desc:
          "Печатная плата, являющаяся основой построения модульного устройства, например - компьютера. Системная плата содержит основную часть устройства, процессор и оперативную память дополнительные же или взаимозаменяемые платы называются платами расширений.",
        examples: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
        ],
        placeholder: "Выберите материнскую плату",
      },
      componentsList: [
        {
          id: 1,
          name: "Материнская плата",
          isActive: true,
        },
        {
          id: 2,
          name: "Оперативная память",
          isActive: false,
        },
        {
          id: 3,
          name: "Процессор",
          isActive: false,
        },
        {
          id: 4,
          name: "Блок питания",
          isActive: false,
        },
        {
          id: 5,
          name: "Блок питания",
          isActive: false,
        },
        {
          id: 6,
          name: "Блок питания",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    choiceComponent(id) {
      this.componentsList.forEach((el) => {
        el.isActive = false;
      });

      this.componentsList[id - 1].isActive = true;
    },
    checkCompatibility() {
      this.$emit('checkCompatibility');
    },
    checkComponent() {
      this.$emit('checkComponent');
    },
  },
};
</script>

<style lang="scss" src="./pcTask.scss" scoped></style>

