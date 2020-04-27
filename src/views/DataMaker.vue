<template>
	<div>
		<form @submit.prevent="writeData" class="data-form">
			<label for="type">type</label>
			<input id="type" required type="type" v-model="formData.type" />

			<label for="priority">priority</label>
			<input
				id="priority"
				required
				type="priority"
				v-model="formData.priority"
			/>
			<div class="props">
				<h3>Props</h3>
				<div
					:key="index"
					class="propdata"
					v-for="(prop, index) in propArr"
				>
					<input
						id="priority"
						required
						type="priority"
						v-model="prop.key"
					/>
					<input
						id="priority"
						required
						type="priority"
						v-model="prop.value"
					/>
					<button @click="remProp(index)" type="button">
						Remove Prop
					</button>
				</div>
				<button @click="addProp" type="button">Add Prop</button>
			</div>

			<button type="submit">Add to Firebase</button>
		</form>
	</div>
</template>

<script>
import { gridCollection } from '../firebaseConfig';

export default {
	name: 'DataMaker',
	data() {
		return {
			propArr: [{ key: '', value: '' }],
			formData: {
				type: '',
				priority: 1,
				props: {}
			}
		};
	},
	methods: {
		writeData() {
			var obj = Object.assign({}, this.formData);

			for (var i = 0; i < this.propArr.length; i++) {
				obj.props[this.propArr[i].key] = this.propArr[i].value;
			}
			// console.log(obj);
			gridCollection.add(this.formData);
		},
		addProp() {
			this.propArr.push({ key: '', value: '' });
		},
		remProp(index) {
			this.propArr.splice(index, 1);
		}
	}
};
</script>

<style lang="scss">
.data-form {
	display: flex;
	flex-flow: column;
	input {
		margin-bottom: 12px;
	}
	.propdata {
		display: flex;
		.input {
			margin: 0 10px 0 0;
		}
	}
}
</style>
