<template lang="pug">
.contacts
  ul.contacts__list
    li.contacts__item(v-for="(contact, index) in contacts", :key="index")
      appBtn.teacher__delete(
        v-if="post === 'admin'"
        type="Delete",
        @wasClick="deleteTacher(contact.id)"
      ) 
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
import appBtn from "../button";
import avatar from "../avatar";
import $axios from "../../request";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    avatar,
    appBtn,
  },
  data() {
    return {
      contacts: [],
    };
  },
  computed: {
    ...mapState("user", {
      post: (state) => state.post,
    }),
  },
  methods: {
    ...mapActions({
      setCurrentTask: "task/setCurrentTask",
    }),
    async deleteTacher(id) {
      try {
        const answer = { id: id };

        const response = await $axios.post("/teacher/delete/", answer);

        this.getContacts();

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
    async getContacts() {
      try {
        this.contacts = [];

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
  },
  mounted() {
    this.getContacts();
  },
};
</script>

<style lang="scss" src="./contactsList.scss" scoped></style>

<style lang="scss">
@import "../../mixins.scss";

.contacts__item {
  position: relative;
}

.teacher__delete {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);

  & .btn-type__img {
    fill: #212121;
  }
}
</style>