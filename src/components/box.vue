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
		<contactRole
			:dets="role.props"
			:typ="typ"
			v-else-if="role.type == 'contact'"
		></contactRole>
		<div class="noComp" v-else></div>
	</div>
</template>

<script>
export default {
	name: 'box',
	created() {
		this.elevate();
	},
	mounted() {
		if (this.isMobile)
			this.elevated =
				(Math.random() * 13).toFixed(0) % 7 == 0 ? true : false;
	},
	components: {
		imgHolder: () => import('@/components/roleHolders/imgHold'),
		poemHold: () => import('@/components/roleHolders/poemHold'),
		songHold: () => import('@/components/roleHolders/songHold'),
		contactRole: () => import('@/components/roleHolders/contactRole')
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
		},
		timeFunc() {
			console.log(
				parseFloat(this.boxData.id.split(':')[1]),
				parseFloat(this.boxData.id.split(':')[2])
			);
			return (
				5000 +
				(parseFloat(this.boxData.id.split(':')[1]) +
					parseFloat(this.boxData.id.split(':')[2])) *
					100 *
					parseFloat(this.boxData.id.split(':')[0])
			);
		}
	},
	methods: {
		elevate() {
			setTimeout(() => {
				this.appear = false;
				this.elevated = !this.elevated;
				this.elevate();
			}, this.timeFunc); // animation duration buffer
		}
	}
};
</script>

<style scoped></style>
