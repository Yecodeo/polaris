<template>
	<div class="media-social">
		<div v-for="(media, index) in socials" :key="`social-${index}`">
			<b-field>
				<b-input :value="media.url" expanded></b-input>
				<b-select :value="media.name " placeholder="selectionnez un media">
					<option v-for="(option, key) in listsocials" :value="option" :key="key">
						{{ option }}
					</option>
				</b-select>
				<b-button @click="addField" type="is-success is-light">+</b-button>
				<b-button @click="removeField" :disabled="socials.length <= 1"
					type="is-danger is-light">-</b-button>
			</b-field>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Social',
	data() {
		return {
			listsocials: ['Facebook', 'Twitter', 'Linkedin', 'Orcid'],
		}
	},
	props: {
		socials: []
	},
	methods: {
		addField: function () {
			this.user.profil.socials.push({
				name: '',
				url: ''
			});
		},
		removeField: function (el) {
			const index = this.user.profil.socials.indexOf(el);
			this.user.profil.socials.splice(index, 1);
		}
	}

}
</script>

<style>

</style>