<template>
	<div class="rolePoem--modal" v-if="modal">
		<button class="cross" @click.self="closeModal">
			Cross
		</button>
		<h3>{{ dets.title }}</h3>
		<p v-html="dets.text"></p>
	</div>
	<div v-else class="rolePoem">
		<div class="roleOverlay">Read..</div>
		<p>{{ textFmt(dets.title) }}</p>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'poemHolder', // statefull
	mixins: [RoleCompMixin],
	props: {},
	data() {
		return {
			text: 'Ye pal, sapno ki tarah hi to hote hai'
		};
	},
	methods: {}
};
</script>

<style></style>
