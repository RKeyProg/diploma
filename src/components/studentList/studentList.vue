<template lang="pug">
.students
  div
    .students__title {{ this.groupName }}
    splide.student__list(
      v-if="this.post !== 'admin' && this.students.length",
      :options="options"
    )
      splide-slide(v-for="student in this.students", :key="student.id")
        a(@click.prevent="setStudent(student)")
          student(:name="student.name", :photo="student.photo")
    splide.student__list(
      v-else-if="this.post === 'admin' && this.group.students.length",
      :options="options"
    )
      splide-slide(
        v-for="student in this.group.students",
        :key="student.id",
        @deleteStudent="deleteStudent"
      )
        a(@click.prevent="setStudent(student)")
          student(:name="student.name", :photo="student.photo")
        appBtn.student__delete(
          type="Delete",
          @wasClick="deleteStudent(student.id)"
        )
    .student__stub(v-else) В группу не добавлены учащиеся
    .buttons
      app-btn.student-back__btn(
        v-if="this.post === 'admin'",
        text="Удалить группу",
        @handleClick="$emit('deleteGroup')"
      )
      app-btn.student-back__btn(
        v-if="this.post === 'admin'",
        text="Назад",
        @handleClick="$emit('goBack')"
      )
</template>

<script>
import student from "../student";
import appBtn from "../button";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { mapState, mapActions } from "vuex";
import $axios from "../../request";

export default {
  components: {
    student,
    Splide,
    SplideSlide,
    appBtn,
  },
  data() {
    return {
      students: [],
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
  props: {
    groupName: {
      type: String,
      default: "",
    },
    group: {
      type: Object,
    },
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
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
    async getStudents() {
      if (this.post !== "admin") {
        const response = await $axios.get("/student/list");
        this.students = response.data.students;
      }
    },
    async deleteStudent(id) {
      try {
        const answer = { id: id };

        const response = await $axios.post("/student/delete/", answer);

        this.$emit("refreshStudentList", this.group.groupId);

        this.showTooltip({
          text: response.data.message,
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.response.data.message,
          type: "error",
        });
      }
    },
  },
  mounted() {
    this.getStudents();
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
    position: relative;
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
      margin-left: 7vw;
    }

    @include phones {
      margin-left: 5vw;
    }
  }

  .student__delete {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);

    & .btn-type__img {
      fill: #212121;
    }
  }
}
</style>