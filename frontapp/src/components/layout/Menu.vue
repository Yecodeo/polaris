<template>
  <aside class="column is-2 is-fullheight px-0 mr-5 ">
    <div class="menu-list">
      <div>
        <b-image
            :src="data.profil.avatar"
            :src-fallback="$store.getters.getImagePlaceHolder"
            ratio="is-3by2"
        />
      </div>
      <div>
        <div class="identity mt-1 has-text-centered-mobile">
          <span class="has-text-weight-semibold">{{ data.prefix | capitalize }} </span>
          <span class="has-text-weight-semibold">{{ data.firstname | capitalize}} </span>
          <span class="has-text-weight-semibold">{{ data.lastname | capitalize}} </span>  
        </div>
      </div>
      <div>
        <div class="aboutme mt-3">
          <h6 class="title is-6">About me</h6>
          <p class="subtitle is-6 has-text-justified">
            {{ data.profil.aboutme }}
          </p>
        </div>

      </div>
      <div>
        <h6 class="title is-6 mt-3 mb-2">
          My social life
        </h6>
        <div class="level is-mobile">
          <div class="level-left">
            <template v-for="(social, key) in data.profil.socials">
              <a :key="key" :href="social.link" class="p-0 m-0">
                <component :is="social.name"  ></component>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </aside>  
</template>

<script>
import Facebook from 'vue-material-design-icons/Facebook';
import Linkedin from 'vue-material-design-icons/Linkedin';
import Twitter from 'vue-material-design-icons/Twitter';
import Orcid from '../../assets/icons/Orcid';

export default {
  name: 'Menu',
  data() {
    return {
      data: {
        prefix: '',
        firstname: '',
        lastname: '',
        aboutme: '',
        profil: {}
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
    /**
     * destructing user object to data
     */
    (this.data) = this.$store.getters.getUser;
    /**
     * dispatch action to make avalaible the image placeholder
     */
    this.$store.dispatch('setImagePlaceHolder');
  }
}
</script>

<style>
  .b-image-wrapper > img.placeholder {
      -webkit-filter: blur(0px)!important;
      filter: blur(0px)!important;
  }
</style>