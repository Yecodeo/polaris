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
						:api_url="updateUserApi"
					/>

					<b-button class="my-4" v-on:click="toggle" type="is-primary is-light">Ajouté une affiliation
					</b-button>
					<a 
						v-on:click="toggle" 
						v-if="showAffeliation" 
						class="delete my-4 is-pulled-right has-background-danger">
					</a>
					<template v-if="showAffeliation">
						<AddAffiliation 
							@toggle="toggle()" 
						/>
					</template>

				</div>
			</div>
			<div class="columns">
				<form enctype="multipart/form-data" novalidate >
					<div class="column is-four-fifths">
						<Upload @notify="persisteFile($event)" :api_url="updateUserApi"/>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import Upload from '../common/Upload';
	import Social from '../common/Social';
	import { update, addFile } from '../../helper/save';
	import AddAffiliation from '../common/addAffiliation'
	import toaster from '../../helper/toaster';

	export default {
		name: 'Profil',
		components: {
			Upload,
			Social,
			AddAffiliation
		},
		data() {
			return {
				updateUserApi: '',
				user: '',
				showAffeliation: false
			}
		},
		beforeMount() {
			this.user = this.$store.getters.getUser;
		},
		mounted() {
			this.updateUserApi = `${this.$store.getters.getApiUrl}/user/${this.user.id}`
		},
		methods: {
			persiste: function(body) {
				update(this.updateUserApi, body).then((res) => {
					const { data: { data: { result }}} = res;
					if (result === 'updated') {
						toaster.success();
					}
				}).catch( (error) => {
					console.log(error);
					toaster.fail();
				});
			},
			persisteFile: function(body) {
				const formData = new FormData();
				formData.append('avatar', body, body.name);

				addFile(this.updateUserApi, formData).then((res) => {
					const { data: { data: { result }}} = res;
					if (result === 'updated') {
						toaster.success();
					}
				}).catch( (error) => {
					console.log(error);
					toaster.fail();
				});
			},
			toggle: function () {
				this.showAffeliation = !this.showAffeliation;
			},
		}
	}
</script>

<style>

</style>