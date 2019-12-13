<template>
	<div class="roleCont">
		<v-icon class="icn" name="paper-plane" scale="2"></v-icon>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'imgHolder',
	mixins: [RoleCompMixin],
	data() {
		return {
			timeout: []
		};
	}
};
</script>

<style></style>
