<template>
	<div class="roleStory--modal" v-if="modal">
		<div class="crossHold">
			<button @click.self="closeModal" class="cross">
				<v-icon @click.passive="closeModal" name="times" scale="2" />
			</button>
		</div>

		<div class="content">
			<div class="arrowHold">
				<button
					:disabled="arrowPos[0]"
					@click.capture="chgPage(-1)"
					class="arrow"
				>
					<v-icon name="chevron-left" scale="2" />
				</button>
			</div>
			<div class="page">
				<h3 v-if="curPage == 0">{{ dets.title }}</h3>
				<img :src="dets.imgUrl" class="color" />
				<h5 v-html="dets.pages[curPage].title"></h5>
				<p v-html="dets.pages[curPage].text"></p>
				<span class="pageNo">{{ curPage + 1 }}/{{ totPages }}</span>
			</div>
			<div class="arrowHold">
				<button
					:disabled="arrowPos[1]"
					@click.capture="chgPage(1)"
					class="arrow"
				>
					<v-icon name="chevron-right" scale="2" />
				</button>
			</div>
		</div>
	</div>
	<div class="roleStory" v-else>
		<div class="roleOverlay">Read..</div>
		<p>{{ textFmt(dets.title) }}</p>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'storyHolder', // stateless
	mixins: [RoleCompMixin],
	created() {
		// this.wavyImg();
	},
	data() {
		return {
			curPage: 0
		};
	},
	computed: {
		totPages: function() {
			return this.dets.pages.length;
		},
		arrowPos: function() {
			// return array to disable/enable arrows
			return [
				this.curPage == 0,
				this.curPage == this.dets.pages.length - 1
			];
		}
	},
	methods: {
		chgPage(dir) {
			this.curPage += dir;
		},
		closeModal() {
			this.modal = false;
			this.$emit('closeModal');
			this.curPage = 0;
		}
		// showModal() {
		// 	this.modal = false;
		// 	this.closeModal();
		// 	this.$router.push({ name: 'blog', params: { id: 1 } });
		// }
	}
};
</script>

<style></style>
