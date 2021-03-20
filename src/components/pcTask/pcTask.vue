<template lang="pug">
.pc
  .pc__component-info(
    v-for="component in componentsList",
    v-if="component.isActive"
  )
    .pc__component-name {{ component.name }}
    .pc__component-desc {{ component.desc }}
    app-btn.pc__component-open-btn(
      @handleClick="checkComponent",
      text="Открыть 3D модель"
    )
    v-select(
      :options="component.examples",
      :placeholder="component.placeholder",
      @input="select($event, component.id)"
    )
  .pc__right-column
    ul.pc__components-list
      li.pc__components-item(v-for="component in componentsList")
        button(
          @click.prevent="choiceComponent(component.id)",
          :class="{ active: component.isActive }"
        ) {{ component.name }}
    app-btn(@handleClick="checkCompatibility", text="Проверить совместимость")
</template>

<script>
import appBtn from "../button";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
    appBtn,
  },
  data() {
    return {
      componentsList: [
        {
          id: 1,
          name: "Материнская плата",
          isActive: true,
          desc:
            "Печатная плата, являющаяся основой построения модульного устройства, например - компьютера. Системная плата содержит основную часть устройства, процессор и оперативную память дополнительные же или взаимозаменяемые платы называются платами расширений.",
          examples: [
            "Материнская плата 1",
            "Материнская плата 2",
            "Материнская плата 3",
            "Материнская плата 4",
          ],
          activeExample: "",
          placeholder: "Выберите материнскую плату",
          object: "motherboard",
        },
        {
          id: 2,
          name: "Оперативная память",
          isActive: false,
          desc:
            "Энергозависимая часть системы компьютерной памяти, в которой во время работы компьютера хранится выполняемый машинный код (программы), а также входные, выходные и промежуточные данные, обрабатываемые процессором. Оперативное запоминающее устройство (ОЗУ) — техническое устройство, реализующее функции оперативной памяти. ОЗУ может изготавливаться как отдельный внешний модуль или располагаться на одном кристалле с процессором, например, в однокристальных ЭВМ или однокристальных микроконтроллерах.",
          examples: [
            "Оперативная память 1",
            "Оперативная память 2",
            "Оперативная память 3",
            "Оперативная память 4",
          ],
          activeExample: "",
          placeholder: "Выберите оперативную память",
          object: "ram",
        },
        {
          id: 3,
          name: "Процессор",
          isActive: false,
          desc:
            "Электронный блок либо интегральная схема, исполняющая машинные инструкции (код программ), главная часть аппаратного обеспечения компьютера или программируемого логического контроллера. Иногда называют микропроцессором или просто процессором.",
          examples: [
            "Процессор 1",
            "Процессор 2",
            "Процессор 3",
            "Процессор 4",
          ],
          activeExample: "",
          placeholder: "Выберите процессор",
          object: "CPU",
        },
        {
          id: 4,
          name: "Блок питания",
          isActive: false,
          desc:
            "Устройство, предназначенное для формирования напряжений питания компьютерных систем. В некоторой степени блок питания также выполняет функции стабилизации и защиты от незначительных помех питающего напряжения.",
          examples: [
            "Блок питания 1",
            "Блок питания 2",
            "Блок питания 3",
            "Блок питания 4",
          ],
          activeExample: "",
          placeholder: "Выберите блок питания",
          object: "powerBlock",
        },
        {
          id: 5,
          name: "Видеокарта",
          isActive: false,
          desc:
            "Устройство, преобразующее графический образ, хранящийся как содержимое памяти компьютера (или самого адаптера), в форму, пригодную для дальнейшего вывода на экран монитора.",
          examples: [
            "Видеокарта 1",
            "Видеокарта 2",
            "Видеокарта 3",
            "Видеокарта 4",
          ],
          activeExample: "",
          placeholder: "Выберите видеокарту",
          object: "videoCard",
        },
        {
          id: 6,
          name: "Корпус",
          isActive: false,
          desc:
            "Физически представляет собой базовую несущую конструкцию (шасси), которая предназначена для последующего наполнения аппаратным обеспечением с целью создания компьютера.",
          examples: ["Корпус 1", "Корпус 2", "Корпус 3", "Корпус 4"],
          activeExample: "",
          placeholder: "Выберите корпус",
          object: "body",
        },
      ],
    };
  },
  methods: {
    choiceComponent(id) {
      this.componentsList.forEach((el) => {
        el.isActive = false;
      });

      this.componentsList[id - 1].isActive = true;
    },
    checkCompatibility() {
      this.$emit("checkCompatibility");
    },
    checkComponent() {
      this.componentsList.forEach((el) => {
        if (el.isActive) {
          this.$emit("checkComponent", el.object);
        }
      });
    },
    select(val, id) {
      this.componentsList.forEach((el) => {
        if (el.id === id) {
          el.activeExample = val;
          console.log(el);
        }
      });
    },
  },
};
</script>

<style lang="scss" src="./pcTask.scss" scoped></style>
