<template lang="pug">
.contacts-container
  homeHeader(activePage="5")
  contacts-list
</template>

<script>
import homeHeader from "../components/homeHeader";
import contactsList from "../components/contactsList";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
    contactsList,
  },
  data() {
    return {
      user: {
        name: "Радкевич Кирилл Александрович",
        group: "8к2411",
        phone: "+375 (29) 183-38-27",
        mail: "RKey_rs@mail.ru",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.contacts-container {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
