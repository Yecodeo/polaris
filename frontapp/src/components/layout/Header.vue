<template>
  <div>
    <div class="columns is-centered mt-1 mb-0">
      <div class="column is-half">
					<Autocomplete 
            :api="api_url" 
            :values="['firstname', 'lastname']"
            dispatch="setUser"
          />
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
    /**
     * setup url for autocomplete component
     */
    this.api_url = `${this.$store.getters.getApiUrl}/user/search?q=`
  }
}
</script>
