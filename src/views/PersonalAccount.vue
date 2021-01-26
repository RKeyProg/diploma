<template lang="pug">
.account-container
  homeHeader(activePage="1")
  personalDataHeader(:user="user")
  personalDataCurrentPractice.personal-dat__row
  personalDataCurrentTask.personal-dat__row
</template>

<script>
import homeHeader from "../components/homeHeader";
import personalDataHeader from "../components/personalDataHeader";
import personalDataCurrentPractice from "../components/personalDataCurrentPractice";
import personalDataCurrentTask from "../components/personalDataCurrentTask";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
    personalDataHeader,
    personalDataCurrentPractice,
    personalDataCurrentTask
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

.personal-dat__row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
