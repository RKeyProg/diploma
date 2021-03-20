<template lang="pug">
.current-task
  section-title(title="Текущее задание")
  div(v-if="this.activeTask.id").current-task__data
    .current-task__title {{ activeTask.name }}
    app-link(send, :link="link" @handleClick="setTask")
  div(v-else).current-task__empty Нет активного задания
</template>

<script>
import sectionTitle from "../sectionTitle";
import appLink from "../appLink";
import { mapState, mapActions } from "vuex";

export default {
  name: "personalDataCurrentTask",
  components: {
    sectionTitle,
    appLink,
  },
  props: {
    user: Object,
    activeTask: Object,
  },
  data() {
    return {
      link: "/task",
    };
  },
  methods: {
    ...mapActions({
      setCurrentTask: "task/setCurrentTask",
      changeIsTeacherClick: "task/changeIsTeacherClick",
    }),
    setTask() {
      if (this.post === "teacher") {
        this.changeIsTeacherClick();
      }

      this.$router.replace(this.link);
      this.setCurrentTask(this.activeTask);
    }
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
    })
  },
};
</script>

<style lang="scss" scoped src="./personalDataCurrentTask.scss"></style>
