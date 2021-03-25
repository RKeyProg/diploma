<template lang="pug">
.materials-container
  homeHeader(activePage="3")
  splide.materials__list(:options="options")
    splide-slide
      task.task(
        material
        taskName="Анкета - оценка удовлетворенности работодателя",
        taskType="clipboard",
        link="https://www.mrk-bsuir.by/files/upload/anketa_-_ocenka_udovletvorennosti_rabotodatelya.doc",
        external
      )
    splide-slide
      task.task(
        material
        taskName="Пример письма на практику",
        taskType="letter",
        link="https://www.mrk-bsuir.by/files/upload/primer_pisma_na_praktiku.doc"
      )
    splide-slide
      task.task(
        material
        taskName="Пример письма на распределение",
        taskType="letter",
        link="https://www.mrk-bsuir.by/files/upload/primer_pisma_na_raspredelenie.doc"
      )
    splide-slide
      task.task(
        material
        taskName="Методические рекомендации",
        taskType="manual",
        link="https://www.mrk-bsuir.by/files/upload/metod_recom_mrk_2020.pdf"
      )
    splide-slide
      task.task(
        material
        taskName="Договор на практику 2020 бюджет",
        taskType="contract",
        link="https://www.mrk-bsuir.by/files/upload/dogovor_na_praktiku_2020_byudzhet_1.doc"
      )
    splide-slide
      task.task(
        material
        taskName="Договор на практику 2020 внебюджет",
        taskType="contract",
        link="https://www.mrk-bsuir.by/files/upload/dogovor_na_praktiku_2020_vnebyudzhet_0.doc"
      )
</template>

<script>
import homeHeader from "../components/homeHeader";
import task from "../components/homeTask";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  name: "PersonalAccount",
  components: {
    homeHeader,
    task,
    Splide,
    SplideSlide,
  },
  data() {
    return {
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
};
</script>

<style lang="scss">
@import "../mixins.scss";

.materials__list {
  user-select: none;
  overflow: hidden;
  height: 100%;

  & .splide__list {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, calc(100% / 3 - 15px));
    grid-gap: 15px;

    @include desktop {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }

  & .splide__track {
    height: 100% !important;
    padding: 0 2.08vw;
  }

  & .splide__slide {
    max-width: 100% !important;
    min-height: 240px;
    margin-bottom: 0 !important;

    @include desktop {
      min-height: 180px;
    }
  }

  & .task__container {
    min-width: 0;
    width: 100%;
    height: 100%;
  }

  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }
}
</style>

<style lang="scss" scoped>
.materials-container {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
