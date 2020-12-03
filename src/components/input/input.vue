<template lang="pug">
	label
		input(
			:placeholder="title" 
			v-bind="$attrs" 
			:type="fieldType" 
			:class="['input', {'checkbox' : fieldType === 'checkBox'}]"
			:value="value"
			@input="$emit('input', $event.target.value)"
		)
		span(
			v-if="fieldType === 'checkBox'"
			:value="value"
			@input="$emit('input', $event.target.value)"
		).check-picture
			svg(class='check-picture_active' viewBox="0 0 352.62 352.62" preserveAspectRatio="none")
				use(xlink:href=`../../images/icons/checkMark.svg#check`)
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ""
		},
		fieldType: {
			type: String,
			default: "text"
		},
		value: {
      type: String,
      default: "",
    },
	},
}
</script>

<style lang="scss" scoped src="./input.scss">

</style>