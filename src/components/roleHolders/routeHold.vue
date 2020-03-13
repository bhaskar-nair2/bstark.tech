<template>
	<router-link
		:to="{ name: dets.route }"
		class="routeHold"
		style="width:100%;height:100%"
	>
		<h1>{{ dets.text }}</h1>
	</router-link>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'RouteHolder',
	mixins: [RoleCompMixin]
};
</script>

<style></style>
