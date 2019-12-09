<template>
	<div class="roleSong">
		<div class="front">
			<img
				src="https://a2-images.myspacecdn.com/images04/6/95b9b2c97e94480a8118c4004d5a5013/600x600.jpg"
			/>
		</div>
		<div class="back">
			<div class="songCard">
				<span
					class="songTitle"
				>Lil Wayne - Mona Lisa (Lyrics) ft. Kendrick Lamar</span>
				<span class="caption">Current Fav</span>
			</div>
		</div>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'imgHolder',
	mixins: [RoleCompMixin],
	props: {
		imgUrl: {
			type: String
		},
		webLink: {
			type: String
		}
	},
	computed: {}
};
</script>

<style>
</style>
