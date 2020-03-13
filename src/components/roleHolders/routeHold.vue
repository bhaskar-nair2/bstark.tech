<template>
	<div>
		<router-link :to="{ name: dets.route }">
			<h1 class="routeHold">{{ dets.text }}</h1>
		</router-link>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'RouteHolder',
	mixins: [RoleCompMixin]
};
</script>

<style></style>
