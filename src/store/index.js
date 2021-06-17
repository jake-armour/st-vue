import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
var convert = require('xml-js');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    podcasts: null,
    videos: null,
  },
  mutations: {
    setPodcasts: (state, val) => {
      state.podcasts = val
    },
    setVideos: (state, val) => {
      state.videos = val
    },
  },
  actions: {
    getPodcasts: async ({commit}) => {
      let arr = []
      axios.get("https://feed.podbean.com/scaretrack/feed.xml")
        .then(response => {
          let json = JSON.parse(convert.xml2json(response.data))
          for(let i of json.elements[1].elements[0].elements) {
            if(i.name == 'item') {
              arr.push({
                title: i.elements[0].elements[0].text.replace('ScareTrack - ', '').replace('ScareTrack-', ''),
                link: i.elements[2].elements[0].text,
                date: new Date(i.elements[4].elements[0].text),
                desc: i.elements[9].elements[0].text.replace(i.elements[0].elements[0].text, "").trim(),
                duration: i.elements[14].elements[0].text,
                image: i.elements[17].attributes.url
              })
            }
          }
          commit('setPodcasts', arr)
        })
    },
    getVideos: async ({commit}) => {
      let arr = []
      axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCtf3bFR_leU2eu-_uFbwZ0A")
        .then(response => {
          for(let item of response.data.items) {
            let id = item.guid.replace('yt:video:','')
            arr.push({
              title: item.title,
              link: item.link,
              embed: "https://www.youtube.com/embed/"+id,
              image: item.thumbnail,
              date: new Date(item.pubDate)
            })
          }
          commit('setVideos', arr)
        })
    },
  },
  modules: {
  }
})
