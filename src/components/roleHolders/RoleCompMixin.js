export const RoleCompMixin = {
	name: 'roleCompMixin',
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
	}
};
