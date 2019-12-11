<template>
	<div
		:class="`${boxType}${isMobile?'--mobile':''} ${elevated?'elevated':''}`"
		:style="position"
	>
		<imgHolder
			:imgUrl="role.props.url"
			:typ="typ"
			v-if="role.type=='img'"
		></imgHolder>
		<poemHold :typ="typ" v-if="role.type=='poem'"></poemHold>
		<songHold :typ="typ" v-if="role.type=='song'"></songHold>
	</div>
</template>

<script>
import { setInterval } from 'timers';

export default {
	name: 'box',
	created() {
		setInterval(
			this.elevate,
			(100 * parseFloat(this.boxData.id)) / this.boxData.id.length
		);
	},
	components: {
		imgHolder: () => import('@/components/roleHolders/imgHold'),
		poemHold: () => import('@/components/roleHolders/poemHold'),
		songHold: () => import('@/components/roleHolders/songHold')
	},
	props: {
		boxData: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			elevated: false
		};
	},
	computed: {
		position() {
			return {
				'grid-row': this.pos[0],
				'grid-column': this.pos[1]
			};
		},
		boxType() {
			return this.boxData.type || 'box1';
		},
		pos() {
			return this.boxData.position;
		},
		typ() {
			return this.boxData.type;
		},
		role() {
			return this.boxData.role;
		}
	},
	methods: {
		elevate() {
			if (this.isMobile)
				setTimeout(() => {
					this.elevated = !this.elevated;
				}, 500); // animation duration buffer
		}
	}
};
</script>

<style scoped>
</style>
