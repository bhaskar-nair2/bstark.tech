<template>
	<div>
		<div class="reloadMsg" v-if="renderError">
			<a @click="renderBoxes" class="reBtn">
				<v-icon name="sync-alt" />
			</a>
			Math Fuckup. Please Reload.
		</div>
		<div
			:class="`mainGrid${this.isMobile ? '--mobile' : ''}`"
			:style="gridSize"
			id="mainGrid"
			v-else
		>
			<box
				:boxData="boxData"
				:key="boxData.id"
				v-for="boxData in boxes"
			></box>
		</div>
	</div>
</template>

<script>
import box from '@/components/box.vue';
import { box_maker } from '@/services/boxMaker.js';
import roleData from '@/roleData';

export default {
	name: 'GridMaker',
	components: {
		box
	},
	created: function() {
		this.setup();
	},
	mounted: async function() {
		await this.renderBoxes();
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
				this.t3 = 5;
				this.t2 = 8;
				this.t1 = 12;
			} else {
				this.rows = 6;
				this.cols = 17;
				this.t3 = this.getRandomArbitrary(2, 8);
				this.t2 = this.getRandomArbitrary(6, 12);
				this.t1 = this.getRandomArbitrary(8, 16);
			}
			this.role = roleData;
		},
		async renderBoxes() {
			var min_t1;
			var min_t2;
			var min_t3;

			if (this.isMobile) {
				min_t1 = 6;
				min_t2 = 4;
				min_t3 = 3;
			} else {
				min_t1 = 6;
				min_t2 = 4;
				min_t3 = 3;
			}

			try {
				let boxxs = await box_maker(this.rows, this.cols, {
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
				if (this.t1 <= min_t1 && this.t2 <= min_t2 && this.t3 <= min_t3) {
					console.log(this.t1, this.t2, this.t3);
					this.renderError = true;
					return;
				} else {
					if (this.t1 >= min_t1) this.t1 -= 1;
					else if (this.t2 >= min_t2) this.t2 -= 1;
					else if (this.t3 >= min_t3) this.t3 -= 1;
					this.renderBoxes();
				}
			}
		},
		getRandomArbitrary(min, max) {
			return parseInt(Math.random() * (max - min) + min);
		}
	},
	watch: {
		isMobile: {
			handler() {
				this.renderBoxes();
			}
		}
	}
};
</script>

<style></style>
