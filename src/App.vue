<template lang="pug">
.app-container
  router-view(name="sideBar")
  .content
    router-view.component
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
}

.content {
  width: calc(100vw - 227px);
  background: url("./images/content/BG.jpg");
  position: relative;
  z-index: 5;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.97);
  }
}

.component {
  position: relative;
  z-index: 10;
}
</style>

<style lang="scss" src="./App.scss"></style>