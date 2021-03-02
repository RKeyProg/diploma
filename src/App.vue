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
  overflow-y: auto;
  width: calc(100vw - 227px);
  position: relative;
  z-index: 5;

  @include desktop {
    width: calc(100vw - 200px);
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