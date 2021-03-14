<template lang="pug">
.account-container
  homeHeader(activePage="1")
  personal-data-header(:user="getUser" isUser :post="getUserPost")
  .for-student(v-if="getUserPost == 'Учащийся'")
    personal-data-current-practice.personal-data__row
    personal-data-current-task.personal-data__row
    //- personal-data-changes.personal-data__row
  .for-admin(v-else-if="getUserPost == 'Администратор'")
    personal-data-management(:userPost="getUserPost")
  .for-teacher(v-else-if="getUserPost == 'Преподаватель'")
    personal-data-current-practice.personal-data__row
    personal-data-management(:userPost="getUserPost")
</template>

<script>
import homeHeader from "../components/homeHeader";
import personalDataHeader from "../components/personalDataHeader";
import personalDataCurrentPractice from "../components/personalDataCurrentPractice";
import personalDataCurrentTask from "../components/personalDataCurrentTask";
import personalDataChanges from "../components/personalDataChanges";
import personalDataManagement from "../components/personalDataManagement";
import store from "../store";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
    personalDataHeader,
    personalDataCurrentPractice,
    personalDataCurrentTask,
    personalDataChanges,
    personalDataManagement,
  },
  computed: {
    getUserPost() {
      const post = store.getters["user/userGetPost"];
      let postName = "";

      if (post == "student") {
        postName = "Учащийся";
      } else if (post == "teacher") {
        postName = "Преподаватель";
      } else if (post == "admin") {
        postName = "Администратор";
      }

      return postName;
    },
    getUser() {
      return store.state.user.user;
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
