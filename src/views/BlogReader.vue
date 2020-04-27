<template>
	<div>
		<div id="mainCont">
			<blogCards></blogCards>
		</div>
		<!-- Title -->
		<!-- Subtitle-1 -->
		<!-- Content-1 -->
		<!-- 
      ...
      ...
      ...
		-->
		<!-- Other Posts -->
	</div>
</template>

<script>
export default {
	name: 'BlogReader',
	components: {
		blogCards: () => import('@/components/blogComps/blogCards')
	}
};
</script>
