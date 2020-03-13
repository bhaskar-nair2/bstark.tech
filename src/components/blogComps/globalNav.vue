<template>
	<div>
		<nav class="navBar">
			<div class="navList">
				<router-link :to="{ name: 'home' }">Home</router-link>
				<router-link :to="{ name: 'blogReader' }">Blog</router-link>
				<a active href="#">Blog</a>
				<a active href="#">Blog</a>
			</div>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
