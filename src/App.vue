<template lang="pug">
.app-container
  router-view(name="sideBar")
  .content
    router-view.component
</template>

<script>
export default {
  data() {
    return {
      isSideBarView: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./mixins.scss";

.app-container {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
}

.content {
  width: calc(100vw - 227px);
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

  @include desktop {
    width: calc(100vw - 20px);
  }

  @include tablets {
    width: 100%;
  }
}

.component {
  position: relative;
  z-index: 10;
}
</style>

<style lang="scss" src="./App.scss"></style>