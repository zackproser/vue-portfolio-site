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
import PageGobblerSite from 'html-loader!./software/articles/pagegobbler-site.html'
import RealtimeHungerMap from 'html-loader!./software/articles/realtime-hunger-map.html'
import UsernameExtractor from 'html-loader!./software/articles/username-extractor.html'
import WENodeSDK from 'html-loader!./software/articles/we-node-sdk.html'

const writings = [{
  title: 'A complete HTML5 game built with Phaser.js: CanyonRunner',
  slug: 'html5-desktop-and-mobile-game-canyonrunner',
  description: 'Deep dive into my open sourced HTML5 game',
  body: CanyonRunner,
  image: '/static/assets/img/canyonrunner-blog.png'
},
{
  title: 'A powerful and open source content optimizer tool',
  slug: 'free-seo-article-optimizer',
  description: 'A full-stack app leverage natural language processing',
  body: ArticleOptimizer,
  image: '/static/assets/img/optimizer-blog.png'
},
{
  title: 'A native OSX app for extracting data from websites',
  slug: 'pagegobber-mac-app',
  description: 'I built a Mac OSX app and sold it in the App Store',
  body: PageGobbler,
  image: '/static/assets/img/gobbler-screens/pagegobbler-overview.png'
},
{
  title: 'A loud and unique marketing site for the Pagegobbler OSX app',
  slug: 'pagegobbler-site',
  description: 'I built an express.js site to advertise my OSX app',
  body: PageGobblerSite,
  image: '/static/assets/img/gobbler-site-screens/gobbler-blog.png'
},
{
  title: 'A realtime global visualization of tweets on any given topic',
  slug: 'realtime-hunger-map',
  description: 'A configurable Twitter application that draws tweets in realtime on a world map',
  body: RealtimeHungerMap,
  image: '/static/assets/img/twitter-map-screens/twitter-map-blog.png'
},
{
  title: 'An outrageously gory node.js app that extracts Twitter lists for free',
  slug: 'username-extractor',
  description: 'Sign in via Twitter oAuth and paste the URL of a Twitter list to extract all usernames from',
  body: UsernameExtractor,
  image: '/static/assets/img/extractor-screens/extractor-blog.png'
},
{
  title: 'The first Node.js SDK for the WealthEngine API',
  slug: 'wealthengine-sdk-node',
  description: 'I wrote WealthEngine\'s first Node.js SDK',
  body: WENodeSDK,
  image: '/static/assets/img/wakka.png'
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
