<template lang="pug">
  .q-pa-none
    .row.text-center
      .col-12
        h2.text-blue-8.q-mb-md The Team
    .row.justify-center.q-col-gutter-xl(v-for="member of team" :key="member.name")
      .col-md-4.col-xs-11
        h6.q-mb-none {{member.name}}
        .text-subtitle2.q-mb-md {{member.type}}
        p {{member.desc}}
      .col-md-3.col-xs-11
        img(:src='"../assets/"+member.lower+".jpg"' width="100%")
      .col-12
        q-separator( dark)


</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'Mikey',
          lower: 'mikey',
          type: 'Host',
          desc: 'Mikey has been reviewing scare attractions since 2012. With a BA Honours Degree in Theatre to his name, Mikey uses his specialist knowledge of Artauds Theatre of Cruelty along with other detailed research when reviewing attractions. Mikey has conducted numerous haunt seminars and hosted an extreme haunt panel debate at recent scare conventions. Along side ScareTrack, Mikey also admins the ‘Scare Actors Group’ on facebook. This group helps aspiring and seasoned scare actors find new and exciting acting opportunities. Mikey enjoys attractions that aren\'t scared to try new ambitious ideas.'
        },
        {
          name: 'Hannah',
          lower: 'hannah',
          type: 'Host',
          desc: 'Hannah has been visiting Scare attractions with Mikey since 2012. Since graduating with a BA Hons Degree in Theatre, Hannah (Mikey\'s long suffering wife) has experienced over 500 Scare Attractions around the UK,Europe and America. Hannah Co-Owns the Escape Entertainment Theatre Company and takes a lead role with set design and performance management. Hannah loves attractions that create true escapism with great sets and high quality performances.'
        },
        {
          name: 'Martin',
          lower: 'martin',
          type: 'Guest Host',
          desc: 'Martin started his scare journey back in 2014 when he started acting for multiple scare companies. His key acting roles within \'Escape Entertainment\' and \'Twisted Attractions\' gave him the passion he has today for the scare industry. Martin has since experienced hundreds of attractions including extreme survival events. Martin enjoys attraction that can push him to his limit. Oh, he also loves the Nurses at Tulley\'s.'
        },
        {
          name: 'Kate',
          lower: 'kate',
          type: 'Guest Host',
          desc: 'Kate is a Multi Award winning Professional Face & Body Painter, Creative Makeup Artist, Mural and Scenic Artist, Airbrush Artist, educator and trainer. Kate has designed and created attractions since 2014. Her art work and set design can be found at many attractions around the UK. Kate has also worked with many attractions make up departments, ensuring every actor looks perfect before the scare begin. Kate loves to see events who put extra effort into their costume and make-up to enhance their attractions.'
        },
        {
          name: 'Polly',
          lower: 'polly',
          type: 'Guest Host',
          desc: 'Polly began attending scare attractions in 2012, and her obsession quickly took hold. She launched a scare attraction site called HorrorBox which she ran from from 2013 to 2020, producing editorials and reviews on the UK scene. Polly enjoys attractions which feature a strong element of storytelling. Her passion for all things horror extends to the silver screen; she is co-director of Celluloid Screams Horror Film Festival in Sheffield, where she programmes a broad range of horror films from submissions, invitations, and sourced from international film markets.'
        },
        {
          name: 'Dan',
          lower: 'dan',
          type: 'Guest Host',
          desc: 'Dan Brownlie is an award winning Writer/Producer/Director at brand-B corporation. Dan is a Halloween obsessed life long horror fan, he makes latex horror masks, odd horror based toys and believes there are only two genres of film, \'horror\' and \'non-horror\'. Dan\'s fascination with haunts and haunt culture often leads him to the states to bask in the mind bending awesomeness of Halloween Horror Nights and other various spook filled gloriousness. Dans love for haunts led him to create The Tombs, a horror film shot in the London tombs scare attraction. While there Dan met Andy Cookie Rawlings who opened his eyes to the massive UK haunt scene. Armed with this new knowledge and about ten years of film making experience Dan set out to create the first feature length documentary on the UK Haunt scene, UK Haunters.'
        },
        {
          name: 'Jessica',
          lower: 'jessica',
          type: 'Guest Host',
          desc: "Jessica’s love of all things spooky started from childhood with a fascination of witches and wizards, that led her to begging her mum for a black cat that she could call Midnight! Jessica fueled her love of spook by becoming somewhat of a B - movie scream queen appearing in no less than eight horror movies. True to cliché, she fell in love with her director and the pair are often seen galavanting about, oblivious to the world around them. Jessica is known to have several personalities including, but not limited to: Jessica Death - a raving lunatic with a taste for the macabre and pig tails. Avoid at all costs."
        },
        {
          name: 'Erin',
          lower: 'erin',
          type: 'USA Guest Host',
          desc: "Erin is a veteran in the haunted house/horror industry going on her 23rd year. With a background in building/designing professional haunted houses, stunt work, light design, rewriting safety and emergency protocols for large scale haunts due to covid-19, and most recently has been in the process of opening a brand new attraction. Erin has a degree in event management, a minor in technical theatre and a certificate in women leadership. With a large mixture of work within small town haunts, theme park haunts, and professional haunts, she enjoys the passion and detail that go into each unique scare, the laugh, the entertainment, and the entire experience."
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
h6
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
</style>