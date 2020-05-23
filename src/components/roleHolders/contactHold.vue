<template>
	<div class="roleCont--modal" v-if="modal">
		<div class="crossHold">
			<button @click.self="closeModal" class="cross">
				<v-icon @click.passive="closeModal" name="times" scale="2" />
			</button>
		</div>
		<div class="content">
			<p class="formIcon">
				<v-icon class="icn" name="paper-plane" scale="3"></v-icon>
			</p>
			<form @submit.prevent="sendMail">
				<div class="inputBox">
					<label for="name">Name</label>
					<input
						class="input"
						id="name"
						required
						type="name"
						v-model="formData.name"
					/>
				</div>
				<div class="inputBox">
					<label for="mail">Mail Id</label>
					<input
						class="input"
						id="mail"
						required
						type="email"
						v-model="formData.email"
					/>
				</div>
				<div class="inputBox">
					<label for="subject">Subject</label>
					<input
						class="input"
						id="subject"
						required
						type="text"
						v-model="formData.subject"
					/>
				</div>
				<div class="inputBox">
					<label for="msg">Message</label>
					<textarea
						class="input"
						cols="20"
						id="msg"
						required
						rows="6"
						v-model="formData.message"
					/>
				</div>
				<div class="sub">
					<button class="btn" type="submit">Send</button>
				</div>
				<p v-if="sending">{{ message }}</p>
			</form>
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
				.add({
					to: 'b.bhaskar.nair@gmail.com',
					from: this.formData.email,
					replyTo: this.formData.email,
					message: {
						subject: `New message from ${this.formData.name}: ${this.formData.subject}`,
						text: this.formData.message
					}
				})
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
