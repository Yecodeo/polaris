<template>
	<div class="media-social">
		<div v-for="(media, index) in socials" :key="`social-${index}`">
			<b-field>
				<b-input 
					@blur="inputsHandler(media.url, media.name)" 
					v-model="media.url" 
					expanded>
				</b-input>
				<div class="select">
					<select
						@change="inputsHandler(media.url, media.name)"
						v-model="media.name" 
						placeholder="selectionnez un media">
					>
						<option v-for="(option, key) in listsocials" :value="option" :key="key">
							{{ option }}
						</option>
					</select>
				</div>
				<b-button 
					@click="addField" 
					:disabled="socials.length == 4" 
					type="is-success is-light">
					+
				</b-button>
				<b-button 
					@click="removeField(index)" 
					:disabled="socials.length <= 1"
					type="is-danger is-light">
					-
				</b-button>
			</b-field>
		</div>
	</div>
</template>

<script>
	import save from '../../helper/save';
	import socialChecker from '../../helper/socialChecker';

	export default {
		name: 'Social',
		data() {
			return {
				listsocials: ['Facebook', 'Twitter', 'Linkedin', 'Orcid'],
			}
		},
		props: ['socials', 'api_url'],
		watch: {
			/**
			 * save one the social list change and it is filled
			 */
			socials: function () {
				if (socialChecker(this.socials)) {
					this.persiste({
						profil: {
							socials: this.socials
						}
					});
				}
			}
		},
		methods: {
			persiste: function (body) {
				save(this.api_url, body);
			},
			/**
			 * save on values changing
			 */
			inputsHandler: function(input, select) {
				if(input && select) {
					this.persiste({
						profil: {
							socials: this.socials
						}
					})
				}
			},
			addField: function () {
				this.socials.push({
					name: '',
					url: ''
				});
			},
			removeField: function (el) {
				this.socials.splice(el, 1);
			}
		}
	}
</script>

<style>

</style>