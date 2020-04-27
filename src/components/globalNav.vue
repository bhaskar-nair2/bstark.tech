<template>
	<div>
		<nav class="navBar">
			<div class="navList">
				<router-link active-class="active" exact :to="{ name: 'home' }"
					>Home</router-link
				>
				<router-link active-class="active" :to="{ name: 'blogReader' }"
					>Blog</router-link
				>
			</div>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
