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
			const {
				id
			} = this.$store.getters.getUser;

			this.api_url = `${this.$store.getters.getApiUrl}/affiliation/${id}`;

			axios.get(`${this.api_url}`).then((res) => {
				this.myAffiliations = res.data.data;
			}).catch(error => console.error(error));
		}
	}
</script>