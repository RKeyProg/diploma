<template lang="pug">
.materials-container
  homeHeader(activePage="3")
  splide.materials__list(:options="options")
    splide-slide
      task.task(
        taskName="Анкета - оценка удовлетворенности работодателя",
        taskType="clipboard",
        link="https://docviewer.yandex.by/view/478973072/?*=rzaHsrP%2B3gcxstmq%2Fw2duJ4%2BnTd7InVybCI6InlhLWJyb3dzZXI6Ly80RFQxdVhFUFJySlJYbFVGb2V3cnVHX0doY3M5Rzh6eXJMbk41Q0hOTXZ0SERxQjVmYWJBdm55aFJWazNudXlqby1FejdqWDlUNk4zRXloZEUtbmo4RDZzV2Zab1BYU0RyYjc2YldaWmVxakdXYzRraFU1Rm1qa3JUcmRpVnFORVJqUVM2ckdCN01fQ3ZqR0xZT1pQbVE9PT9zaWduPWNRekJFS19DbGtrblk3cEJuWG9hdGs0M3FGMzBja2ZMTm9GX3k0Zk1uaEk9IiwidGl0bGUiOiJhbmtldGFfLV9vY2Vua2FfdWRvdmxldHZvcmVubm9zdGlfcmFib3RvZGF0ZWx5YS5kb2MiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjQ3ODk3MzA3MiIsInRzIjoxNjE1MzEyNTcxNTgxLCJ5dSI6IjMxMjU0ODgyMTYwNTcxOTY4MSJ9",
        external
      )
    splide-slide
      task.task(
        taskName="Пример письма на практику",
        taskType="letter",
        link="https://docviewer.yandex.by/view/478973072/?*=X%2BEZ5wS406ke9mamlceKS%2Fz58zV7InVybCI6InlhLWJyb3dzZXI6Ly80RFQxdVhFUFJySlJYbFVGb2V3cnVDSVUyUzJGNU1lV1ZVbzN3cHhQNE9zamZJTmRMdTVXUWtvNnhoSnJkWUhlaEYtN2xLa0ZILTZVVFpKZGdwXzRSZ3NMRlBjWmtCSi1aTmswUjRIcWY3TXNFaWFNbE5WS1hIRHBDelJJb0gtU3c1dXNkY2c3LTJBVG1DbjdmUmo5eWc9PT9zaWduPVFGd0dxaDFXWXVCWFY3RnZyZUJ4dVFYcERTdkRnWVNHV0ZLU3Z0NFN3VTQ9IiwidGl0bGUiOiJwcmltZXJfcGlzbWFfbmFfcHJha3Rpa3UuZG9jIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiI0Nzg5NzMwNzIiLCJ0cyI6MTYxNTMxNTA2NDYxMywieXUiOiIzMTI1NDg4MjE2MDU3MTk2ODEifQ%3D%3D"
      )
    splide-slide
      task.task(
        taskName="Пример письма на распределение",
        taskType="letter",
        link="https://docviewer.yandex.by/view/478973072/?*=RiFXpy7ta1yIRLo0A94efJqAsBZ7InVybCI6InlhLWJyb3dzZXI6Ly80RFQxdVhFUFJySlJYbFVGb2V3cnVNTjZiYnNtLTVzTm5aWlQ0X1RKNnd5MkZSTF9NcWV0c2Y1N0JkQU9tZXVEWl85NXhMWTg5MjVSMWZ5YndRX1BkZkRtV3RoaGk4Z3pDbjdYclY2NUEtbVJpTGItdm81cFB2OE1zWG44bFgzQi1jazVsdjBPalgxem9SMGZJTm92LVE9PT9zaWduPXZVeFlTVG9XUkl5RGRqYktMRWR2UFlySUVLWUZ6emVEQ2ZfR000WUNPTGM9IiwidGl0bGUiOiJwcmltZXJfcGlzbWFfbmFfcmFzcHJlZGVsZW5pZS5kb2MiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjQ3ODk3MzA3MiIsInRzIjoxNjE1MzE1MDgyNzM5LCJ5dSI6IjMxMjU0ODgyMTYwNTcxOTY4MSJ9"
      )
    splide-slide
      task.task(
        taskName="Методические рекомендации",
        taskType="manual",
        link="https://docviewer.yandex.by/view/478973072/?*=RiFXpy7ta1yIRLo0A94efJqAsBZ7InVybCI6InlhLWJyb3dzZXI6Ly80RFQxdVhFUFJySlJYbFVGb2V3cnVNTjZiYnNtLTVzTm5aWlQ0X1RKNnd5MkZSTF9NcWV0c2Y1N0JkQU9tZXVEWl85NXhMWTg5MjVSMWZ5YndRX1BkZkRtV3RoaGk4Z3pDbjdYclY2NUEtbVJpTGItdm81cFB2OE1zWG44bFgzQi1jazVsdjBPalgxem9SMGZJTm92LVE9PT9zaWduPXZVeFlTVG9XUkl5RGRqYktMRWR2UFlySUVLWUZ6emVEQ2ZfR000WUNPTGM9IiwidGl0bGUiOiJwcmltZXJfcGlzbWFfbmFfcmFzcHJlZGVsZW5pZS5kb2MiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjQ3ODk3MzA3MiIsInRzIjoxNjE1MzE1MDgyNzM5LCJ5dSI6IjMxMjU0ODgyMTYwNTcxOTY4MSJ9"
      )
    splide-slide
      task.task(
        taskName="Договор на практику 2020 бюджет",
        taskType="contract",
        link="https://docviewer.yandex.by/view/478973072/?*=3sgBPxaMRk8Dr6qYrBERO%2BpyYjJ7InVybCI6InlhLWJyb3dzZXI6Ly80RFQxdVhFUFJySlJYbFVGb2V3cnVCdlhSSktaeS1XaVcwajdpZ0JjQWpxb0VmUEpmSVhlbHU2clUtMVJqV3YwMWNWZVRpZWI3SVMwYkh6eVRoWFpYZ1pNT0IxcWNUbWplRWVOaFNfZ1dmbjJPRjg1OGVNLWJHVlc1SXJDcW1VSVVNT3l0Nld2bFNSM1cwZjdhQnBVMFE9PT9zaWduPW9aYXA3NC1SMkpZOFBFMkJDdlpqbklyZG5TZTI1YVVjRl83TTJ3bzE3cW89IiwidGl0bGUiOiJkb2dvdm9yX25hX3ByYWt0aWt1XzIwMjBfYnl1ZHpoZXRfMS5kb2MiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjQ3ODk3MzA3MiIsInRzIjoxNjE1MzE1MTAwMzM5LCJ5dSI6IjMxMjU0ODgyMTYwNTcxOTY4MSJ9"
      )
    splide-slide
      task.task(
        taskName="Договор на практику 2020 внебюджет",
        taskType="contract",
        link="https://docviewer.yandex.by/view/478973072/?*=4sQrJc34Z3yH1G%2FnBsK%2FLglr8Vt7InVybCI6InlhLWJyb3dzZXI6Ly80RFQxdVhFUFJySlJYbFVGb2V3cnVNRkUxN1NWUDIzOFAxVVcwbV9rQjBRYUR1OC15WDY3eVY1QWxRNU4tTFpkanpqa2FLRS1kejNZd1V5Ty1yU1doRmVPbFJmVmRscXcya2FUYklMcFhDRjNxVHFmaDU5cEdSaWN6cHNwNWpVS3QzTnNIM2RGY09FM2YxQ2tmb0xhRXc9PT9zaWduPTVGYzFUcDh3alNhY2F6bjVRNU9fNkRjcDBuQjk1cGt4czlhRl9GTDQ3dzg9IiwidGl0bGUiOiJkb2dvdm9yX25hX3ByYWt0aWt1XzIwMjBfdm5lYnl1ZHpoZXRfMC5kb2MiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjQ3ODk3MzA3MiIsInRzIjoxNjE1MzE1MTExNjE4LCJ5dSI6IjMxMjU0ODgyMTYwNTcxOTY4MSJ9"
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
