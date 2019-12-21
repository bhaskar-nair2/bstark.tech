<template>
	<div v-if="!modal" class="roleImg">
		<img
			v-if="!modal"
			:class="{ color: modal || color, wavy: wavy }"
			:src="dets.imgUrl"
		/>
	</div>
	<div v-else>
		<button class="cross" @click.self="closeModal">
			Cross
		</button>
		<img class="color" :src="dets.imgUrl" style="max-width:600px" />
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
