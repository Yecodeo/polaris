<template>
  <div class="container is-fluid">
    <Header-app> </Header-app>
    <section v-if="$store.getters.getUser.id" :key="$store.getters.getUser.id"
      class="main-content columns is-fullheight">
      <Menu-app></Menu-app>
      <Body-app></Body-app>
    </section>
  </div>

</template>

<script>

import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
import Body from './components/layout/body';

export default {
  name: 'App',
  components: {
    'Header-app': Header,
    'Menu-app': Menu,
    'Body-app': Body,
  },
}
</script>

<style>
  .is-fullheight {
      height: 100%;
      overflow: auto;
      overflow-x: hidden;
      overflow-y: hidden;
  }
</style>
