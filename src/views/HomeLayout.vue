<template>
	<div>
		<div id="mainCont">
			<h1 :class="`grayzone${this.isMobile ? '--mobile' : ''}`">
				Grayzone
			</h1>
			<gridMaker></gridMaker>
		</div>
	</div>
</template>

<script>
import gridMaker from '@/components/gridMaker.vue';

export default {
	name: 'MainGridView',
	components: {
		gridMaker
	}
};
</script>

<style scoped></style>
