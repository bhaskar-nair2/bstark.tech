<template>
	<div class="modalPane" v-if="modal">
		<!-- TODO: Add appear transition here -->
		<div class="baseModal">
			<div class="top">
				<div class="title">
					<h3 style="margin-top:0">Some Title</h3>
				</div>
				<div class="cross">
					<v-icon @click="hide" name="times" scale="1" />
				</div>
			</div>
			<div class="content">{{boxData}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'baseModal',
	mounted() {
		this.$root.$on('showModal', this.show);
	},
	data() {
		return {
			height: '20vh',
			width: '30vw',
			modal: false,
			boxData: {},
			comps: {}
		};
	},
	computed: {
		component: function() {
			switch (this.role.type) {
				case 'img':
					return { name: 'imgHolder' };
				case 'poem':
					return { name: 'poemHold' };
				case 'song':
					return { name: 'songHold' };
				case 'contact':
					return { name: 'contactRole' };
				default:
					return { name: '' };
			}
		}
	},
	methods: {
		show(boxData) {
			this.modal = true;
			this.boxData = boxData;
		},
		hide() {
			this.modal = false;
		}
	}
};
</script>

<style></style>
