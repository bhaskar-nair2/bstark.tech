<template>
	<div class="links-holder">
		<template v-for="(item, index) in items">
			<section class="link-card" :key="index">
				<div class="link-image-holder">
					<img class="link-image" style="" :src="item.image" />
				</div>
				<div class="link-content">
					<h1 class="link-title">
						<a :href="item.link" target="_blank">
							{{ item.title }}
						</a>
					</h1>
					<p class="link-description">{{ item.description }}</p>
					<a class="link-link" :href="item.link" target="_blank">
						View on {{ item.site }}
					</a>
				</div>
			</section>
		</template>
	</div>
</template>

<script>
export default {
	name: 'LinksView',
	data: () => ({
		items: [
			{
				site: 'npmjs',
				link: 'https://www.npmjs.com/package/vue-access-x'
			},
			{
				site: 'medium',
				link:
					'https://medium.com/@b.bhaskar.nair/  flutter-user-presence-using-firebase-cloud-firestore-f79f590eb64f'
			},
			{
				site: 'stackoverflow',
				link: 'https://stackoverflow.com/story/bhaskar_nair2'
			}
		]
	}),
	created() {
		this.setData();
	},
	methods: {
		async setData() {
			this.items.forEach(async (item, index) => {
				const { data } = await this.$axios.get(item.link);
				this.$set(
					this.items,
					index,
					Object.assign({}, item, this.getMetaData(data))
				);
			});
		},
		getMetaData(htmlData) {
			let resp = {
				title: '',
				image: '',
				description: '',
				site_name: ''
			};

			var el = document.createElement('html');
			el.innerHTML = htmlData;

			const metas = el.getElementsByTagName('meta');

			metas.forEach(meta => {
				switch (meta.getAttribute('property')) {
					case 'og:image':
						resp.image = meta.getAttribute('content');
						break;
					case 'og:title':
						resp.title = meta.getAttribute('content');
						break;
					case 'og:description':
						resp.description = meta.getAttribute('content');
						break;
					default:
						console.log(meta.getAttribute('property'));
				}
			});

			return resp;
		}
	}
};
</script>

<style lang="scss">
.links-holder {
	display: grid;
	padding: 20px;
	gap: 15px;
	grid-template-columns: repeat(1, 1fr);
	max-width: 1280px;

	@media (min-width: 786px) {
		gap: 20px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1024px) {
		gap: 25px;
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 1280px) {
		gap: 30px;
		grid-template-columns: repeat(4, 1fr);
	}
}

.link-card {
	// Function
	display: flex;
	flex-wrap: wrap;
	place-content: start;
	text-align: left;
	// Deco
	box-shadow: 3px 3px 4px rgba($color: #000000, $alpha: 0.25),
		-3px -3px 4px rgba($color: #ffffff, $alpha: 0.7);
	border-radius: 15px;
	padding: 15px;
	min-height: 30vh;
}

.link-image-holder {
	grid-row: 1;
	height: 50%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.link-image {
	width: 100%;
	height: 100%;
	border-radius: 15px;
	object-fit: cover;
}

.link-content {
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 50%;
	width: 100%;
}

.link-title {
	width: 100%;
	height: 30%;
	max-height: 50px;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	a {
		color: rgba($color: #000000, $alpha: 0.8);
	}
}

.link-description {
	height: 30%;
	overflow: hidden;
	text-overflow: ellipsis;
}

.link-link {
	height: 10%;
	position: absolute;
	font-size: 12px;
	color: grey;
	bottom: 0;
}
</style>
