<template>
  <div class="container column is-10">
    <div class="section is-fullheight pt-6">
      <section class="boxed is-fullheight px-2">
        <div class="header-content">
          <nav class="tabs is-centered is-boxed">
            <ul>
              <li class="b-rounded has-background-light is-active">
                <router-link to="/" exact>Vue général</router-link>
              </li>
              <li class="b-rounded has-background-light is-active">
                <router-link to="/profil" exact>My profil</router-link>
              </li>
              <li class="b-rounded has-background-light is-active">
                <router-link to="/publication" exact>Mes publication</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Core-ui',

  }
</script>
<style>
li .is-active {
    background-color: #7957d5!important;
    color: white!important;
}
</style>