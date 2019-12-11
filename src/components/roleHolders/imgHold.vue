<template>
	<div>
		<div class="roleImg">
			<img :class="color?'color':''" :src="dets.imgUrl" />
		</div>
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

<style>
</style>
