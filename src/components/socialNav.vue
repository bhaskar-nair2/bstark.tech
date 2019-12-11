<template>
	<div>
		<div :class="`socialRow${isMobile?'--mobile':''}`">
			<a
				href="https://www.linkedin.com/in/bhaskar-nair2/"
				target="blank"
			>
				<v-icon class="socialIcon" name="brands/linkedin" scale="2" />
			</a>
			<a href="https://www.instagram.com/bas_kar_na_yar" target="blank">
				<v-icon class="socialIcon" name="brands/instagram" scale="2" />
			</a>
			<a href="https://twitter.com/bas_kar_na_yar" target="blank">
				<v-icon class="socialIcon" name="brands/twitter" scale="2" />
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'socialNav'
};
</script>

<style scoped>
</style>
