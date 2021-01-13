<template>
	<div>
		<Affiliationlist 
			:affiliations="myAffiliations"
		/>
	</div>
</template>

<script>
	import Affiliationlist from '../common/Affiliationlist';
	import axios from 'axios';

	export default {
		name: 'General',
		components: {
			Affiliationlist
		},
		data() {
			return {
				myAffiliations: '',
			}
		},
		mounted() {
			const userId = this.$store.getters.getUser.id;
			this.api_url = `${this.$store.getters.getApiUrl}/affiliation/${userId}`		
			let self = this;
			axios.get(`${this.api_url}${this.input}`).then(function (res) {
				self.myAffiliations = res.data.data;
				console.log(res.data.data)
			}).catch(error => console.error(error));
		}
	}
</script>

<style>

</style>