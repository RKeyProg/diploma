<template lang="pug">
.task-3d
  homeHeader(activePage="2")
  pc-task(
    v-if="!isCompatibility && !isComponent",
    @checkCompatibility="checkCompatibility",
    @checkComponent="checkComponent"
  )
  pc-compatibility(
    v-else-if="isCompatibility",
    @changeCompatibility="isCompatibility = false"
  )
  pc-component(v-else-if="isComponent", @changeComponent="isComponent = false" :component="this.currentComponent")
</template>

<script>
import homeHeader from "../components/homeHeader";
import pcTask from "../components/pcTask";
import pcCompatibility from "../components/pcCompatibility";
import pcComponent from "../components/pcComponent";
import visualization from "../components/visualization";

export default {
  name: "Visualization",
  components: {
    homeHeader,
    visualization,
    pcTask,
    pcCompatibility,
    pcComponent,
  },
  data() {
    return {
      isCompatibility: false,
      isComponent: false,
      currentComponent: "",
    };
  },
  methods: {
    checkCompatibility() {
      this.isCompatibility = true;
    },
    checkComponent(componentName) {
      console.log(componentName);

      this.currentComponent = componentName;
      this.isComponent = true;
    },
  },
};
</script>

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
  padding-top: 3px;
  padding-right: 15px;
  align-self: center;
}

.vs__dropdown-toggle {
  padding: 0;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
}

.vs__search,
.vs__search:focus,
.vs__selected {
  padding: 2px 0 6px 15px;
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


<style lang="scss" scoped>
.task-3d {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>