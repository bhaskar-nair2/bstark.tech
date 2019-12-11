export const RoleCompMixin = {
	name: 'roleCompMixin',
	created() {
		setInterval(this.colorImg, Math.random() * 10000);
	},
	data() {
		return {
			color: (Math.random() * 73).toFixed(0) % 3 == 0 ? true : false
		};
	},
	props: {
		typ: {
			type: String,
			default: 'box1'
		}
	},
	computed: {
		size: function() {
			var num = 5;
			switch (this.typ) {
				case 'box1':
					num = this.isMobile ? '6vh' : '5vw';
					break;
				case 'box2':
					num = this.isMobile ? '12vh' : '10vw';
					break;
				case 'box3':
					num = this.isMobile ? '18vh' : '15vw';
					break;
			}
			return { width: num, height: num };
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
					return text + '...';

				default:
					return text;
			}
		}
	}
};
