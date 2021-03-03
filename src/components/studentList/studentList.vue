<template lang="pug">
.students
  .students__title {{ this.group }}
  splide.student__list(:options="options")
    splide-slide(v-for="student in this.students", :key="student.id")
      router-link(:to="student.page")
        student(:name="student.name")
</template>

<script>
import student from "../student";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  components: {
    student,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      group: "8к2411",
      students: [
        {
          id: 1,
          name: "Кирилл Радкевич",
          page: "/personalAccount",
        },
        {
          id: 2,
          name: "Павел Бабич",
          page: "/personalAccount",
        },
        {
          id: 3,
          name: "Никита Нестерук",
          page: "/personalAccount",
        },
        {
          id: 4,
          name: "Антон Гунько",
          page: "/personalAccount",
        },
        {
          id: 5,
          name: "Кирилл Радкевич",
          page: "/personalAccount",
        },
        {
          id: 6,
          name: "Павел Бабич",
          page: "/personalAccount",
        },
        {
          id: 7,
          name: "Никита Нестерук",
          page: "/personalAccount",
        },
        {
          id: 8,
          name: "Антон Гунько",
          page: "/personalAccount",
        },
        {
          id: 9,
          name: "Кирилл Радкевич",
          page: "/personalAccount",
        },
        {
          id: 10,
          name: "Павел Бабич",
          page: "/personalAccount",
        },
        {
          id: 11,
          name: "Никита Нестерук",
          page: "/personalAccount",
        },
        {
          id: 12,
          name: "Антон Гунько",
          page: "/personalAccount",
        },
        {
          id: 13,
          name: "Кирилл Радкевич",
          page: "/personalAccount",
        },
        {
          id: 14,
          name: "Павел Бабич",
          page: "/personalAccount",
        },
        {
          id: 15,
          name: "Никита Нестерук",
          page: "/personalAccount",
        },
        {
          id: 16,
          name: "Антон Гунько",
          page: "/personalAccount",
        },
      ],
      options: {
        direction: "ttb",
        height: "26.666vh",
        arrows: false,
        pagination: false,
        rewind: true,
        gap: "25px",
        padding: {
          left: "2.08vw",
          right: "2.08vw",
        },
      },
    };
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
    outline: none;
    width: fit-content !important;
    height: fit-content !important;
    display: flex;
    user-select: none;
    margin-bottom: 0 !important;
  }
}
</style>