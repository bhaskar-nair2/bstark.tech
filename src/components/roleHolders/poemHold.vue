<template>
	<div class="rolePoem--modal" v-if="modal">
		<button @click.self="closeModal" class="cross">
			<v-icon @click.passive="closeModal" name="times" scale="2" />
		</button>
		<div class="content">
			<h3>{{ dets.title }}</h3>
			<p v-html="dets.text"></p>
		</div>
	</div>
	<div class="rolePoem" v-else>
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
