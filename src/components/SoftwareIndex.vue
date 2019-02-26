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
import WEPHPSDK from 'html-loader!./software/articles/we-php-sdk.html'
import WEPythonSDK from 'html-loader!./software/articles/we-python-sdk.html'
import Padscoper from 'html-loader!./software/articles/padscoper.html'
import Wisdomseeker from 'html-loader!./software/articles/wisdomseeker.html'
import Hashtagblaster from 'html-loader!./software/articles/hashtag-blaster.html'
import Pageripper from 'html-loader!./software/articles/pageripper.html'

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
},
{
  title: 'The first PHP SDK for the WealthEngine API',
  slug: 'wealthengine-sdk-php',
  description: 'I wrote WealthEngine\'s first PHP SDK',
  body: WEPHPSDK,
  image: '/static/assets/img/wokka.png'
},
{
  title: 'The first Python SDK for the WealthEngine API',
  slug: 'wealthengine-python-sdk',
  description: 'I wrote WealthEngine\'s first Python SDK',
  body: WEPythonSDK,
  image: '/static/assets/img/wikka.png'
},
{
  title: 'Padscoper Real estate search app',
  slug: 'padscoper',
  description: 'A Node.js app that allows you to search for properties within 20 miles of a given address',
  body: Padscoper,
  image: '/static/assets/img/padscoper-screens/padscoper-blog.png'
}, {
  title: 'Wisdomseeker Wikipedia crawler',
  slug: 'wisdomseeker',
  description: 'All Wikipedia articles eventually link back to Philosophy if you follow the first link',
  body: Wisdomseeker,
  image: '/static/assets/img/wisdomseeker-screens/wisdomseeker-blog.png'
},
{
  title: 'Hashtag Blaster WordPress plugin',
  slug: 'hashtag-blaster',
  description: 'The Twitter hashtag blaster allows you to add Tweet buttons to your posts preloaded with a given hashtag for your readers',
  body: Hashtagblaster,
  image: '/static/assets/img/hashtag-blaster-screens/hashtag-blaster-blog.png'
},
{
  title: 'Pageripper Go and React web app',
  slug: 'pageripper',
  description: 'A very fast web scraping app that extracts links from a webpage and lets you download them in csv form',
  body: Pageripper,
  image: '/static/assets/img/pageripper-screens/pageripper-blog.png'
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

<style>
.post-view__content p img:nth-of-type(1) {
  margin-top: 30px;
}
</style>
