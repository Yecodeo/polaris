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
					v-model="affiliation.country" 
					/>
			</div>
		</div>
		<div class="columns">
			<div class="column">
			<b-checkbox v-model="affiliation.current">
                C'est mon affiliation actuel
            </b-checkbox>
			</div>
		</div>
		<div class="columns">
			<div class="column is-full">
				<b-button 
					class="my-4" 
					type="is-success" 
					expanded
					:disabled="toogleEnable()"
					native-type="submit"
					>Ajouter </b-button>
			</div>
		</div>
	</form>
</template>

<script>
	import Autocomplete from '../common/Autocomplete';
	import { create } from '../../helper/save';
	import toaster from '../../helper/toaster';

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
				country: '',
				current: false
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
		persiste: function(body) {
			create(this.save_url, body).then((res) => {
				const { data: { data: { result }}} = res;
				if (result === 'created') {
					toaster.success()
					// send envent to parent and close the affiliation
					this.$emit('toggle');	
				}
			}).catch( () => {
				toaster.fail()
			});
		},
		toogleEnable: function() {
			if (this.affiliation.organisation && this.affiliation.country) {
				return false;
			}
			return true;
		}
	}
}
</script>

<style>

</style>