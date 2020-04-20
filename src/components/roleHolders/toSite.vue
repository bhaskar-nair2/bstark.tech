<template>
	<a
		@click.passive="open"
		href="https://dribbble.com/bhaskar_nair2"
		style="color:unset"
		target="blank"
	>
		<v-icon class="socialIcon" name="brands/dribbble" scale="2" />
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
