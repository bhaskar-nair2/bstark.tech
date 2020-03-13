<template>
	<div>
		<div class="cardHolder">
			<div :key="n" class="blogCard" v-for="n in 15">
				<h1>Title</h1>
				<p>Lorem impsum dolor set amit</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
