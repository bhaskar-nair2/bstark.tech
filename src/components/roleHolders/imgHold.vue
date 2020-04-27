<template>
	<div class="roleImg--modal" ref="modal" v-if="modal">
		<div class="crossHold">
			<button @click.self="closeModal" class="cross">
				<v-icon @click.passive="closeModal" name="times" scale="2" />
			</button>
		</div>
		<div class="content">
			<img :src="dets.imgUrl" class="color modalImg" loading="lazy" />
		</div>
		<div class="intro" v-if="dets.name == 'disp'">
			<intro></intro>
		</div>
	</div>

	<div class="roleImg" v-else>
		<img
			:class="{ color: modal || color, wavy: wavy }"
			rel="preload"
			v-lazy="dets.imgUrl"
		/>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'imgHolder',
	mixins: [RoleCompMixin],
	created() {
		// this.wavyImg();
	},
	components: {
		intro: () => import('@/components/intro.vue')
	},
	data() {
		return {
			timeout: [],
			wavy: false
		};
	},
	methods: {
		// wavyImg() {
		// 	this.timeout.pop();
		// 	var aniTime = 1000;
		// 	var timeFn = setTimeout(() => {
		// 		if ((Math.random() * 13).toFixed(0) % 2 == 0) {
		// 			this.wavy = !this.wavy;
		// 			aniTime = 20000;
		// 		} else {
		// 			aniTime = 1000;
		// 		}
		// 		this.wavyImg();
		// 	}, aniTime + this.timeFunc);
		// 	this.timeout.push(timeFn);
		// }
	}
};
</script>

<style></style>
