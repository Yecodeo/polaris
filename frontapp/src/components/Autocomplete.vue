<template>
	<b-field class="suggests-parents" label="Pays">
		<b-input autocomplete="off" @input="fetchCountry" v-model="input"></b-input>
		
		<div v-if="suggest" class="suggests">
			<a class="suggest is-link"
				v-for="(country, key) in suggest" :value="country" :key="key" 
				@click="pickOne(country.name)" >
				{{ country.name }}
			</a>
		</div>
	</b-field>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Autocomplete',
		data: function() {
			return {
				suggest: '',
				input: null
			}
		},
		props: [ 'api' ],
		methods: {
			/**
			 * search for country from privided input
			 */
			fetchCountry: function() {
				if (this.api) {
					let self = this;
					axios.get(`${this.api}${this.input}`).then(function(res) {
						self.suggest = res.data.data;
					});
				}
			},
			/**
			 * make choses and close suggest list
			 */
			pickOne: function(selected)  {
				this.input = selected;
				this.suggest = ''
			}
		}
	}
</script>
	
<style>
.suggest {
    color: #4a4a4a;
    display: block;
    font-size: .875rem;
    line-height: 1.5;
    padding: .375rem 1rem;
    position: relative;
	cursor: pointer;
}
.suggest:hover {
	background-color: #f5f5f5;
    color: #7957d5;
}
.suggests {
    position: absolute;
    left: 0rem;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
    color: #4a4a4a;
    display: block;
	padding: 1rem 0.2rem;
    z-index: 999;
    top: 4.5rem;
    width: 100%;
}
.suggests-parents {
	position: relative;
}
</style>