<template>
  <div>
    <div class="columns is-mobile is-centered mt-1 mb-0">
      <div class="column is-half">
					<Autocomplete 
            :api="api_url" 
            :values="['firstname', 'lastname']"
            dispatch="setUser"
          />
      </div>
    </div>
    <div class="columns is-mobile is-centered mt-1">
      <div class="column is-half has-text-centered pt-0">
          <b-button type="is-primary">Rechercher</b-button>
      </div>
    </div>
  </div>
</template>

<script>
	import Autocomplete from '../common/Autocomplete';

export default {
  name: 'header-app',
  components: {
    Autocomplete
  },
  data: function() {
    return {
      api_url: ''
    }
  },
  mounted: function() {
    this.api_url = `${this.$store.getters.getApiUrl}/user/search?q=`
  }
}
</script>

<style scoped>

</style>
