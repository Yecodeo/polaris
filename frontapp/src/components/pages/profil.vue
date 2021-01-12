<template>
	<section>
		<div class="form">
			<div class="columns">
				<div class="column is-two-fifths mt-4">
					<b-field label="Prénom">
						<b-input 
							v-model="user.firstname" 
							@blur="persiste({firstname: user.firstname})">
						</b-input>
					</b-field>
					<b-field label="Nom">
						<b-input 
							v-model="user.lastname" 
							@blur="persiste({lastname: user.lastname})">
						</b-input>
					</b-field>
					<b-field label="About me">
						<b-input 
							v-model="user.profil.aboutme" 
							type="textarea" 
							maxlength="400"
							@blur="persiste({profil: { aboutme:  user.profil.aboutme }})">
						</b-input>
					</b-field>
					<h6 class="title is-6">Social Ids</h6>
					<Social 
						:socials="user.profil.socials" 
						:api_url="updateUser"
					/>

					<b-button class="my-4" v-on:click="toggle" type="is-primary is-light">Ajouté une affiliation
					</b-button>
					<a 
						v-on:click="toggle" 
						v-if="showAffeliation" 
						class="delete my-4 is-pulled-right has-background-danger">
					</a>
					<template v-if="showAffeliation">
						
						<b-field label="Organisation">
							<b-select required placeholder="Selectionnez une organisation" expanded>
								<option v-for="(org, key) in organisations" :value="org" :key="key">
									{{ org }}
								</option>
							</b-select>
						</b-field>
						<b-field label="Équipe">
							<b-input></b-input>
						</b-field>
						<h6 class="title is-6">Dates</h6>
						<div class="columns">
							<div class="column is-6">
								<b-field>
									<b-datepicker placeholder="cliquez pour choisir" v-model="dates.starts">
									</b-datepicker>
								</b-field>
							</div>
							<div class="column is-6">
								<b-field>
									<b-datepicker placeholder="cliquez pour choisir" v-model="dates.ends">
									</b-datepicker>
								</b-field>
							</div>
						</div>
						<div class="columns">
							<div class="column is-full">
								<Autocomplete 
									:api="api_url" 
									:values="['name']"
									label="Pays"
									dispatch="setCountry"
									required
								/>
							</div>
						</div>

					</template>

				</div>
			</div>
			<div class="columns">
				<div class="column is-four-fifths">
					<Upload />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Upload from '../common/Upload';
	import Autocomplete from '../common/Autocomplete';
	import Social from '../common/Social';
	import save from '../../helper/save';

	export default {
		name: 'Profil',
		components: {
			Upload,
			Autocomplete,
			Social,
		},
		data() {
			return {
				api_url: '',
				updateUser: '',
				user: '',
				dates: {
					starts: null,
					ends: null
				},
				showAffeliation: true,
				country: {},
				organisations: ['Énergie, Recherche et Science', 'Économie et Société numériques',
					'Protection des consommateurs', 'Budget / Santé	'
				],
				name: ''

			}
		},
		beforeMount() {
			this.user = this.$store.getters.getUser;
		},
		mounted() {
			this.api_url = `${this.$store.getters.getApiUrl}`,
			this.updateUser = `${this.api_url}/user/${this.user.id}`
		},
		methods: {
			persiste: function(body) {
				const url = `${this.api_url}/user/${this.user.id}`
				save(url, body);
			},
			toggle: function () {
				this.showAffeliation = !this.showAffeliation;
			},

		}

	}
</script>

<style>

</style>