<template>
	<form @submit.prevent="persiste(affiliation)">
		<b-field label="Organisation">
			<b-select 
				v-model="affiliation.organisation" 
				placeholder="Selectionnez une organisation" 
				required 
				expanded>
				<option v-for="(org, key) in organisations" :value="org.name" :key="key">
					{{ org.name }}
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
				<Autocomplete :api="searchCountry" 
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
	import axios from 'axios';

export default {
	name: 'addAffiliation',
	components: {
		Autocomplete
	},
	data() {
		return {
			searchCountry: '',
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
			organisations: [],
		}
	},
	mounted() {
		/**
		 * setup api urls
		 */
		const url = this.$store.getters.getApiUrl;
		this.affiliation._user = this.$store.getters.getUser.id;
		this.searchCountry = `${url}/country/search?q=`;
		this.saveAffiliation = `${url}/affiliation/`;

		/**
		 * Get list of organisation
		 */
		axios.get(`${url}/organisation/`).then(org => {
			this.organisations = org.data.data;
		});
	},
	methods: {
		/**
		 * Create a new Affiliation
		 */
		persiste: function(body) {
			create(this.saveAffiliation, body).then((res) => {
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
		/**
		 * Enable button save or not
		 */
		toogleEnable: function() {
			if (this.affiliation.organisation && this.affiliation.country) {
				return false;
			}
			return true;
		}
	}
}
</script>