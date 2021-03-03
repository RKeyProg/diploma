<template lang="pug">
.account-container
  homeHeader(activePage="1")
  personal-data-header(:user="user")
  .for-student(v-if="user.post == 'Учащийся'")
    personal-data-current-practice.personal-data__row
    personal-data-current-task.personal-data__row
    personal-data-changes.personal-data__row
  .for-admin(v-else-if="user.post == 'Администратор'")
    personal-data-management(:userPost="user.post")
  .for-teacher(v-else-if="user.post == 'Преподаватель'")
    personal-data-current-practice.personal-data__row
    personal-data-management(:userPost="user.post")
</template>

<script>
import homeHeader from "../components/homeHeader";
import personalDataHeader from "../components/personalDataHeader";
import personalDataCurrentPractice from "../components/personalDataCurrentPractice";
import personalDataCurrentTask from "../components/personalDataCurrentTask";
import personalDataChanges from "../components/personalDataChanges";
import personalDataManagement from "../components/personalDataManagement";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
    personalDataHeader,
    personalDataCurrentPractice,
    personalDataCurrentTask,
    personalDataChanges,
    personalDataManagement
  },
  data() {
    return {
      user: {
        post: "Преподаватель",
        name: "Радкевич Кирилл Александрович",
        group: "8к2411",
        phone: "+375 (29) 183-38-27",
        mail: "RKey_rs@mail.ru"
      }
    };
  }
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
