<template>
	<div class="rolePoem">
		<div class="roleOverlay">More..</div>
		<p>Ye pal, sapno ki tarah hi to hote hai</p>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'poemHolder',
	mixins: [RoleCompMixin],
	props: {
		text: {
			type: Object
		}
	},
	computed: {}
};
</script>

<style>
</style>
