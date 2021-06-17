<template lang="pug">
  q-layout(view='hHr LpR lFf')
    q-header(reveal)
      q-toolbar.bg-dark.text-white
        q-toolbar-title
          router-link(to="/")
            img(src="@/assets/logotext.png" height="60px").q-pa-sm
        .nav(v-if="this.$route.name == 'Home'").gt-sm
          q-btn(type="a" href="#about" v-smooth-scroll color='white' flat label='About').nav-btn
          q-btn(type="a" href="#team" v-smooth-scroll color='white' flat label='The Team').nav-btn
          q-btn(type="a" href="#podcast" v-smooth-scroll color='white' flat label='Podcast').nav-btn
          q-btn(type="a" href="#scarecam" v-smooth-scroll color='white' flat label='ScareCam').nav-btn
          q-btn(type="a" href="#coaster" v-smooth-scroll color='white' flat label='CoasterTrack').nav-btn
          q-btn(type="a" href="#merch" v-smooth-scroll color='white' flat label='Merch').nav-btn
          q-btn(type="a" href="#zombie" v-smooth-scroll color='white' flat label='Zombie Infection').nav-btn
          q-btn(type="a" href="#gallery" v-smooth-scroll color='white' flat label='Gallery').nav-btn
          q-btn(type="a" href="#contact" v-smooth-scroll color='white' flat label='Contact').nav-btn
        .nav(v-if="this.$route.name == 'Home'").lt-md
          q-btn(color='white', flat icon='fas fa-bars', @click='drawer = !drawer') 

    q-page-container.q-pa-none
      q-drawer(v-model="drawer" dark side="right" :width="200")
        q-list(bordered).q-pt-md
          q-item
            q-btn(type="router-link" to="#about" color='white' flat label='About').nav-btn
          q-item
            q-btn(type="router-link" to="#team" color='white' flat label='The Team').nav-btn
          q-item
            q-btn(type="router-link" to="#podcast" color='white' flat label='Podcast').nav-btn
          q-item 
            q-btn(type="router-link" to="#scarecam" color='white' flat label='ScareCam').nav-btn
          q-item
            q-btn(type="router-link" to="#coaster" color='white' flat label='CoasterTrack').nav-btn
          q-item
            q-btn(type="router-link" to="#merch" color='white' flat label='Merch').nav-btn
          q-item
            q-btn(type="router-link" to="#zombie" color='white' flat label='Zombie Infection').nav-btn
          q-item
            q-btn(type="router-link" to="#gallery" color='white' flat label='Gallery').nav-btn
          q-item
            q-btn(type="router-link" to="#contact" color='white' flat label='Contact').nav-btn
      router-view
      back-to-top
        q-btn(color='negative' round icon='fas fa-chevron-up') 
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    scrollToElement (el) {
      const test = document.getElementById(el);
      console.log(test.offsetTop)
      window.scrollTo(0, document.getElementById(el).offsetTop)
      console.log(test)
      console.log(test.scrollIntoView())
    },
  }
}
</script>

<style lang="sass" scoped>
.nav-btn
  font-family: 'Goldbill'
</style>