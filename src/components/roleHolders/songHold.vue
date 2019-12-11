<template>
	<div class="roleSong">
		<div class="front">
			<img
				src="https://a2-images.myspacecdn.com/images04/6/95b9b2c97e94480a8118c4004d5a5013/600x600.jpg"
			/>
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
	props: {
		imgUrl: {
			type: String
		},
		webLink: {
			type: String
		}
	},
	data() {
		return {
			text: 'Mona Lisa - Lil Wayne ft. Kendrick Lamar'
		};
	},
	computed: {}
};
</script>

<style>
</style>
