<template>
	<div>
		<div class="roleImg">
			<img :class="color?'color':''" :src="imgUrl" />
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
			type: String,
			required: true
		}
	},
	data() {
		return {
			timeout: []
		};
	}
};
</script>

<style>
</style>
