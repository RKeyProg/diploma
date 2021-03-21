<template lang="pug">
.pc
  .pc__component-info(
    v-for="component in componentsList",
    v-if="component.isActive"
  )
    .pc__component-name {{ component.name }}
    .pc__component-desc {{ component.desc }}
    app-btn.pc__component-open-btn(
      @handleClick="checkComponent",
      text="Открыть 3D модель"
    )
  .pc__right-column
    .component__content
      ul.pc__components-list
        li.pc__components-item(v-for="component in componentsList")
          button(
            @click.prevent="choiceComponent(component)",
            :class="{ active: component.isActive }"
          ) {{ component.name }}
      .specifications 
        .specification__pattern {{ activeComponent.specificationsPattern }}
        ul.pc__components-specifications-list
          li.pc__components-specifications-item(
            v-for="(specification, key) in activeComponent.specifications",
            :key="key"
          )
            button(
              @click.prevent="choiceSpecificationt(key)",
              :class="{ active: specification.isActive }"
            ) {{ specification.name }}
    app-btn(@handleClick="checkCompatibility", text="Проверить совместимость")
</template>

<script>
import appBtn from "../button";
import vSelect from "vue-select";
import $axios from "../../request";
import { mapState } from "vuex";

import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
    appBtn,
  },
  data() {
    return {
      activeComponent: {},
    };
  },
  computed: {
    ...mapState("visual", {
      componentsList: (state) => state.componentsList,
    }),
  },
  methods: {
    async choiceComponent(comp) {
      this.getSpecifications(comp);

      this.componentsList.forEach((el) => {
        el.isActive = false;
      });

      this.componentsList[comp.id - 1].isActive = true;

      this.activeComponent = this.componentsList[comp.id - 1];
    },
    checkCompatibility() {
      let specifications = {
        id_motherboard: "",
        id_cpu: "",
        id_ram: "",
        id_case: "",
        id_power_supply: "",
        id_graphics_card: "",
      };

      this.componentsList.forEach((el) => {
        if (el.id === 1) {
          specifications.id_motherboard = el.acitveSpecificationId;
        } else if (el.id === 2) {
          specifications.id_ram = el.acitveSpecificationId;
        } else if (el.id === 3) {
          specifications.id_cpu = el.acitveSpecificationId;
        } else if (el.id === 4) {
          specifications.id_power_supply = el.acitveSpecificationId;
        } else if (el.id === 5) {
          specifications.id_graphics_card = el.acitveSpecificationId;
        } else if (el.id === 6) {
          specifications.id_case = el.acitveSpecificationId;
        }
      });

      this.$emit("checkCompatibility", specifications);
    },
    checkComponent() {
      this.componentsList.forEach((el) => {
        if (el.isActive) {
          this.$emit("checkComponent", el.object);
        }
      });
    },
    async getSpecifications(comp) {
      if (Object.keys(comp.specifications).length === 0) {
        const response = await $axios.get(comp.request);

        let specifications = {};
        let specRow = "";

        for (const specId in response.data) {
          for (const param in response.data[specId]) {
            if (param !== "id") {
              specRow += `${response.data[specId][param]} / `;
            }
          }
          specifications[response.data[specId].id] = {
            name: specRow.substring(0, specRow.length - 2),
            isActive: false,
          };
          specRow = "";
        }

        comp.specifications = specifications;
      }

      this.activeComponent = comp;
    },
    choiceSpecificationt(key) {
      for (const spec in this.activeComponent.specifications) {
        this.activeComponent.specifications[spec].isActive = false;
      }

      this.activeComponent.specifications[key].isActive = true;

      this.componentsList.forEach((el) => {
        if (el.id === this.activeComponent.id) {
          el.acitveSpecificationId = key;
        }
      });
    },
  },
  beforeMount() {
    this.componentsList.forEach((el) => {
      if (el.isActive) {
        this.getSpecifications(el);
      }
    });
  },
};
</script>

<style lang="scss" src="./pcTask.scss" scoped></style>
