<template>
  <div>
    <div class="columns is-mobile is-centered mt-1 mb-0">
      <div class="column is-half">
					<Autocomplete 
            api="http://localhost:3001/user/search?q=" 
            :values="['firstname', 'lastname']"
          />
      </div>
    </div>
    <div class="columns is-mobile is-centered mt-1">
      <div class="column is-half has-text-centered pt-0">
          <b-button type="is-primary">Recherche</b-button>
      </div>
    </div>
  </div>
</template>

<script>
	import Autocomplete from '../Autocomplete';

export default {
  name: 'header-app',
  components: {
    Autocomplete
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
