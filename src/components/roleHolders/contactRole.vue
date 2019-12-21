<template>
	<div v-if="modal" class="roleCont--modal">
		<button class="cross" @click.self="closeModal">
			<v-icon
				@click.passive="closeModal"
				name="times"
				scale="1"
			></v-icon>
		</button>
		<v-icon class="icn" name="paper-plane" scale="3"></v-icon>
		<form @submit.prevent="sendMail">
			<label for="name">Name</label>
			<input type="name" id="name" required />
			<label for="mail">Mail Id</label>
			<input type="email" id="mail" required />
		</form>
	</div>
	<div v-else class="roleCont">
		<v-icon class="icn" name="paper-plane" scale="2"></v-icon>
	</div>
</template>

<script>
import { RoleCompMixin } from '@/components/roleHolders/RoleCompMixin';

export default {
	name: 'imgHolder',
	mixins: [RoleCompMixin],
	data() {
		return {
			timeout: []
		};
	}
};
</script>

<style></style>
