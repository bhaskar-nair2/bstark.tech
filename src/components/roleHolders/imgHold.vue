<template>
	<img class="role--img" :src="imgUrl" />
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
	computed: {}
};
</script>

<style>
</style>
