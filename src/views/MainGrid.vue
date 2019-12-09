<template>
	<div>
		<div class="reloadMsg" v-if="renderError">
			<a @click="renderBoxes" class="reBtn">
				<v-icon name="sync-alt" />
			</a>
			Math Fuckup. Please Reload.
		</div>
		<div id="mainCont" v-else>
			<h1>Grayzone</h1>
			<div :style="gridSize" id="mainGrid">
				<box
					:boxType="boxers.type"
					:key="boxers.id"
					:mobile="isMobile"
					:pos="boxers.position"
					:role="boxers.role"
					:typ="boxers.type"
					v-for="boxers in boxes"
				></box>
			</div>
			<div class="socialRow">
				<v-icon class="socialIcon" name="brands/linkedin" scale="2" />
				<v-icon class="socialIcon" name="brands/instagram" scale="2" />
				<v-icon class="socialIcon" name="brands/twitter" scale="2" />
			</div>
		</div>
	</div>
</template>

<script>
import box from '@/components/box.vue';
import { box_maker } from '@/services/boxMaker.js';

export default {
	name: 'MainGridView',
	components: {
		box
	},
	created() {
		if (this.isMobile) {
			this.rows = 20;
			this.cols = 6;
		}
	},
	mounted() {
		this.renderBoxes();
	},
	data() {
		return {
			renderError: false,
			boxes: [],
			rows: 7,
			cols: 14,
			t3: 3,
			t2: 6,
			t1: 9,
			// fetch this from firebase
			role: [
				{
					type: 'img',
					props: { name: 'disp', url: 'https://picsum.photos/id/1005/400' }
				},
				{
					type: 'img',
					props: {
						name: 'logo',
						url: 'https://picsum.photos/id/1027/500'
					}
				},
				{ type: 'poem', props: {} },
				{ type: 'site', props: { name: 'optimus' } },
				{ type: 'comp', props: { name: 'His Last Words' } },
				{ type: 'current_state', props: { name: 'state' } },
				{ type: 'contact', props: { name: 'Bhaskar' } },
				{ type: 'resume', props: { name: 'canvaRes' } },
				{ type: 'song', props: {} },
				{ type: 'comp', props: { name: 'With Love' } },
				{ type: 'poem', props: {} },
				{
					type: 'img',
					props: {
						name: 'loveme',
						url: 'https://picsum.photos/200'
					}
				},
				{ type: 'role', props: {} },
				{ type: 'song', props: {} },
				{ type: 'quote', props: {} },
				{ type: 'quote', props: {} },
				{ type: 'quote', props: {} },
				{ type: 'site', props: { name: 'tbw' } },
				{ type: 'site', props: { name: 'beeSite' } }
			]
		};
	},
	computed: {
		gridSize() {
			return {
				'grid-template-rows': `repeat(${this.rows}, ${
					this.isMobile ? '6vh' : '5vw'
				})`,
				'grid-template-columns': `repeat(${this.cols}, ${
					this.isMobile ? '6vh' : '5vw'
				})`
			};
		}
	},
	methods: {
		renderBoxes() {
			try {
				// 7 rows 14 columns type3:3, type2:6 type1:9
				let boxxs = box_maker(this.rows, this.cols, {
					t3: this.t3,
					t2: this.t2,
					t1: this.t1
				});
				for (var z = 0; z < boxxs.length; z++) {
					boxxs[z].role = this.role[z];
				}
				this.boxes = boxxs;
				this.renderError = false;
			} catch (error) {
				this.renderError = true;
			}
		}
	}
};
</script>

<style scoped>
</style>
