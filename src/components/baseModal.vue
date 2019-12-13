<template>
	<div v-if="modal" class="modalPane">
		<div class="baseModal">
			<div class="top">
				<div class="title">
					<h4>Some Title</h4>
				</div>
				<div class="cross">
					<v-icon name="times" scale="1" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'baseModal',
	data() {
		return {
			height: '20vh',
			width: '30vw',
			modal: false
		};
	}
};
</script>

<style></style>
