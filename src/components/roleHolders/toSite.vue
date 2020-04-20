<template>
	<div class="roleCont--modal" v-if="modal">
		<div class="crossHold">
			<button @click.self="closeModal" class="cross">
				<v-icon @click.passive="closeModal" name="times" scale="2" />
			</button>
		</div>
	</div>
	<div class="roleCont" v-else>
		<v-icon class="icn" name="paper-plane" scale="2"></v-icon>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';
import { msgCollection } from '../../firebaseConfig';

export default {
	name: 'contHolder',
	mixins: [RoleCompMixin],
	data() {
		return {
			timeout: [],
			formData: {},
			sending: false,
			message: ''
		};
	},
	methods: {
		sendMail() {
			this.sending = true;
			this.message = 'Sending Message...';
			msgCollection
				.add(this.formData)
				.then(() => {
					this.message = "YaY! I'll get back to you Soon!";
					setTimeout(this.closeModal, 1000);
				})
				.catch(() => {
					this.message = 'Some Error Occoured.. Please Try again';
					setTimeout(() => (this.sending = false), 500);
				});
		}
	}
};
</script>

<style></style>
