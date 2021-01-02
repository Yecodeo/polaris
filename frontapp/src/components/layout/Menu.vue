<template>
  <aside class="column is-2 is-narrow-mobile is-fullheight section mt-3">
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
          <p class="subtitle is-6 has-text-justified">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nam consequuntur qui eligendi aspernatur ullam doloremque non minima, quae ex voluptas ?</p>
        </div>

      </li>
      <li>
        <h6 class="title is-6 mt-3 mb-2">
          My social life
        </h6>
        <div class="level">
          <div class="level-left">
            <div class="level-item m-0">
              <a href="#" class="p-0 m-0">
                <Facebook />
              </a>
            </div>
            <div class="level-item m-0">
              <a href="#" class="p-0 m-0">
                <Linkedin />
              </a>
            </div>
            <div class="level-item m-0">
              <a href="#" class="p-0 m-0">
                <Twitter />
              </a>
            </div>
            <div class="level-item m-0">
              <a href="#" class="p-0 m-0">
                <Orcid />
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </aside>  
</template>

<script>
import Facebook from 'vue-material-design-icons/Facebook';
import Linkedin from 'vue-material-design-icons/Linkedin';
import Twitter from 'vue-material-design-icons/Twitter';
import Orcid from '../assets/icons/Orcid';

export default {
  name: 'Menu',
  components: {
    Facebook,
    Linkedin,
    Twitter,
    Orcid
  }
}
</script>

<style>

</style>