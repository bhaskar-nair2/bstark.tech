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
					<label for="msg">Message</label>
					<textarea
						class="input"
						cols="20"
						id="msg"
						rows="6"
						v-model="formData.message"
					/>
				</div>
				<div class="sub">
					<button type="submit">Send</button>
				</div>
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
	name: 'imgHolder',
	mixins: [RoleCompMixin],
	data() {
		return {
			timeout: [],
			formData: {}
		};
	},
	methods: {
		sendMail() {
			msgCollection.add(this.formData);
		}
	}
};
</script>

<style></style>
