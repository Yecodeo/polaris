<template>
	<b-field class="suggests-parents" :label="label">
		<b-input 
			autocomplete="off" 
			required 
			expanded
			@input="fetch" 
			v-model="input"
			placeholder="Rechercher un utilisateur"
			v-on:input="updateValue()"
		></b-input>
		<div v-if="suggests && input.length >= 3" class="suggests">
			<a class="suggest is-link"
				v-for="(suggest, key) in suggests" 
				:key="key" 
				@click="OnSelect(suggest)">
				<span v-for="(prop, k) in values" :key="k" :value="prop">
					{{ suggest[prop] | capitalize }}
				</span>
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
				suggests: '',
				input: null
			}
		},
		props: [ 'api', 'label', 'values', 'dispatch', 'required' ],
		methods: {
			/**
			 * Get suggests from given url
			 */
			fetch: function() {
				if (this.api && this.input.length >= 3) {
					let self = this;
					axios.get(`${this.api}${this.input}`).then(function(res) {
						self.suggests = res.data.data;
					}).catch(error => console.error(error));
				}
			},
			/**
			 * on select one clean & close suggest
			 */
			OnSelect: function(selected)  {
				const label = this.values.map(el => selected[el]).join(' ');
				this.input = label;
				this.suggests = '';
				this.$emit('input', this.input)
				if (this.dispatch) {
					this.$store.dispatch(this.dispatch, selected)
				}
			},
			updateValue: function () {
				this.$emit('input', this.input)
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
		width: 100%;
	}
	.suggests-parents {
		position: relative;
	}
</style>