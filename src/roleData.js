const role = [
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
			title: 'Crywolf & EDEN- Stomach It',
			caption: '<3',
			vidUrl: 'https://www.youtube.com/embed/CmEK31ghdFM',
			imgUrl:
				'https://firebasestorage.googleapis.com/v0/b/bstark-tech.appspot.com/o/hqdefault.jpg?alt=media&token=20f3e73a-cb47-41a9-85c3-cb51d977b086'
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
			name: 'streetArt',
			imgUrl:
				'https://firebasestorage.googleapis.com/v0/b/bstark-tech.appspot.com/o/IMG_20200309_142327.jpg?alt=media&token=b967479a-8447-44a6-a9e4-06df30b5444a'
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
	{
		type: 'route-dis',
		priority: 1,
		props: {
			text: 'Blog',
			route: 'blogReader'
		}
	},
	{ type: 'to_site', priority: 2, props: { name: 'dribble' } },
	{ type: 'to_site', priority: 1, props: { name: 'ig' } },
	{ type: 'to_site', priority: 1, props: { name: 'linkedin' } },
	{ type: 'quote', priority: 1, props: {} },
	{ type: 'quote', priority: 1, props: {} },
	{ type: 'site', priority: 1, props: { name: 'tbw' } },
	{ type: 'site', priority: 1, props: { name: 'beeSite' } }
];

export default role;
