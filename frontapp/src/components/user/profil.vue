<template>
	<section>
		<div class="form">
			<div class="columns">
				<div class="column is-two-fifths mt-4">
					<b-field label="Prénom">
						<b-input></b-input>
					</b-field>
					<b-field label="Nom">
						<b-input></b-input>
					</b-field>
					<b-field label="About me">
						<b-input type="textarea" minlength="10" maxlength="100"></b-input>
					</b-field>
					<h6 class="title is-6">Social Ids</h6>

					<div class="media-social">
						<div v-for="(media, index) in socialInputs" :key="`social-${index}`">
							<b-field>
								<b-input v-model="media.value" expanded></b-input>
								<b-select v-model="media.select" placeholder="selectionnez un media">
									<option v-for="(option, key) in socials" :value="option" :key="key">
										{{ option }}
									</option>
								</b-select>
								<b-button @click="addField" type="is-success is-light">+</b-button>
								<b-button @click="removeField" :disabled="socialInputs.length <= 1"
									type="is-danger is-light">-</b-button>
							</b-field>
						</div>
					</div>

					<b-button class="my-4" v-on:click="toggle" type="is-primary is-light">Ajouté une affiliation
					</b-button>

					<template v-if="showAffeliation">
						<b-field label="Organisation">
							<b-select placeholder="Selectionnez une organisation" expanded>
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
							<b-field label="Pays">
								<b-select placeholder="Selectionnez un pays" expanded>
									<option v-for="(el, key) in pays" :value="el" :key="key">
										{{ el }}
									</option>
								</b-select>
							</b-field>
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
	import Upload from '../misc/Upload';

	export default {
		name: 'Profil',
		components: {
			Upload
		},
		data() {
			return {
				dates: {
					starts: null,
					ends: null
				},
				showAffeliation: false,
				socialInputs: [{
					value: '',
					select: 'LinkedIn'
				}],
				socials: ['Facebook', 'Twitter', 'LinkedIn', 'Orcid'],
				pays: ['France', 'Belgique', 'Espagne', 'Italie'],
				organisations: ['Énergie, Recherche et Science', 'Économie et Société numériques',
					'Protection des consommateurs', 'Budget / Santé	'
				],
			}
		},
		methods: {
			toggle: function () {
				this.showAffeliation = !this.showAffeliation;
			},
			addField: function () {
				this.socialInputs.push({
					value: '',
					select: ''
				});
			},
			removeField: function (el) {
				const index = this.socialInputs.indexOf(el);
				this.socialInputs.splice(index, 1);
			}

		}

	}
</script>

<style>

</style>