<template lang="pug">
.materials-container
  homeHeader(activePage="3")
  splide.task__list(:options="options")
    splide-slide
      task.task(taskName="Анкета - оценка удовлетворенности работодателя" taskType="clipboard", link="/")
    splide-slide
      task.task(taskName="Пример письма на практику" taskType="letter", link="/")
    splide-slide
      task.task(taskName="Пример письма на распределение" taskType="letter" link="/")
    splide-slide
      task.task(taskName="Методические рекомендации" taskType="manual" link="/")
    splide-slide
      task.task(taskName="Договор на практику 2020 бюджет" taskType="contract" link="/")
    splide-slide
      task.task(taskName="Договор на практику 2020 внебюджет" taskType="contract" link="/")
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
        height: "26.666vh",
        autoHeight: true,
        arrows: false,
        pagination: false,
        rewind: true,
        gap: "15px",
        padding: {
          left: "2.08vw",
          right: "2.08vw"
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.materials-container {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
