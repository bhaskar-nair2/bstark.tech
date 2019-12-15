<template>
	<div>
		<div class="reloadMsg" v-if="renderError">
			<a @click="renderBoxes" class="reBtn">
				<v-icon name="sync-alt" />
			</a>
			Math Fuckup. Please Reload.
		</div>
		<div id="mainCont" v-else>
			<h1 class="grayzone">Grayzone</h1>
			<div :style="gridSize" id="mainGrid">
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

export default {
	name: 'MainGridView',
	components: {
		box,
		social: () => import('@/components/socialNav')
	},
	created() {
		if (this.isMobile) {
			this.rows = 16;
			this.cols = 6;
		}
	},
	mounted() {
		this.renderBoxes();
	},
	data() {
		return {
			/* TODO: make a function which will see if grid rows/cols are empty 
			 at the end and decrease the size of the grid */
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
					priority: 2,
					props: {
						name: 'disp',
						imgUrl: 'https://picsum.photos/id/1005/400'
					}
				},
				{
					type: 'img',
					priority: 3,
					props: {
						name: 'logo',
						imgUrl: 'https://picsum.photos/id/1027/500'
					}
				},
				{
					type: 'poem',
					priority: 3,
					props: {
						title: 'Ye Pal',
						text:
							'Ye pal, sapno ki tarah hi to hote hai. <br> Aur hum, in sapno ke liye hi to jeete hai. <br> Ek choti si muskaan aa jati hai, in yado se. <br>  Saalo baad bhi Chaar bate ho jati hai, un yaaro se. <br> 	Ye pal, sapno ki hi tarah to hote hai,  <br> 	Aur hum, in sapno ke liye hi to jeete hai.'
					}
				},
				{ type: 'site', priority: 1, props: { name: 'optimus' } },
				{ type: 'comp', priority: 1, props: { name: 'His Last Words' } },
				{ type: 'current_state', priority: 1, props: { name: 'state' } },
				{ type: 'contact', priority: 1, props: { name: 'Bhaskar' } },
				{ type: 'resume', priority: 1, props: { name: 'canvaRes' } },
				{
					type: 'song',
					priority: 1,
					props: {
						title: 'Lil Wayne- Mona Lisa ft. Kendrick Lamar',
						imgUrl:
							'http://utopianmagazine.com/wp-content/uploads/2019/05/Kendrick-Lamar-Lil-wayne-mona-lisa-utopianmagazine-1024x1024.jpg'
					}
				},
				{
					type: 'song',
					priority: 2,
					props: {
						title: 'Eden- Drugs',
						imgUrl:
							'https://images.genius.com/99b2b30cf71dc2414519eb5cf0e5062f.1000x1000x1.jpg'
					}
				},
				{ type: 'comp', priority: 1, props: { name: 'With Love' } },
				{
					type: 'poem',
					priority: 2,
					props: {
						title: 'December Ki Raat',
						text: `December ki raat, platform pe<br>
                   Ye thandi hawa, aur mera garam dhoa<br>
                   Meri aankhe hai vyast, ye cigarette ka kash<br>
                   Har saas me hai ye, har cheez me hai ye ab<br>
                   <br>
                   Ab man nahi hota iska, pyaas lagti hai<br>
                   Ise chodne ki ab na koi, bhadaas lagti hai.<br>
                   Ek buzurg aaye, meri aur<br>
                   Maine sabki tarah, unhe andekha kar diya<br>
                   Magar wo, Wo aaye mere pass<br>
                   Aur badi shiddat se pucha<br>
                   Shakkar hogi aape pass?<br>
                   <br>
                   Maine ek aur kash liya, aur unhe dekha<br>
                   Mujhe nai samaj aaya ye unhone kya bola, 'Shakkar?', maine pucha<br>
                   'Ha beta, shakkar, diabetics hai hame,<br>
                   Shakkar khane ka man hai.'<br>
                   Me hansa, 'baba, diabetes hai,<br>
                   Shakkar khaoge, mar jaoge!' Is bar, wo hase<br>
                   'Beta, cigarette kaun phukta hai, jeene ke liye?`
					}
				},
				{
					type: 'img',
					priority: 2,
					props: {
						name: 'loveme',
						imgUrl: 'https://picsum.photos/800'
					}
				},
				{
					type: 'song',
					priority: 1,
					props: {
						title: 'Lil Wayne- Mona Lisa ft. Kendrick Lamar',
						imgUrl:
							'http://utopianmagazine.com/wp-content/uploads/2019/05/Kendrick-Lamar-Lil-wayne-mona-lisa-utopianmagazine-1024x1024.jpg'
					}
				},
				{ type: 'quote', priority: 1, props: {} },
				{ type: 'quote', priority: 1, props: {} },
				{ type: 'quote', priority: 1, props: {} },
				{ type: 'site', priority: 1, props: { name: 'tbw' } },
				{ type: 'site', priority: 1, props: { name: 'beeSite' } }
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
		}
	}
};
</script>

<style scoped></style>
