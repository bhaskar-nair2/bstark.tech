<template>
	<div
		:class="
			`${boxType}${isMobile ? '--mobile' : ''} 
			${elevated ? 'elevated' : ''}
			${appear ? 'appear' : ''}
			`
		"
		:style="position"
	>
		<imgHolder :dets="role.props" :typ="typ" v-if="role.type == 'img'"></imgHolder>
		<poemHold
			:dets="role.props"
			:typ="typ"
			v-else-if="role.type == 'poem'"
		></poemHold>
		<songHold
			:dets="role.props"
			:typ="typ"
			v-else-if="role.type == 'song'"
		></songHold>
		<div class="noComp" v-else></div>
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
	mounted() {
		if (this.isMobile)
			this.elevated =
				(Math.random() * 13).toFixed(0) % 7 == 0 ? true : false;
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
			appear: true,
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
			if (this.isMobile) {
				// system buggy
				this.appear = false;
				setTimeout(() => {
					this.elevated = !this.elevated;
				}, 5000); // animation duration buffer
			}
		}
	}
};
</script>

<style scoped></style>
