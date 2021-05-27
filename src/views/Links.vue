<template>
	<div>
		<div v-for="(link, index) in links" :key="index">
			<iframe :src="link"></iframe>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LinksView',
	data: () => ({
		links: [
			'https://www.npmjs.com/package/vue-access-x',
			'https://medium.com/@b.bhaskar.nair/  flutter-user-presence-using-firebase-cloud-firestore-f79f590eb64f'
		]
	}),
	created() {
		this.getData();
	},
	methods: {
		async getData() {
			const data = await fetch(
				'https://www.npmjs.com/package/vue-access-x'
			);
			console.log(data);
		}
	}
};
</script>

<style></style>
