<template>
	<div class="columns is-multiline py-5">
		<template v-for="(affiliation, key) in affiliations" >
			<div :key="key" class="column is-two-fifths is-offset-one-quarter">
				<div class="card mb-1">
					<div class="card-content">
						<div class="media mb-1">
							<div class="media-content">
								<b-tag 
									class="is-size-7 is-pulled-right is-primary is-light is-size-7-mobile" 
									v-if="affiliation.current"
									type="is-success ">
									A ce jour
								</b-tag>
								<h5 class="title is-5 is-size-6-mobile">{{ affiliation.organisation | capitalize}}</h5>
								<h6 class="subtitle is-6 is-size-7-mobile">{{ affiliation.poste | capitalize }}</h6>
							</div>
						</div>

						<div class="content">
							<p class="subtitle is-6 mb-1">{{ affiliation.equipe | capitalize}}</p>
							<p class="subtitle is-6 mb-1">{{ affiliation.annee }}</p>
							<b-field v-if="affiliation.date.lte && affiliation.date.gte" class="mb-1">
								<b-tag type="is-success is-light">
									{{ affiliation.date.lte | dateFormatter }} 
								</b-tag>
								<b-tag type="is-success is-light">
									{{ affiliation.date.gte | dateFormatter }}
								</b-tag>
							</b-field>
							<span>{{ affiliation.country | capitalize}}</span>
						</div>
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
	.b-rounded {
		border-radius: 0.5rem 0.5rem 0rem 0rem !important;
	}
	.boxed {
		border: 1px solid #c1c1c1;
	}
</style>