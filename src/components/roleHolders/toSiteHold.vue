<template>
	<a
		@click.passive="open"
		:href="dets.link"
		style="color:unset"
		target="blank"
		class="toSiteHold"
	>
		<v-icon class="socialIcon" :name="dets.icon" scale="2" />
	</a>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'RouteHolder',
	mixins: [RoleCompMixin],
	methods: {
		open() {}
	}
};
</script>

<style></style>
