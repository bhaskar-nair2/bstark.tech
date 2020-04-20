<template>
	<div>
		<globalNav></globalNav>
		<blogCards></blogCards>
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
		globalNav: () => import('@/components/globalNav'),
		blogCards: () => import('@/components/blogComps/blogCards')
	}
};
</script>
