<template lang="pug">
.students
  .students__title 8к2411
  splide.student__list(:options="options")
    splide-slide(v-for="student in this.students", :key="student.id")
      a(@click.prevent="setStudent(student)")
        student(:name="student.name", :photo="student.photo")
</template>

<script>
import student from "../student";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { mapState, mapActions } from "vuex";
import $axios from "../../request";

export default {
  components: {
    student,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      students: [],
      groupName: "",
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
  computed: {
    ...mapState("user", {
      group: (state) => state.user.id_group,
    }),
  },
  methods: {
    ...mapActions({
      setCurrentStudent: "student/setCurrentStudent",
    }),
    setStudent(student) {
      this.setCurrentStudent(student);

      this.$router.replace("/studentData");
    },
  },
  async mounted() {
    const response = await $axios.get("/student/list");

    this.students = response.data.students;
  },
};
</script>

<style lang="scss" src="./studentList.scss" scoped></style>

<style lang="scss">
@import "../../mixins.scss";

.student__list {
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
    margin-left: 5vw;
    outline: none;
    width: fit-content !important;
    height: fit-content !important;
    display: flex;
    user-select: none;
    margin-bottom: 0 !important;

    @include desktop {
      margin-left: 3vw;
    }

    @include tablets {
      margin-left: 2vw;
    }
  }
}
</style>