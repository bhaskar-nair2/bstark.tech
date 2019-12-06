<template>
	<div>
		<button @click="renderBoxes" class="reBtn" v-if="renderError">
			<v-icon name="sync-alt" />
		</button>
		<div id="mainGrid">
			<box
				:boxType="boxers.type"
				:key="boxers.id"
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
import box_maker from '@/services/boxMaker.js';
export default {
	components: {
		box
	},
	created() {
		this.renderBoxes();
	},
	data() {
		return {
			renderError: false,
			boxes: [],
			role: [
				'img',
				'logo',
				'Poem',
				'Optimus',
				'Composition',
				'Current State',
				'Contact',
				'Some_Shit',
				'Fav Song',
				'Some_Shit',
				'Some_Shit',
				'Role',
				'Song',
				'Quote',
				'Quote',
				'Quote',
				'tbw',
				'beeSite'
			]
		};
	},
	methods: {
		move: function() {
			this.boxes[4].position = [2, 2];
		},
		renderBoxes() {
			try {
				let boxxs = box_maker(7, 14, { t3: 3, t2: 6, t1: 9 });
				for (var z = 0; z < boxxs.length; z++) {
					boxxs[z].role = this.role[z];
				}
				this.boxes = boxxs;
				this.renderError = false;
			} catch (error) {
				this.renderError = true;
			}
		}
	},
	computed: {}
};
</script>

<style scoped>
</style>
