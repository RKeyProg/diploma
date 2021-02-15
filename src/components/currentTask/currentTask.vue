<template lang="pug">
.curren-task
  section-title(title="Задание")
  .current-task__content
    .current-task__wording {{ currentTask.wording }}
    ul.current-task__note-list
      li.current-task__note-item(v-for="item in currentTask.note") {{ item }}
  app-btn.current-task__btn(text="Приступить")
</template>

<script>
import sectionTitle from "../sectionTitle";
import appBtn from "../button";

export default {
  components: {
    sectionTitle,
    appBtn,
  },
  data() {
    return {
      currentTask: {
        wording:
          "Выберите компоненты персонального компьютера, совместимые между собой. Определите последовательность подключения компонентов",
        note: [
          "Совместимость компонентов определить самостоятельно",
          "Подключение комопонентов определяется размерами компонентов: от малых к большим. Например: процессор, потом материнская плата",
        ],
      },
    };
  },
};
</script>

<style lang="scss" src="./currentTask.scss" scoped></style>
