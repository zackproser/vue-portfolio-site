<template>
  <b-col>

    <nav-links></nav-links>
    <exhibit prefix="software" :slug="slug" :posts="posts"></exhibit>
  </b-col>
</template>


<script>
// import TestHtml from 'html-loader!./test.html'
import CanyonRunner from 'html-loader!./software/articles/html5-canyonrunner.html'

const writings = [{
  title: 'A complete HTML5 game built with Phaser.js: CanyonRunner',
  date: '01 May 2017',
  slug: 'html5-desktop-and-mobile-game-canyonrunner',
  description: 'Deep dive into my open sourced HTML5 game',
  body: CanyonRunner,
  image: '/static/assets/img/canyonrunner-blog.png'
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
