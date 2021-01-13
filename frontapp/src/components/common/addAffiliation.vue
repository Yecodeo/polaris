<template>
	<form @submit.prevent="persiste(affiliation)">
		<b-field label="Organisation">
			<b-select 
				v-model="affiliation.organisation" 
				placeholder="Selectionnez une organisation" 
				required 
				expanded>
				<option v-for="(org, key) in organisations" :value="org" :key="key">
					{{ org }}
				</option>
			</b-select>
		</b-field>
		<b-field label="Poste">
			<b-input 
				v-model="affiliation.poste"
			></b-input>
		</b-field>
		<b-field label="Équipe">
			<b-input v-model="affiliation.equipe"></b-input>
		</b-field>
		<h6 class="title is-6">Dates</h6>
		<div class="columns">
			<div class="column is-6">
				<b-field v-model="affiliation.date.lte">
					<b-datepicker 
						placeholder="cliquez pour choisir" 
						v-model="affiliation.date.lte"
						>
					</b-datepicker>
				</b-field>
			</div>
			<div class="column is-6">
				<b-field v-model="affiliation.date.gte">
					<b-datepicker 
						placeholder="cliquez pour choisir" 
						v-model="affiliation.date.gte"
						>
					</b-datepicker>
				</b-field>
			</div>
		</div>
		<div class="columns">
			<div class="column is-full">
				<Autocomplete :api="api_url" 
					:values="['name']" 
					label="Pays" 
					required
					v-model="affiliation.pays" 
					/>
			</div>
		</div>
		<div class="columns">
			<div class="column is-full">
				<b-button 
					class="my-4" 
					type="is-success" 
					expanded
					native-type="submit"
					>Ajouter </b-button>
			</div>
		</div>
	</form>
</template>

<script>
	import Autocomplete from '../common/Autocomplete';
	import { create } from '../../helper/save';

export default {
	name: 'addAffiliation',
	components: {
		Autocomplete
	},
	data() {
		return {
			api_url: '',
			affiliation: {
				_user: '',
				organisation: '',
				poste: '',
				equipe: '',
				date: {
					lte: undefined,
					gte: undefined
				},
				pays: ''
			},
			organisations: ['Énergie, Recherche et Science', 'Économie et Société numériques',
				'Protection des consommateurs', 'Budget / Santé	'
			],
		}
	},
	mounted() {
		const url = this.$store.getters.getApiUrl;
		this.affiliation._user = this.$store.getters.getUser.id;
		this.api_url = `${url}/country/search?q=`;
		this.save_url = `${url}/affiliation/`;
	},
	methods: {
		dateformatter: function(date) {
			const options = {  
				year: 'numeric',  
				month: '2-digit',  
				day: '2-digit',  
				timeZone: 'Europe/Paris',
			}; 
			return new Intl.DateTimeFormat('fr-FR', options).format(date)
		},
		persiste: function(body) {
			create(this.save_url, body);
		},
	}
}
</script>

<style>

</style>