<template lang="pug">
.task-3d
  homeHeader(activePage="2")
  .pc
    .pc__component-info
      .pc__component-name {{ currentComponent.name }}
      .pc__component-desc {{ currentComponent.desc }}
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
      app-btn(text="Проверить совместимость")
  //- visualization
</template>

<script>
import homeHeader from "../components/homeHeader";
import appBtn from "../components/button";
import visualization from "../components/visualization";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

export default {
  name: "Visualization",
  components: {
    homeHeader,
    visualization,
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
  },
};
</script>

<style lang="scss" scoped>
.task-3d {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pc {
  padding: 0 2.08vw;
  display: flex;
  justify-content: space-between;
}

.pc__component-info {
  width: 30%;
  padding: 20px 25px 20px 0;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    background: #bdbdbd;
    width: 2px;
    height: 100%;
  }
}

.pc__component-name {
  font-weight: 500;
  font-size: 26px;
  line-height: 28px;
  color: #212121;
  margin-bottom: 20px;
}

.pc__component-desc {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #757575;
  margin-bottom: 40px;
}

.pc__right-column {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.pc__components-list {
  display: flex;
  flex-wrap: wrap;
  justify-self: flex-start;
  margin-bottom: -15px;
}

.pc__components-item {
  margin-right: 15px;
  margin-bottom: 15px;

  & button {
    background: #3f51b5;
    border-radius: 15px;
    padding: 7px 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    letter-spacing: 0.05em;
    transition: background .3s ease;

    &.active {
      background: #ff4081;
    }
  }
}
</style>

<style lang="scss">
.vs__dropdown-toggle {
  background: #fff;
}

.vs__open-indicator,
.vs__clear > svg {
  width: 16px;
}

.vs__actions {
  padding: 0;
  padding-top: 5px;
  padding-right: 15px;
  align-self: center;
}

.vs__dropdown-toggle {
  border: 1px solid #bdbdbd;
  border-radius: 15px;
}

.vs__search,
.vs__search:focus,
.vs__selected {
  padding: 4px 0 4px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #757575;
}

.vs__dropdown-option {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #757575;
}

.vs__dropdown-option--highlight {
  background: #3f51b5;
  color: #fff;
}
</style>
