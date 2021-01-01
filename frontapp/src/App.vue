<template>
  <div class="container is-fluid">
      <Header-app> </Header-app>
        <section class="main-content columns is-fullheight">
          <Menu-app></Menu-app>
          <Core-app></Core-app>
        </section>
  </div>

</template>

<script>
import Header from './components/Header';
import Menu from './components/Menu';
import CoreUi from './components/coreUi';


export default {
  name: 'App',
  components: {
    'Header-app': Header,
    'Menu-app': Menu,
    'Core-app': CoreUi,
  }
}
</script>

<style>

</style>
