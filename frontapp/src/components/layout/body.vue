<template>
  <div class="column p-0">
    <div class="my-5 mx-2">
      <section class="boxed is-fullheight">
        <div class="header-content">
          <nav class="tabs is-centered is-boxed">
            <ul>
              <li class="b-rounded has-background-light is-active is-size-7-mobile">
                <router-link to="/" exact>Vue général</router-link>
              </li>
              <li class="b-rounded has-background-light is-active is-size-7-mobile">
                <router-link to="/profil" exact>My profil</router-link>
              </li>
              <li class="b-rounded has-background-light is-active ">
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
    name: 'Body',

  }
</script>
<style>
li .is-active {
    background-color: #7957d5!important;
    color: white!important;
}
</style>