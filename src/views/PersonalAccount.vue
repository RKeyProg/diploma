<template lang="pug">
.account-container
  homeHeader(activePage="1")
  personalDataHeader(:user="user")
  personalDataCurrentPractice.personal-data__row
  personalDataCurrentTask.personal-data__row
  personalDataChanges.personal-data__row
</template>

<script>
import homeHeader from "../components/homeHeader";
import personalDataHeader from "../components/personalDataHeader";
import personalDataCurrentPractice from "../components/personalDataCurrentPractice";
import personalDataCurrentTask from "../components/personalDataCurrentTask";
import personalDataChanges from "../components/personalDataChanges";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
    personalDataHeader,
    personalDataCurrentPractice,
    personalDataCurrentTask,
    personalDataChanges
  },
  data() {
    return {
      user: {
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
  overflow: hidden;
}

.personal-data__row {
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
