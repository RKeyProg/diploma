<template lang="pug">
.account-container
  homeHeader(activePage="4")
  personal-data-header(:user="currentStudent", post="Учащийся", noControls)
  .for-student
    personal-data-current-practice.personal-data__row
    personal-data-current-task(:activeTask="thisStudentActiveTask").personal-data__row
</template>

<script>
import homeHeader from "../components/homeHeader";
import personalDataHeader from "../components/personalDataHeader";
import personalDataCurrentPractice from "../components/personalDataCurrentPractice";
import personalDataCurrentTask from "../components/personalDataCurrentTask";
import personalDataChanges from "../components/personalDataChanges";
import { mapState } from "vuex";
import $axios from "../request";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
    personalDataHeader,
    personalDataCurrentPractice,
    personalDataCurrentTask,
    personalDataChanges,
  },
  data() {
    return {
      thisStudentActiveTask: {},
    }
  },
  computed: {
    ...mapState("student", {
      currentStudent: (state) => state.currentStudent,
    }),
  },
  async mounted() {
    const activeTask = await $axios.get(
      `/task/active/${this.currentStudent.id}`
    );

    if (activeTask.data.length) {
      this.thisStudentActiveTask = activeTask.data[0];
    }
  },
};
</script>

<style lang="scss" scoped>
.account-container {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.personal-data__row {
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
