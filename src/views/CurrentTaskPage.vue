<template lang="pug">
.task
  home-header(activePage="2")
  .task__title Спроектируйте персональный компьютер
  current-task
</template>

<script>
import homeHeader from "../components/homeHeader";
import currentTask from "../components/currentTask";

export default {
  name: "Task",
  components: {
    homeHeader,
    currentTask
  },
};
</script>

<style lang="scss" scoped>
.task {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.task__title {
  margin: 0 auto 15px;
  font-weight: 500;
  font-size: 24px;
  color: #212121;
}
</style>
