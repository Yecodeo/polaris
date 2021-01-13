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
						<AddAffiliation />
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
	import Social from '../common/Social';
	import {update} from '../../helper/save';
	import AddAffiliation from '../common/addAffiliation'

	export default {
		name: 'Profil',
		components: {
			Upload,
			Social,
			AddAffiliation
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
				affiliation: {
					organisation: '',
					equipe: '',
					date: {
						lte: '',
						gte: ''
					},
					pays: ''
				},
				organisations: ['Énergie, Recherche et Science', 'Économie et Société numériques',
					'Protection des consommateurs', 'Budget / Santé	'
				],
			}
		},
		beforeMount() {
			this.user = this.$store.getters.getUser;
		},
		mounted() {
			this.updateUser = `${this.$store.getters.getApiUrl}/user/${this.user.id}`
		},
		methods: {
			persiste: function(body) {
				update(this.updateUser, body);
			},
			toggle: function () {
				this.showAffeliation = !this.showAffeliation;
			},

		}

	}
</script>

<style>

</style>