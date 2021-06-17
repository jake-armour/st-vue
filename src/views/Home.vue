<template lang="pug">
.q-pa-none
  .row.full-width.window-height.justify-center.bg-dark.relative-position
    .col-md-4.text-center.col-xs-11.absolute-center.padding-minus
      img(src="@/assets/logo.png" width="100%")
      q-btn(color='white' size="xl" outline rounded  label='Enter Here',type="a" href="#about" v-smooth-scroll ) 
  .row.q-col-gutter-xl.justify-center.bg-grey-9.text-white#about.q-pt-lg
    .col-md-5.col-xs-11
      h4.q-my-none About
      p.q-mb-xl ScareTrack is the UK's first podcast dedicated to the Scare Attraction &amp; Haunted House Industry. We bring listeners in depth interviews with some of the biggest names in the UK scare scene, discussion &amp; debate episodes as well on on-location review episodes from scream parks, zombie chases, immersive theatre and much more.
    .col-md-3.col-xs-11.q-mb-md
      h4.q-my-none Socials
      q-btn(v-for="i in socials" :key="i" color='white' flat type="a" target="_blank" size="md" :icon='i.icon' :href='i.href')
  .row.q-col-gutter-xl.justify-center.text-center#team
    .col-12.text-center
      h2.text-blue-8.q-mb-none THE TEAM
    .col-11
      .row.q-col-gutter-xl.justify-center.text-center
        .col-md-3.col-xs-6(v-for="member in team")
          router-link(to='/team')
            q-card
              img(:src='"@/assets/"+member.lower+".jpg"')
              .text-center.absolute-bottom.text-white.dimmed
                .opacity-none
                  .text-subtitle2.text-carnivalee {{member.name}}
                  .text-subtitle2 {{member.title}}
    .col-12.q-mb-xl.q-pb-md
      q-btn(color='negative' flat icon='fas fa-users', label='See more about the team', to="/team") 
  .row.q-col-gutter-xl.justify-center.bg-info
    .col-12.text-center#podcast
      h2.text-blue-8.q-mb-none THE PODCAST
      h6.q-my-none.text-negative Our most recent episodes
    .col-11.bg-info.q-pt-xs
      q-carousel(arrows swipeable animated v-model="slide" height="auto" class="text-dark" control-color="dark").bg-info
        q-carousel-slide(v-for="i in 10" :name="i" :key="i")
          .row.q-col-gutter-lg.justify-center
            .col-md-4.gt-sm
              q-img(:src='podcasts[i-1].image', :ratio='16/9', contain spinner-color='primary', spinner-size='82px')
            .col-xs-11.lt-md
              q-img(:src='podcasts[i-1].image', :ratio='16/9', contain spinner-color='primary', spinner-size='82px')
            .col-md-7.col-xs-12
              .text-subtitle2 {{days[podcasts[i-1].date.getDay()]}} {{podcasts[i-1].date.getDate()}} {{months[podcasts[i-1].date.getMonth()]}} {{podcasts[i-1].date.getFullYear()}}
              .gt-sm
                .text-h2 {{podcasts[i-1].title}}
                .text-subtitle1 {{podcasts[i-1].desc}}
                .text-subtitle1.text-grey-6 {{podcasts[i-1].duration}}              
                  a(:href="podcasts[i-1].link" target="_blank")
                    h6.q-pa-none.q-ma-none.q-mt-lg Click here to listen
              .lt-md
                b(style="font-size:18px") {{podcasts[i-1].title}}
                br
                .text-subtitle1.text-grey-6 {{podcasts[i-1].duration}}              
                  a(:href="podcasts[i-1].link" target="_blank")
                    h6.q-pa-none.q-ma-none.q-mt-lg Click here to listen
    .col-11.text-center
      .row.q-col-gutter-xl.justify-center
        .col-md-2.col-xs-6
          a(target="_blank" href="")
            img(src="@/assets/podbean.png" width="100%") 
        .col-md-2.col-xs-6
          a(target="_blank" href="")
            img(src="@/assets/spotify.png" width="100%") 
        .col-md-2.col-xs-6
          a(target="_blank" href="")
            img(src="@/assets/apple.png" width="100%") 
        .col-md-2.col-xs-6
          a(target="_blank" href="")
            img(src="@/assets/stitcher.png" width="100%") 
        .col-12.q-mb-md
          q-btn(color='negative' flat icon='fas fa-podcast', label='Listen to all episodes here', type="a" target="_blank" href="https://scaretrack.podbean.com/") 
  .row.q-col-gutter-xl.justify-center.q-mb-lg#scarecam
    .col-12.text-center
      h2.text-blue-8.q-mb-md SCARECAM
    .col-md-4.col-xs-11.q-pt-xs
      q-video(:ratio="16/9" :src="videos[0].embed")
    .col-11
      .row.justify-center.q-col-gutter-md
        .col-md-2.col-xs-6(v-for="i in 4" :key="i").text-center
          a(:href="videos[i].link" target="_blank")
            q-img(:src='videos[i].image', :ratio='16/9', spinner-color='primary', spinner-size='82px')
            span {{videos[i].title}}
        .col-12.text-center
          .row.q-col-gutter-xl.justify-center
            .col-12.q-mb-md
              q-btn(color='negative' flat icon='fab fa-youtube', label='View more on YouTube', type="a" target="_blank" href="https://www.youtube.com/channel/UCtf3bFR_leU2eu-_uFbwZ0A") 
  .row.q-col-gutter-xl.justify-center.q-mt-md.text-center.bg-info#coaster
    .col-12.text-center
      h2.text-blue-8.q-mb-md.q-mt-none COASTERTRACK
    .col-md-2.col-xs-11
      img(src="../assets/cart.png" width="100%")
    .col-md-4.col-xs-11
      .text-h5 ScareTrack are proud to present our newest venture, CoasterTrack: A UK Theme Park Podcast. CoasterTrack episodes will feature Theme Parks from all around the UK and Europe. You can find our CoasterTrack episodes in the same feed as the ScareTrack podcast!
    .col-12.q-mb-md
      q-btn(color='negative' flat icon='fas fa-podcast', label='Find CoasterTrack on Podbean', type="a" target="_blank" href="https://scaretrack.podbean.com/") 
  .row.q-col-gutter-xl.justify-center.q-mt-md.text-center#merch
    .col-12.text-center
      h2.text-blue-8.q-mb-md.q-mt-none MERCH
    .col-md-2.col-xs-6(v-for="item of merch" :key="merch.name").gt-sm
      q-card
        img(:src='"../assets/merch/"+ item.img +".jpeg"')
        q-card-section
          a(target="_blank" :href="item.link")
            .text-h6 {{item.name}}
            .text-subtitle2 {{item.type}}
            .text-grey-8 {{item.price}}
    .col-xs-11(v-for="item of merch" :key="merch.name").lt-md
      q-card(style="width:100%; height:150px")
        q-card-section(horizontal style="height:150px")
          img(:src='"../assets/merch/"+ item.img +".jpeg"' height="100%")
          q-card-section.w-100.text-center(style="width:100%;")
            a(target="_blank" :href="item.link")
              .text-h6 {{item.name}}
              .text-subtitle2 {{item.type}}
              .text-grey-8 {{item.price}}
    .col-12.q-mb-xl
      q-btn(color='negative' flat icon='fas fa-tshirt', label='View the ScareTrack Merch Store', type="a" target="_blank" href="https://smart-fx.co.uk/smart-artist-scaretrack").q-mb-xl
  .row.q-col-gutter-xl.justify-center.text-center.bg-black#zombie
    .col-md-6.col-xs-11.text-center.q-mt-md
      img(src="../assets/infection-logo.jpeg" width="100%")
    .row.justify-center.text-white.q-col-gutter-md
      .col-md-3.col-xs-11
        img(src="../assets/infection-st.jpeg" width="100%")
      .col-md-4.col-xs-11.text-left
        p Zombie Infection is the UK’s biggest supplier of premium Zombie Experiences. You will be at the centre of an apocalypse in a number of iconic, haunting and atmospheric locations across the UK. 
        p.q-mb-xl Take on the award winning Courthouse mission in an old 18th Century Courthouse in Birmingham. Or find out about the virus and its origins across ab abandoned asylum in Liverpool. If you think you have what it takes to become one of the best then head to Sheffield for the Factory experience!
        p Which ever mission you choose, Zombie Infection has the complete experience package for you, your family and friends.
        p Zombie Infection Experiences
        ul
          li “The Dungeon” York
          li “The Factory” Sheffield
          li “The Forest” Nottingham (6 hour overnight specials!)
          li “The Courthouse” Birmingham
    .col-12.q-mb-xl.q-pb-md
      q-btn(color='white' flat icon='fas fa-ticket-alt', label='Book tickets here', type="a" target="_blank" href="https://zombieinfection.rezdy.com/?agentCode=SCARETRACK") 
  .row.q-col-gutter-xl.justify-center.text-center.bg-info#gallery
    .col-12.text-center
      h2.text-blue-8.q-mb-md.q-mt-none GALLERY
    .col-12.bg-info.q-mb-md
      slider(ref="slider" :options="options" style="height:400px").gt-sm
        slideritem(v-for="i in 10" :key="i" style="width:31%;margin-right:1.5%;margin-left:2%")
          img(:src='"../assets/gallery/"+i+".jpg"' width="100%")
      slider(ref="slider" :options="options" style="height:150px").lt-md
        slideritem(v-for="i in 10" :key="i" style="width:30.5%;margin-right:2%")
          img(:src='"../assets/gallery/"+i+".jpg"' width="100%")
  .row.q-col-gutter-xl.justify-center.text-center#contact
    .col-12.text-center.q-mt-lg
      h2.text-blue-8.q-mb-md.q-mt-none CONTACT US
    .col-6.q-pt-none
      h6.q-mb-none EMAIL
      a(href="mailto:scaretrack@gmail.com" target="_blank") 
        span.text-negative scaretrack@gmail.com
    .col-6.q-mb-xl.q-pt-none
      h6.q-mb-none SOCIAL LINKS
      q-btn(v-for="i in socials" :key="i" color='negative' flat type="a" target="_blank" size="md" :icon='i.icon' :href='i.href')
  .row.bg-dark.text-white.q-pa-md
    .col-12.text-center.q-mt-md
      p &copy; Copyright 
        b ScareTrack. 
        | All rights reserved

</template>


<script>
import { slider, slideritem } from 'vue-concise-slider'
import { mapState, mapActions } from 'vuex'
import { API } from 'aws-amplify';
import { getCounter } from '@/graphql/queries'
import { updateCounter } from '@/graphql/mutations'

export default {
  name: 'Home',

  data () {
    return {
      socials: [
        {
          icon: 'fab fa-facebook',
          href: 'https://www.facebook.com/scaretrack/'
        },
        {
          icon: 'fab fa-instagram',
          href: 'https://www.instagram.com/scaretrack/'
        },
        {
          icon: 'fab fa-twitter',
          href: 'https://www.twitter.com/scaretrack/'
        },
        {
          icon: 'fas fa-podcast',
          href: 'https://scaretrack.podbean.com/'
        },
        {
          icon: 'fab fa-youtube',
          href: 'https://www.youtube.com/channel/UCtf3bFR_leU2eu-_uFbwZ0A'
        },
        {
          icon: 'fas fa-tshirt',
          href: 'https://smart-fx.co.uk/smart-artist-scaretrack'
        }
      ],
      slide: 1,
      options: {
        currentPage: 0,
        infinite: 3,
        slidesToScroll: 3,
        loop: true,
      },
      gallery: 1,
      merch: [
        {
          name: "ST Pumpkin",
          type: 'Ladies Vest',
          price: '£19.99',
          img: '1',
          link: 'https://smart-fx.co.uk/smart-artist-scaretrack/scaretrack-pumpkin-vest'
        },
        {
          name: "ST Pumpkin Colour",
          type: 'T-Shirt',
          price: '£19.99',
          img: '2',
          link: 'https://smart-fx.co.uk/smart-artist-scaretrack/st-pumpkin-t-shirt-multi-colour-pumpkin'
        },
        {
          name: "I'm a fan",
          type: 'Ladies Vest',
          price: '£19.99',
          img: '4',
          link: 'https://smart-fx.co.uk/smart-artist-scaretrack/scaretrack-im-a-fan-vest'
        },
      ],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      team: [
        {
          name: 'Mikey',
          title: 'Host',
          lower: 'mikey',
        },
        {
          name: 'Hannah',
          title: 'Host',
          lower: 'hannah',
        },
        {
          name: 'Martin',
          title: 'Guest Host',
          lower: 'martin',
        },
        {
          name: 'Kate',
          title: 'Guest Host',
          lower: 'kate',
        },
        {
          name: 'Polly',
          title: 'Guest Host',
          lower: 'polly',
        },
        {
          name: 'Dan',
          title: 'Guest Host',
          lower: 'dan',
        },
        {
          name: 'Jessica',
          title: 'Guest Host',
          lower: 'jessica',
        },
        {
          name: 'Erin',
          title: 'USA Guest Host',
          lower: 'erin',
        },
      ],
    }
  },
  components: {
    slider,
    slideritem
  },
  computed: {
    ...mapState(['podcasts', 'videos'])
  },
  methods: {
    ...mapActions(['getPodcasts', 'getVideos']),
    async logVisitor() {
      const curr = await API.graphql({query: getCounter, variables: {id: 'home'}})
      let newAmount = curr.data.getCounter.amount + 1
      await API.graphql({query: updateCounter, variables: {input: {id: 'home', amount: newAmount}}})
    }
  },
  created() {
    this.getPodcasts()
    this.getVideos()
    this.logVisitor()
  }
}
</script>

<style lang="sass" scoped>
h4
  font-family: 'Carnivalee'
.opacity-none
  background: rgba(0, 0, 0, 0) !important
  z-index: 10
.dimmed:after
  z-index: 1
.text-carnivalee
  font-family: 'Carnivalee'
  font-size: 2em
h2
  font-family: 'Carnivalee'
  font-size: 3em
h6
  font-family: 'Carnivalee'
  font-size: 2em
.q-btn
  font-family: 'Carnivalee'
  font-size: 1.5em
.text-h2
  font-family: 'Roboto'
  font-size: 3em
a
  text-decoration: none
  color: #333
.padding-minus
  margin-top: -50px
</style>