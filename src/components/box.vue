<template>
	<div :class="boxType" :style="position">
		{{role}}
		<small></small>
	</div>
</template>

<script>
export default {
	name: 'box',
	props: {
		boxType: {
			type: String,
			default: 'box1'
		},
		pos: {
			type: Array
		},
		typ: String,
		role: String
	},
	data() {
		return {};
	},
	computed: {
		position() {
			return {
				'grid-row': this.pos[0],
				'grid-column': this.pos[1]
			};
		}
	}
};
</script>

<style scoped>
</style>
