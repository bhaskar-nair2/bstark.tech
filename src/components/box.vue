<template>
	<div
		:class="setClass"
		:style="position"
		@keypress.esc="closeModal"
		@click.capture="showModal"
	>
		<component
			@closeModal="closeModal"
			:dets="role.props"
			:id="boxData.id"
			:is="component.name"
			:modal="modal"
			:typ="typ"
			v-if="component.name !== ''"
			@keypress.esc="closeModal"
		>
		</component>
		<div class="noComp" @click.capture.stop v-else></div>
	</div>
</template>

<script>
export default {
	name: 'box',
	created() {
		this.elevate();
		setTimeout(() => (this.appear = false), 1000);
	},
	mounted() {
		if (this.isMobile)
			this.elevated =
				(Math.random() * 13).toFixed(0) % 7 == 0 ? true : false;
	},
	components: {
		imgHold: () => import('@/components/roleHolders/imgHold'),
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
			elevated: false,
			comps: { name: 'imgHolder', typ: 'img' },
			modal: false
		};
	},
	computed: {
		component: function() {
			switch (this.role.type) {
				case 'img':
					return { name: 'imgHold' };
				case 'poem':
					return { name: 'poemHold' };
				case 'song':
					return { name: 'songHold' };
				case 'contact':
					return { name: 'contactRole' };
				default:
					return { name: '' };
			}
		},
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
		setClass() {
			if (this.modal) {
				return 'baseModal';
			} else {
				var typ = `${this.boxType}${this.isMobile ? '--mobile' : ''}`;
				var ele = `${this.elevated ? ' elevated' : ''}`;
				var app = `${this.appear ? ' appear' : ''}`;
				return typ + ele + app;
			}
		},
		timeFunc() {
			// controls external styles: elevate
			var id = this.boxData.id.split(':').map(val => parseInt(val));
			var [type, col, row] = id;
			if (this.isMobile) {
				return row * 800 + col * 10 + type * 10;
			} else {
				return row * 10 + col * 800 + type * 10;
			}
		}
	},
	methods: {
		showModal() {
			// this.$root.$emit('showModal',this.boxData);
			this.modal = true;
		},
		closeModal() {
			this.modal = false;
		},
		elevate() {
			setTimeout(() => {
				this.elevated = !this.elevated;
				this.elevate();
			}, 5000 + this.timeFunc); // animation duration buffer
		}
	}
};
</script>

<style scoped></style>
