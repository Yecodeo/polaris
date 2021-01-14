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
	import {update} from '../../helper/save';
	import socialChecker from '../../helper/socialChecker';
	import toaster from '../../helper/toaster';

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
			 * save when social's list change and filled
			 */
			socials: function () {
				if (socialChecker(this.socials)) {
					this.save({
						profil: {
							socials: this.socials
						}
					});
				}
			}
		},
		methods: {
			/**
			 * update given field
			 */
			save: function (body) {
				update(this.api_url, body).then((res) => {
					const { data: { data: { result }}} = res;
					if (result === 'updated') {
						toaster.success();
					}
				}).catch( (error) => {
					console.log(error);
					toaster.fail();
				});
			},
			/**
			 * save on values changing
			 */
			inputsHandler: function(input, select) {
				if(input && select) {
					this.save({
						profil: {
							socials: this.socials
						}
					})
				}
			},
			/**
			 * add new social field
			 */
			addField: function () {
				this.socials.push({
					name: '',
					url: ''
				});
			},
			/**
			 * remove click social field
			 */
			removeField: function (el) {
				this.socials.splice(el, 1);
			}
		}
	}
</script>