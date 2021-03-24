<template lang="pug">
.home-task__wrap
  button(:class="['task__container', active]", @click="handleClick")
    .task__container-image(v-if="taskType === 'intelligent'")
      svg.task__container-icon(
        viewBox="0 0 512.001 512.001",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/brain.svg#brain`)
    .task__container-image(v-else-if="taskType === 'practical'")
      svg.task__container-icon(
        viewBox="0 0 512.001 512.001",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/settings.svg#settings`)
    .task__container-image(v-else-if="taskType === 'visual'")
      svg.task__container-icon(
        viewBox="0 0 24.001 24.001",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/3d.svg#3d`)
    .task__container-image(v-else-if="taskType === 'clipboard'")
      svg.task__container-icon(
        viewBox="0 0 512 512",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/clipboard.svg#clipboard`)
    .task__container-image(v-else-if="taskType === 'manual'")
      svg.task__container-icon(
        viewBox="0 0 512 512",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/manual.svg#manual`)
    .task__container-image(v-else-if="taskType === 'letter'")
      svg.task__container-icon(
        viewBox="0 0 512 512",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/letter.svg#letter`)
    .task__container-image(v-else-if="taskType === 'contract'")
      svg.task__container-icon(
        viewBox="0 0 512 512",
        preserveAspectRatio="none"
      )
        use(xlink:href=`../../images/icons/contract.svg#contract`)
    .task__container-title {{ taskName }}
    app-link.task__container-send(
      send,
      :link="link",
      :external="external",
      @handleClick="handleClick"
    )
  btn.task__delete(
    v-if="post === 'teacher'",
    type="Delete",
    @wasClick="taskDelete"
  )
</template>

<script>
import $axios from "../../request";
import appLink from "../appLink";
import btn from "../button";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    appLink,
    btn,
  },
  props: {
    add: {
      type: Boolean,
      default: false,
    },
    taskName: {
      type: String,
      default: "",
    },
    taskType: {
      type: String,
      default: "intelligent",
    },
    link: {
      type: String,
      default: "/",
    },
    external: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object,
      default: null,
    },
    active: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
    }),
    ...mapState("task", {
      activeTask: (state) => state.activeTask,
      currentTask: (state) => state.currentTask,
    }),
  },
  methods: {
    ...mapActions({
      setCurrentTask: "task/setCurrentTask",
      showTooltip: "tooltips/show",
    }),
    handleClick() {
      if (
        this.taskType === "visual" &&
        this.activeTask &&
        this.activeTask.type === "visual" &&
        this.post === "student"
      ) {
        this.$router.replace("/visualizationTask");
      } else {
        this.$router.replace(this.link);
        this.setCurrentTask(this.task);
      }
    },
    async taskDelete() {
      try {
        const response = await $axios.post("/task/delete/", this.task);

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });

        this.$emit("deleteTask");
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./homeTask.scss"></style>

<style lang="scss">
.task__container.active {
  & .link-send__img {
    fill: #fff !important;
  }
}

.task__container.answered {
  & .link-send__img {
    fill: #fff !important;
  }
}
</style>