<template>
	<section>
		<div class="columns is-centered mt-3 mb-0">
			<div class="column is-half">
				<form class="mb-5" @submit.prevent="getPublication()">
					<b-field>
						<b-input v-model="input" expanded placeholder="Rechercher une publication" type="search">
						</b-input>
						<p class="control">
							<b-button native-type="submit" class="button is-primary">
								Recherche
							</b-button>
						</p>
					</b-field>
				</form>
				<template v-for="(publication, key) in result">
					<div :key="key" class="columns">
						<div class="column">
							<p class="bd-notification is-info title is-4 mt-4 mb-2 is-size-6-mobile">
								{{publication.titre}}
							</p>
							<div class="columns is-mobile">
								<div class="column">
									<p class="bd-notification is-info subtitle is-6 ">
										<span class="has-text-weight-bold is-size-7-mobile">
											Date de publication :
										</span>
										<span class="is-size-7-mobile">
											{{publication.annee}}
										</span>
									</p>
								</div>
								<div class="column">
									<p class="bd-notification is-info">
										<span class="has-text-weight-bold is-size-7-mobile">
											Langue de publication :
										</span>
										<span class="is-size-7-mobile">
											{{publication.annee}}
										</span>
									</p>
								</div>
							</div>
							<div class="columns">
								<div class="column">
									<div class="bd-notification is-info">
										<div class="has-text-weight-bold is-size-7-mobile">Auteurs de la publication :
										</div>
										<div class="is-inline" v-for="(auteur, index) in publication.auteurs"
											:key="index">
											<b-tag class="mr-1 is-size-7-mobile" type="is-primary">
												{{ auteur }}
											</b-tag>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Publication',
		components: {


		},
		data: function () {
			return {
				api_url: '',
				result: [],
				input: ''
			}
		},
		mounted: function () {
			this.api_url = `${this.$store.getters.getApiUrl}/publication/search?q=`
		},
		computed: {

		},
		methods: {
			getPublication: function () {
				console.log(`${this.api_url}${this.input}`)
				let self = this;
				axios.get(`${this.api_url}${this.input}`).then(function (res) {
					self.result = res.data.data;
				}).catch(error => console.error(error));
			}
		}
	}
</script>

<style>

</style>