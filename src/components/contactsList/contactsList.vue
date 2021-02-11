<template lang="pug">
.contacts
  ul.contacts__list
    li.contacts__item(v-for="contact in contacts", :key="contact.id") 
      .contact__photo
        img.contact__photo-img(src="../../images/content/naumenko.jpg")
      .contact__info
        .contact__name {{ contact.name }}
        .contact__post {{ contact.post }}
        .contact__phone 
          span Тел:
          span {{ contact.phone }}
        .contact__mail 
          span E-mail:
          span {{ contact.mail }}
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Науменко Жанна Николаевна",
          post:
            "Заместитель директора по производственному обучению, магистр образования",
          phone: "+375 (29) 378-17-44",
          mail: "zam_po@mrk-bsuir.by",
        },
        {
          id: 2,
          name: "Науменко Жанна Николаевна",
          post:
            "Заместитель директора по производственному обучению, магистр образования",
          phone: "+375 (29) 378-17-44",
          mail: "zam_po@mrk-bsuir.by",
        },
        {
          id: 3,
          name: "Науменко Жанна Николаевна",
          post:
            "Заместитель директора по производственному обучению, магистр образования",
          phone: "+375 (29) 378-17-44",
          mail: "zam_po@mrk-bsuir.by",
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="./contactsList.scss" scoped></style>
