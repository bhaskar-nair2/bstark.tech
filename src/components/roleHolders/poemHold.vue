<template>
	<div class="rolePoem">
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
