<template lang="pug">
router-link.main-header__user(to="/personalAccount")
  .main-header__user-data
    .main-header__user-name Кирилл Радкевич
    .main-header__user-group Учащийся
  avatar(photo="have").photo
</template>

<script>
import avatar from "../avatar";
export default {
  components: {
    avatar
  },
};
</script>

<style lang="scss" scoped src="./user.scss"></style>
