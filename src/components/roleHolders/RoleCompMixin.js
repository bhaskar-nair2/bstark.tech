export const RoleCompMixin = {
	name: 'roleCompMixin',
	created() {
		setInterval(this.colorImg, Math.random() * 10000 * 2);
	},
	props: {
		typ: {
			type: String,
			default: 'box1'
		},
		dets: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			color: (Math.random() * 13).toFixed(0) % 3 == 0 ? true : false, // 1 in 3 chances tobe colored
			typeSize: [
				{
					box: 'box1',
					size: '5vw',
					mobSize: '6vh',
					txtLen: 3
				},
				{
					box: 'box2',
					size: '10vw',
					mobSize: '12vh',
					txtLen: 7
				},
				{
					box: 'box3',
					size: '15vw',
					mobSize: '18vh',
					txtLen: 10
				}
			]
		};
	},

	computed: {
		base: function() {
			return this.typeSize.findOne(type => type.box == this.typ);
		},
		size: function() {
			return this.isMobile
				? { width: this.base.size, height: this.base.size }
				: { width: this.base.mobSize, height: this.base.mobSize };
		}
	},
	methods: {
		colorImg() {
			setTimeout(() => {
				this.color = !this.color;
			}, 10000);
		},
		textFmt(text) {
			switch (this.typ) {
				case 'box1':
					return (
						text
							.split(' ')
							.slice(0, 3)
							.join(' ') + '...'
					);
				case 'box2':
					return (
						text
							.split(' ')
							.slice(0, 7)
							.join(' ') + '...'
					);
				case 'box3':
					return (
						text
							.split(' ')
							.slice(0, 10)
							.join(' ') + '...'
					);

				default:
					return text;
			}
		}
	}
};
