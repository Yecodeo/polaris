<template>
  <div>
    <div class="columns is-mobile is-centered mt-1 mb-0">
      <div class="column is-half">
        <b-field>
          <b-input placeholder="Chercher un utilisateur" expanded>
            <option>
                <!-- v-for="option in data" -->
                <!-- :value="option.id" -->
                <!-- :key="option.id"> -->
                <!-- {{ option.user.first_name }} -->
              </option>
          </b-input>
        </b-field>  
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
export default {
  name: 'header-app',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
