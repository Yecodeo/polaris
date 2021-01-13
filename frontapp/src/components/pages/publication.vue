<template>
	<section>
		<div class="columns is-mobile is-centered mt-3 mb-0">
			<div class="column is-half">
				<div class="columns">
					<div class="column is-12">
						<b-field>
							<b-input 
								v-model="input" 
								expanded 
								placeholder="Rechercher une publication" 
								type="search">
							</b-input>
							<p class="control">
								<b-button @click="getPublication" class="button is-primary">
									Recherche
								</b-button>
							</p>
						</b-field>
					</div>
				</div>
			</div>
		</div>
		<div class="column is-12">

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
			this.api_url = `${this.$store.getters.getApiUrl}/affiliation/search?q=`
		},
		computed: {

		},
		methods: {
			getPublication: function () {
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