<template>
  <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
    <ul class="menu-list">
      <li>
        <b-image
            src="https://picsum.photos/600/400"
            alt="A random image"
            ratio="6by4"
        />
      </li>
      <li>
        <div class="identity mt-1">
          <span class="is-capitalized has-text-weight-semibold">prénom </span>
          <span class="is-capitalized has-text-weight-semibold">nom</span>  
        </div>
      </li>
      <li>
        <div class="aboutme mt-3">
          <h6 class="title is-6">About me</h6>
          <p class="subtitle is-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nam consequuntur qui eligendi aspernatur ullam doloremque non minima, quae ex voluptas ?</p>
        </div>

      </li>
      <li>
        <h6 class="title is-6">
          My social life
        </h6>
        <a href="#" class="">
          <MenuIcon />
        </a>
      </li>
    </ul>
  </aside>  
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: 'aside-app',
  components: {
    MenuIcon
  }
}
</script>

<style>

</style>