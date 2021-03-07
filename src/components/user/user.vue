<template lang="pug">
router-link.main-header__user(to="/personalAccount")
  .main-header__user-data
    .main-header__user-name {{ getUserName }}
    .main-header__user-group {{ getUserPost }}
  avatar.photo
</template>

<script>
import avatar from "../avatar";
import store from "../../store";

export default {
  components: {
    avatar,
  },
  computed: {
    getUserName() {
      const user = store.state.user.user;

      return `${user.name} ${user.patronymic}`;
    },
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
    }
  },
};
</script>

<style lang="scss" scoped src="./user.scss"></style>
