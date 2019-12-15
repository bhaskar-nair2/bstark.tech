<template>
	<div :class="`rolePoem${asModal}`">
		<div class="roleOverlay" v-if="!modal">Read..</div>
		<p v-if="!modal">{{ textFmt(dets.title) }}</p>
		<div v-if="modal">
			<h3>{{dets.title}}</h3>
			<p v-html="dets.text"></p>
		</div>
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
