<template>
	<div class="roleSong">
		<div class="front">
			<img :class="color?'color':''" :src="dets.imgUrl" />
		</div>
		<div class="back">
			<span class="songTitle">{{ textFmt(text) }}</span>
			<span class="caption">Current Fav</span>
		</div>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'songHold',
	mixins: [RoleCompMixin],
	props: {},
	data() {
		return {};
	},
	computed: {
		text() {
			return this.dets.title || '';
		}
	}
};
</script>

<style>
</style>
