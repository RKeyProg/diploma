<template lang="pug">
.container
  .date {{ date }}
  .text {{ text }}
  btn.info__delete(
    v-if="post === 'teacher'",
    type="Delete",
    @wasClick="infoDelete"
  )
</template>

<script>
import $axios from "../../request";
import { mapState, mapActions } from "vuex";
import btn from "../button";

export default {
  components: {
    btn,
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
    }),
  },
  props: {
    date: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions({
      showTooltip: "tooltips/show",
    }),
    async infoDelete() {
      try {
        let infoId = {
          id: this.id,
        }
        const response = await $axios.post("/info/delete/", infoId);

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });

        this.$emit("deleteInfo");
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped src="./homeInfoItem.scss"></style>