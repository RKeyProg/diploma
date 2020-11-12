<template lang="pug">
	.title {{title}}
</template>

<script>
export default {
	props: {
		title: {
      type: String,
      default: ""
    }
	}
}
</script>

<style lang="scss" scoped>
	.title {
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    letter-spacing: 0.1em;
    color: #FF4081;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 3%;
      background: #FF4081;
    }

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 86%;
      background: #FF4081;
    }
  }
</style>