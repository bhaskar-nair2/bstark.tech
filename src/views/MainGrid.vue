<template>
	<div>
		<div class="reloadMsg" v-if="renderError">
			<a @click="renderBoxes" class="reBtn">
				<v-icon name="sync-alt" />
			</a>
			Math Fuckup. Please Reload.
		</div>
		<div id="mainCont" v-else>
			<h1 class="grayzone">Greyzone</h1>
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

export default {
	name: 'MainGridView',
	components: {
		box,
		social: () => import('@/components/socialNav')
	},
	created: function() {
		if (this.isMobile) {
			this.rows = 16;
			this.cols = 6;
		}
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
						imgUrl:
							'https://firebasestorage.googleapis.com/v0/b/bstark-tech.appspot.com/o/IMG_20181208_194704_037.jpg?alt=media&token=90b4e5cf-f1d8-41d9-a80c-d41ce6961624'
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
					priority: 2,
					props: {
						title: 'Ye Pal',
						text:
							'Ye pal, sapno ki tarah hi to hote hai. <br> Aur hum, in sapno ke liye hi to jeete hai. <br> Ek choti si muskaan aa jati hai, in yado se. <br>  Saalo baad bhi Chaar bate ho jati hai, un yaaro se. <br> 	Ye pal, sapno ki hi tarah to hote hai,  <br> 	Aur hum, in sapno ke liye hi to jeete hai.'
					}
				},
				{ type: 'site', priority: 1, props: { name: 'optimus' } },
				{
					type: 'story',
					priority: 1,
					props: {
						title: 'His Last Words',
						pages: [
							{
								title: '',
								text: `Hey buddy, It's been a long time since we last spoke. 
						Life, you know how it is, all these responsibilities all the work, 
						none of us really has the time for each other. I loved the way we 
						used to be in school, we were there everyone was and we used to 
						enjoy so much all those walks after class, taking each other's 
						case, teasing our romeo with his new girlfriend's name and going 
						around trying to do new things which mostly resulted us standing in 
						front of our house master, I so wanna go back to them. But now, it's 
						gone just disappeared, it's like a void which no one can ever fill. 
						There are people, people whom I live with, people whom I am friends 
						with but people I barely know, I barely understand.`
							},
							{
								title: '',
								text: `They scare me, this 
						whole thing scares me, I don't know who to talk to, I don't know who to 
						trust here, I don't know who to rely on. Because every time I do, I end 
						up hurt, I end up humiliated, I end up alone. I don't even know what I 
						want anymore, I don't even know why am I here. I feel as if I am lost or 
						at least the purpose I was living for is. This is not what I wanted, I 
						wanted to be free, not chained up like this, chained up by all these
						watching eyes with those knives, bloody from the backs they have stabbed.
						These eyes, they scare me, I never used to care about what people think 
						of me back then but back then, it was different, because I had you, 
						i had my people, the ones that were there, that were my friends and that's
						when I knew that I could conquer the world with you because your eyes 
						never chained me your knives were blunt in for me, but now here I stand,
						alone, that void, ever so deep, grows bigger, that distrust, ever so 
						powerful, becoming unfathomable. Hey, I am scared today, but it's the 
						last time because I know, you can't come back to me.`
							}
						]
					}
				},
				{ type: 'current_state', priority: 1, props: { name: 'state' } },
				{ type: 'contact', priority: 1, props: { name: 'Bhaskar' } },
				{ type: 'resume', priority: 1, props: { name: 'canvaRes' } },
				{
					type: 'song',
					priority: 3,
					props: {
						title: 'Post Rock',
						caption: 'Give it a try',
						vidUrl: 'https://www.youtube.com/embed/qtGWaQ-arnw',
						imgUrl:
							'https://s3.amazonaws.com/factmag-images/wp-content/uploads/2016/04/02162215/FACT30BestPostRockAlbums-illustrationJosephGough.jpg'
					}
				},
				{
					type: 'song',
					priority: 2,
					props: {
						title: 'Eden- Drugs',
						caption: '<3',
						vidUrl: 'https://www.youtube.com/embed/szIDM99kRNM',
						imgUrl:
							'https://firebasestorage.googleapis.com/v0/b/bstark-tech.appspot.com/o/99b2b30cf71dc2414519eb5cf0e5062f.1000x1000x1.jpg?alt=media&token=df1c60cb-d514-4fd8-be37-9731596cb956'
					}
				},
				{
					type: 'poem',
					priority: 2,
					props: {
						title: 'Smoke in my Veins',
						text: `Watch it dance-the world's heaving turning,<br>
									Instants pass and answer all life's yearning,<br>
									Count it up-the sands flying through the glass.<br>
									Slurp life down, let its pickle end your fast.<br>
									Chemicals courses and satisfaction slowly fades...<br>
									Flesh enlists in ecstasy as bliss plough your veins,<br>
									And doom spreads its wares on your life's cracked remains.`
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
						caption: 'This song..',
						vidUrl: 'https://www.youtube.com/embed/fhauhH4FR84',
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
