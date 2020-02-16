<template>
	<div class="roleSong--modal" v-if="modal">
		<div class="crossHold">
			<button @click.self="closeModal" class="cross">
				<v-icon @click.passive="closeModal" name="times" scale="2" />
			</button>
		</div>
		<div class="content">
			<iframe
				:src="dets.vidUrl"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				frameborder="0"
				height="315"
				width="560"
			></iframe>
		</div>
	</div>
	<div class="roleSong" v-else>
		<div class="front">
			<img :class="color ? 'color' : ''" :src="dets.imgUrl" />
		</div>
		<div class="back">
			<span class="songTitle">{{ textFmt(text) }}</span>
			<span class="caption">{{ dets.caption }}</span>
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

<style></style>
