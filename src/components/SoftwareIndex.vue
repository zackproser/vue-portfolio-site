<template>
  <div>
    <nav-links></nav-links>
    <exhibit prefix="software" :slug="slug" :posts="posts"></exhibit>
  </div>
</template>

<script>
import CanyonRunner from 'html-loader!./software/articles/html5-canyonrunner.html'
import ArticleOptimizer from 'html-loader!./software/articles/article-optimizer.html'
import PageGobbler from 'html-loader!./software/articles/pagegobbler-mac-app.html'

const writings = [{
  title: 'A complete HTML5 game built with Phaser.js: CanyonRunner',
  date: '01 May 2017',
  slug: 'html5-desktop-and-mobile-game-canyonrunner',
  description: 'Deep dive into my open sourced HTML5 game',
  body: CanyonRunner,
  image: '/static/assets/img/canyonrunner-blog.png'
},
{
  title: 'A powerful and open source content optimizer tool',
  date: '01 May 2017',
  slug: 'free-seo-article-optimizer',
  description: 'A full-stack app leverage natural language processing',
  body: ArticleOptimizer,
  image: '/static/assets/img/optimizer-blog.png'
},
{
  title: 'A native OSX app for extracting data from websites',
  date: '01 May 2017',
  slug: 'pagegobber-mac-app',
  description: 'I built a Mac OSX app and sold it in the App Store',
  body: PageGobbler,
  image: '/static/assets/img/gobbler-screens/pagegobbler-overview.png'
}]

export default {
  props: ['slug'],
  data () {
    return {
      posts: writings
    }
  },
  name: 'software'
}
</script>

<style scoped>

.nameplate {
  top: -200px !important;
}
</style>
