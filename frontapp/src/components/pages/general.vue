<template>
	<div>
		<Affiliation 
			:affiliations="myAffiliations"
		/>
	</div>
</template>

<script>
	import Affiliation from '../common/Affiliation';
	export default {
		name: 'General',
		components: {
			Affiliation
		},
		data() {
			return {
				myAffiliations: '',
			}
		},
		beforeMount() {
			this.myAffiliations = this.$store.getters.getAffiliation
		}
	}
</script>

<style>

</style>