<template lang="pug">
.task
  home-header(activePage="2")
  .task__title {{ task.name }}
  current-task
</template>

<script>
import homeHeader from "../components/homeHeader";
import currentTask from "../components/currentTask";
import { mapState } from "vuex";

export default {
  name: "Task",
  components: {
    homeHeader,
    currentTask
  },
  computed: {
    ...mapState("task", {
      task: (state) => state.currentTask,
    })
  },
};
</script>

<style lang="scss" scoped>
@import "../mixins.scss";

.task {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.task__title {
  padding: 0 2.08vw;
  margin: 0 auto 15px;
  font-weight: 500;
  font-size: 24px;
  color: #212121;

  @include desktop {
    font-size: 22px;
  }

  @include tablets {
    font-size: 18px;
  }

  @include phones {
    font-size: 16px;
  }
}
</style>
