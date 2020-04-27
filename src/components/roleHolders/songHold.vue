<template>
	<div class="roleSong--modal" v-if="modal">
		<div class="crossHold">
			<button @click.self="closeModal" class="cross">
				<v-icon @click.passive="closeModal" name="times" scale="2" />
			</button>
		</div>
		<div class="content">
			<iframe
				:height="size.height"
				:src="dets.vidUrl"
				seamless
				:width="size.width"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				frameborder="0"
			></iframe>
		</div>
	</div>
	<div class="roleSong" v-else>
		<div class="front">
			<img
				:class="color ? 'color' : ''"
				load
				rel="preload"
				v-lazy="dets.imgUrl"
			/>
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
		},
		size() {
			console.log();
			if (this.isMobile) {
				return {
					height: 250,
					width: window.innerWidth - 50
				};
			} else {
				return {
					height: window.innerHeight - 300,
					width: window.innerWidth - 500
				};
			}
		}
	}
};
</script>

<style></style>
