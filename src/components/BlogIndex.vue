<template>
  <b-col>
    <nav-links></nav-links>
    <exhibit prefix="blog" :slug="slug" :posts="posts"></exhibit>
  </b-col>
</template>
<script>
// import TestHtml from 'html-loader!./test.html'
import ModernDeployment from 'html-loader!./blog/articles/modern-deployment.html'
import DockerizedExpress from 'html-loader!./blog/articles/dockerized-express-js.html'
import DockerTips from 'html-loader!./blog/articles/docker-tips-and-tricks.html'
import ArticleOptimizer from 'html-loader!./blog/articles/open-sourced-article-optimizer.html'
import CanyonRunner from 'html-loader!./blog/articles/open-source-canyonrunner.html'

const writings = [{
  title: 'Create a Dockerized Express service that prevents bad builds',
  date: '01 May 2017',
  slug: 'dockerized-express-service',
  description: 'How to create test-driven web services that won\'t build when broken',
  body: DockerizedExpress,
  image: '/static/assets/img/wakka.png'
},
{
  title: 'Stretching your infrastructure with Forge and Cloudflare',
  slug: 'A-Modern-Deployment-Pipeline-With-DigitalOcean-and-Laravel-Forge-and-Cloudflare',
  date: '04 April 2017',
  description: 'How I once ran 7 node.js and PHP apps, serving over 300,000 requests per month, for $35 with Laravel Forge, DigitalOcean and Cloudflare',
  body: ModernDeployment,
  image: '/static/assets/img/wokka.png'
},
{
  title: 'Docker command-line tips and tricks',
  date: '01 May 2017',
  slug: 'docker-command-line-tips-and-tricks',
  description: 'Handy tips for working with Docker',
  body: DockerTips,
  image: '/static/assets/img/wikka.png'
},
{
  title: 'I open sourced my content analysis tool',
  date: '01 May 2017',
  slug: 'i-open-sourced-my-content-analysis-tool',
  description: 'Article Optimizer is a full stack PHP app that leverages natural language processing to help you optimize your web content',
  body: ArticleOptimizer,
  image: '/static/assets/img/optimizer-blog.png'
},
{
  title: 'I open sourced my Phaser HTML5 game',
  date: '01 May 2017',
  slug: 'i-open-sourced-my-phaser-html-5-game',
  description: 'Learn how to build a complete game including common subsystems',
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
  name: 'blog-index'
}

</script>
<style scoped>
.post-title {
  color: #00bf8f;
}

.post-date {
  color: grey;
}

.post-view__content {
  max-width: 800px;
}

.post-view__content p {
  color: #green;
}

.nameplate {
  top: -200px !important;
}

.content-wrapper {
  max-width: 75%;
}
</style>
