<template>
	<div>
		<div class="reloadMsg" v-if="renderError">
			<a @click="renderBoxes" class="reBtn">
				<v-icon name="sync-alt" />
			</a>
			Math Fuckup. Please Reload.
		</div>
		<div id="mainCont" v-else>
			<h1 :class="`grayzone${this.isMobile ? '--mobile' : ''}`">
				Grayzone
			</h1>
			<div
				:class="`mainGrid${this.isMobile ? '--mobile' : ''}`"
				:style="gridSize"
				id="mainGrid"
			>
				<box
					:boxData="boxData"
					:key="boxData.id"
					v-for="boxData in boxes"
				></box>
			</div>
			<social></social>
		</div>
	</div>
</template>

<script>
import box from '@/components/box.vue';
import { box_maker } from '@/services/boxMaker.js';
import roleData from '@/roleData';

export default {
	name: 'MainGridView',
	components: {
		box,
		social: () => import('@/components/socialNav')
	},
	created: function() {
		this.setup();
	},
	mounted: async function() {
		this.renderBoxes();
	},
	data() {
		return {
			/* TODO: make a function which will see if grid rows/cols are empty 
			 at the end and decrease the size of the grid */
			renderError: false,
			boxes: [],
			rows: 0,
			cols: 0,
			t3: 0,
			t2: 0,
			t1: 0,
			role: roleData
			// fetch this from firebase
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
		},
		priorityRole() {
			var role = this.role;
			return role.sort((v1, v2) =>
				// High number == more important
				// Easy to add more important items
				v1.priority < v2.priority ? 1 : -1
			);
		}
	},
	methods: {
		setup() {
			if (this.isMobile) {
				this.rows = 16;
				this.cols = 6;
				this.t3 = 3;
				this.t2 = 6;
				this.t1 = 12;
			} else {
				this.rows = 6;
				this.cols = 17;
				this.t3 = 4;
				this.t2 = 6;
				this.t1 = 12;
			}
			this.role = roleData;
		},
		renderBoxes() {
			try {
				// 7 rows 14 columns type3:3, type2:6 type1:9
				let boxxs = box_maker(this.rows, this.cols, {
					t3: this.t3,
					t2: this.t2,
					t1: this.t1
				});
				for (var z = 0; z < boxxs.length; z++) {
					boxxs[z].role = this.priorityRole[z];
				}
				this.boxes = boxxs;
				this.renderError = false;
			} catch (error) {
				this.renderError = true;
			}
		},
		setVals() {
			this.t3 = 3;
			this.t2 = 6;
			this.t1 = 9;
		}
		// getRandomArbitrary(min, max) {
		// 	return Math.random() * (max - min) + min;
		// }
	}
};
</script>

<style scoped></style>
