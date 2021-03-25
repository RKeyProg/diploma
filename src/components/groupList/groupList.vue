<template lang="pug">
div
  .groups(v-if="!isGroupSelected")
    .groups-list__title Список всех групп
    splide.group__list(v-if="this.groups.length", :options="options")
      splide-slide(v-for="group in this.groups", :key="group.id")
        button(@click.prevent="selectGroup(group.id)") {{ group.group_name }}
  .students(v-else)
    studentList(
      :group="selectedGroup",
      :groupName="selectedGroup.group",
      @goBack="goBack",
      @deleteGroup="deleteGroup",
      @refreshStudentList="getStudentList"
    )
</template>

<script>
import $axios from "../../request";
import studentList from "../studentList";
import { mapActions } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  components: {
    Splide,
    SplideSlide,
    studentList,
  },
  data() {
    return {
      groups: [],
      selectedGroup: {},
      isGroupSelected: false,
      selectedGeoupId: null,
      options: {
        direction: "ttb",
        height: "23vh",
        autoHeight: true,
        arrows: false,
        pagination: false,
        rewind: true,
        gap: "15px",
        padding: {
          left: "2.08vw",
          right: "2.08vw",
        },
      },
    };
  },
  methods: {
    ...mapActions({
      showTooltip: "tooltips/show",
    }),
    selectGroup(id) {
      this.getStudentList(id);

      this.isGroupSelected = !this.isGroupSelected;
    },
    async getStudentList(id) {
      try {
        const response = await $axios.get(`/student/list?id=${id}`);

        this.selectedGroup = response.data;

      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    },
    async getGroupList() {
      try {
        const response = await $axios.get("/group/list");

        this.groups = response.data;
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    },
    goBack() {
      this.isGroupSelected = !this.isGroupSelected;
    },
    deleteGroup() {
      console.log("Удалить");
    },
  },
  mounted() {
    this.getGroupList();
  },
};
</script>

<style lang="scss" scoped src="./groupList.scss"></style>

<style lang="scss">
@import "../../mixins.scss";

.group__list {
  & .splide__track {
    height: 100% !important;
    width: 100%;
  }

  & .splide__list {
    justify-content: center;
    display: grid !important;
    grid-template-columns: repeat(auto-fit, 20.4vw);
    grid-row-gap: 20px;
    grid-column-gap: 15px;

    @include desktop {
      grid-template-columns: repeat(auto-fit, 23vw);
    }

    @include tablets {
      grid-template-columns: repeat(auto-fit, 29vw);
    }

    @include phones {
      grid-template-columns: repeat(auto-fit, 42vw);
    }
  }

  & .splide__slide {
    outline: none;
    width: fit-content !important;
    height: fit-content !important;
    display: flex;
    justify-self: center;
    user-select: none;
    margin-bottom: 0 !important;
    font-size: 18px;
    font-weight: 500;
    color: #212121;
    transition: all 0.3s ease;

    &:hover {
      color: #ff4081;
    }
  }
}
</style>