<template>
  <b-col>

    <nav-links></nav-links>
    <exhibit prefix="software" :slug="slug" :posts="posts"></exhibit>
  </b-col>
</template>


<script>
// import TestHtml from 'html-loader!./test.html'
import CanyonRunner from 'html-loader!./software/articles/html5-canyonrunner.html'
import ArticleOptimizer from 'html-loader!./software/articles/article-optimizer.html'

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
}]

export default {
  props: ['slug'],
  data () {
    return {
      posts: writings
    }
  },
  name: 'software-index'
}
</script>

<style scoped>
.post-title {
  color: #00bf8f;
}

.post-date {
  color: grey;
}

.post-view_content p {
  color: #green;
}

</style>
