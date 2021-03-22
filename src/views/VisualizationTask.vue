<template lang="pug">
.task-3d
  homeHeader(activePage="2")
  div(v-if="!isComplited")
    pc-task(
      v-if="!isCompatibility && !isComponent",
      @checkCompatibility="checkCompatibility",
      @checkComponent="checkComponent"
    )
    pc-compatibility(
      v-else-if="isCompatibility",
      @changeCompatibility="isCompatibility = false"
    )
    pc-component(
      :class="['component', { hidden: !isComponent }]",
      @changeComponent="isComponent = false",
      :object="this.currentComponent"
    )
  div.task__complited(v-else) Задание уже выполнено
</template>

<script>
import homeHeader from "../components/homeHeader";
import pcTask from "../components/pcTask";
import pcCompatibility from "../components/pcCompatibility";
import pcComponent from "../components/pcComponent";
import visualization from "../components/visualization";
import $axios from "../request";
import { mapState, mapActions } from "vuex";

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
    ...mapActions({
      showTooltip: "tooltips/show",
      setAnswerStatus: "task/setAnswerStatus",
    }),
    async checkCompatibility(specifications) {
      try {
        const response = await $axios.post("/task/pc/check", specifications);

        if (response.data.result === "true") {
          this.isCompatibility = true;

          this.showTooltip({
            text: response.data.message,
            type: "success",
          });
        } else {
          this.showTooltip({
            text: response.data.message,
            type: "error",
          });
        }
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    },
    checkComponent(componentName) {
      this.currentComponent = componentName;
      this.isComponent = true;
    },
    async isAnswerSend() {
      const response = await $axios.get(`/task/exist/pc/${this.userId}`);

      this.setAnswerStatus(response.data);
    }
  },
  computed: {
    ...mapState("task", {
      answerSendStatus: (state) => state.answerSendStatus,
    }),
    ...mapState("user", {
      userId: (state) => state.user.id,
    }),
    isComplited() {
      if (this.answerSendStatus) return true;

      return false;
    },
  },
  mounted() {
    this.isAnswerSend();
  }
};
</script>

<style lang="scss">
@import "../mixins.scss";

.vs__dropdown-toggle {
  background: #fff;
}

.vs__open-indicator,
.vs__clear > svg {
  width: 16px;

  @include desktop {
    width: 22px;
  }
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

  @include tablets {
    font-size: 12px;
    line-height: 16px;
  }
}

.vs__selected-options {
  flex-wrap: nowrap;
}

.vs__dropdown-option {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #757575;

  @include desktop {
    font-size: 14px;
  }

  @include tablets {
    font-size: 12px;
  }
}

.vs__dropdown-option--highlight {
  background: #3f51b5;
  color: #fff;
}
</style>


<style lang="scss" scoped>
@import "../mixins.scss";

.task-3d {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.component {
  &.hidden {
    display: none;
  }
}

.task__complited {
  padding: 30px 0;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  color: #212121;

  @include desktop {
    font-size: 16px;
  }

  @include tablets {
    font-size: 14px;
  }

  @include phones {
    font-size: 12px;
  }
}
</style>