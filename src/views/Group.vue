<template lang="pug">
.group
  homeHeader(activePage="4")
  student-list(v-if="this.post !== 'admin'" :groupName="groupName")
  group-list(v-else)
</template>

<script>
import { mapState } from "vuex";
import homeHeader from "../components/homeHeader";
import studentList from "../components/studentList";
import groupList from "../components/groupList";

export default {
  name: "Home",
  components: {
    homeHeader,
    studentList,
    groupList
  },
  data() {
    return {
      students: [],
    };
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
      groupName: (state) => state.user.id_group,
    }),
  },
};
</script>

<style lang="scss" scoped>
.group {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
