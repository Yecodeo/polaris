<template>
  <aside class="column is-2 is-narrow-mobile is-fullheight section mt-3">
    <ul class="menu-list">
      <li>
        <b-image
            :src="data.profil.avatar"
            alt="A random image"
            ratio="6by4"
        />
      </li>
      <li>
        <div class="identity mt-1">
          <span class="is-capitalized has-text-weight-semibold">{{ data.prefix }} </span>
          <span class="is-capitalized has-text-weight-semibold">{{ data.firstname}} </span>
          <span class="is-capitalized has-text-weight-semibold">{{ data.lastname }}</span>  
        </div>
      </li>
      <li>
        <div class="aboutme mt-3">
          <h6 class="title is-6">About me</h6>
          <p class="subtitle is-6 has-text-justified">
            {{ data.profil.aboutme }}
          </p>
        </div>

      </li>
      <li>
        <h6 class="title is-6 mt-3 mb-2">
          My social life
        </h6>
        <div class="level">
          <div class="level-left">
            <template v-for="(social, key) in data.profil.socials">
              <a :key="key" :href="social.link" class="p-0 m-0">
                <component :is="social.name"  ></component>
              </a>
            </template>
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
import Orcid from '../common/icons/Orcid';

export default {
  name: 'Menu',
  data() {
    return {
      data: {
        prefix: '',
        firstname: '',
        lastname: '',
        aboutme: '',
        profil: []
      }
    }
  },
  components: {
    Facebook,
    Linkedin,
    Twitter,
    Orcid
  },
  beforeMount() {
    (this.data) = this.$store.getters.getUser;
  }
}
</script>

<style>

</style>