<template>
	<div
		:class="`${boxType}${isMobile?'--mobile':''}`"
		:style="position"
	>
		<imgHolder
			:imgUrl="role.props.url"
			:typ="typ"
			v-if="role.type=='img'"
		></imgHolder>
		<poemHold v-if="role.type=='poem'"></poemHold>
		<songHold v-if="role.type=='song'"></songHold>
	</div>
</template>

<script>
export default {
	name: 'box',
	components: {
		imgHolder: () => import('@/components/roleHolders/imgHold'),
		poemHold: () => import('@/components/roleHolders/poemHold'),
		songHold: ()=> import('@/components/roleHolders/songHold')
	},
	props: {
		boxType: {
			type: String,
			default: 'box1'
		},
		pos: {
			type: Array
		},
		typ: { type: String, required: true },
		role: {
			type: Object,
			required: true
		}
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
