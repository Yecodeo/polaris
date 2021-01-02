<template>
  <div class="container column is-10">
    <div class="section pt-6">
      <section class="boxed px-2">
        <div class="header-content">
          <b-tabs position="is-centered is-boxed" class="block mt-5">
            <b-tab-item headerClass="b-rounded has-background-light" label="Vue générale">
              <General />
            </b-tab-item>
            <b-tab-item headerClass="b-rounded has-background-light" label="My profil">
                <Profile />
            </b-tab-item>
            <b-tab-item headerClass="b-rounded has-background-light" label="Mes publications">
              <Publication />
            </b-tab-item>
          </b-tabs>
        </div>
        <div class="content">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Profile from '../user/Profile';
  import Publication from '../user/Publications';
  import General from '../user/General';
  export default {
    name: 'Core-ui',
    components: {
      Profile,
      Publication,
      General
    }
  }
</script>
<style></style>