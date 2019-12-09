<template>
	<div>
		<i @click="renderBoxes" class="reBtn" v-if="renderError">
			<v-icon name="sync-alt" />
		</i>
		<div :style="gridSize" id="mainGrid" v-else>
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
			this.rows = 14;
			this.cols = 7;
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
			// fetch this from firebase
			role: [
				{
					type: 'img',
					props: { name: 'disp', url: 'https://picsum.photos/500' }
				},
				{
					type: 'img',
					props: {
						name: 'logo',
						url: 'https://picsum.photos/300/300?grayscale'
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
						url: 'https://picsum.photos/100?grayscale'
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
					t3: 3,
					t2: 6,
					t1: 9
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
