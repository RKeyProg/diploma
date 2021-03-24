<template lang="pug">
.contacts
  ul.contacts__list
    li.contacts__item(v-for="(contact, index) in contacts", :key="index") 
      .contact__photo
        avatar.contact__photo-img(:photo="contact.photo")
      .contact__info
        .contact__name {{ contact.surname + ' ' + contact.name + ' ' + contact.patronymic }}
        .contact__post {{ contact.post }}
        .contact__phone 
          span Тел:
          span {{ contact.phone }}
        .contact__mail 
          span E-mail:
          span {{ contact.email }}
</template>

<script>
import avatar from "../avatar";
import $axios from "../../request";
import { mapActions } from "vuex";

export default {
  components: {
    avatar
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    ...mapActions({
      setCurrentTask: "task/setCurrentTask",
    }),
  },
  async mounted() {
    try {
      const response = await $axios.get("/contacts/list");

      let arr = [];

      response.data.forEach((el) => {
        arr = this.contacts.concat(el);

        this.contacts = arr;
      });

      this.contacts = this.contacts.reverse();
    } catch (error) {
      this.showTooltip({
        text: "Не удалось загрузить страницу",
        type: "error",
      });
    }
  },
};
</script>

<style lang="scss" src="./contactsList.scss" scoped></style>
