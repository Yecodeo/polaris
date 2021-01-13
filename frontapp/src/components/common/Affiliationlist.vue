<template>
	<div>
		<template v-for="(affiliation, key) in affiliations" >
			<div :key="key" class="card mb-4">
				<div class="card-content">
					<div class="media mb-3">
						<div class="media-content">
							<p class="title is-5">{{ affiliation.organisation }}</p>
							<p class="subtitle is-6">{{ affiliation.poste }}</p>
						</div>
					</div>

					<div class="content">
						<p class="subtitle is-6 mb-1">{{ affiliation.equipe }}</p>
						<p class="subtitle is-6 mb-1">{{ affiliation.annee }}</p>
						<b-field class="mb-1">
							<b-tag>{{ affiliation.date.lte | dateFormatter }} - {{ affiliation.date.gte | dateFormatter }}</b-tag>
						</b-field>
						<span>{{ affiliation.country }}</span>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'Affiliationlist',
	props: ['affiliations']
}
</script>

<style scoped>
	.card {
		box-shadow: 0 0.5em 1em -0.425em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02) !important;
	}

	.b-rounded {
		border-radius: 0.5rem 0.5rem 0rem 0rem !important;
	}

	.boxed {
		border: 1px solid #c1c1c1;
	}
</style>