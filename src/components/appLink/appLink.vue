<template lang="pug">
a.link-send(v-if="send && !external", @click.prevent="setTask")
  svg.link-send__img(viewBox="0 0 485.725 485.725")
    use(xlink:href=`../../images/icons/send.svg#send`)
a.link-send(
  v-else-if="send && external",
  target="_blank",
  :href="link",
  @click="handleClick"
)
  svg.link-send__img(viewBox="0 0 485.725 485.725")
    use(xlink:href=`../../images/icons/send.svg#send`)
router-link.link(v-else, :to="link") {{ text }}
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    link: {
      type: String,
      default: "/",
    },
    send: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    external: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions({
      setCurrentTask: "task/setCurrentTask",
    }),
    handleClick() {
      console.log("asdasd");
    },
    async setTask() {
      console.log('asdas');
      this.$router.replace(this.link);
      await this.setCurrentTask(this.task);
    }
  },
};
</script>

<style lang="scss" scoped src="./appLink.scss"></style>
