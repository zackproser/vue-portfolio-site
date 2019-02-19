<template>
<b-row>
    <div :class="['logo', selected ? 'logo--absolute': '', ready ? 'logo--active' : '']" @click="closePost()">
    </div>
    <div :class="['post-view', selected ? 'post-view--active' : '' , ready ? 'post-view--ready' : '' ]">
        <div class="post-view__container" sm="6" md="7" lg="8" v-if="selected">
            <div class="post-controls">
                <div class="post-control post-control--close" @click="closePost()"><i class="ion-ios-close-empty"></i></div>
                <div class="post-control" id="next-post" @click="nextPost()"><i class="ion-ios-arrow-right"></i></div>
                <div class="post-control" id="prev-post" @click="prevPost()"><i class="ion-ios-arrow-left"></i></div>
            </div>
            <h2 class="post-title">{{currentPost.title}}</h2>
            <h4 class="post-date">{{currentPost.date}}</h4>
            <div class="post-view__content" v-html="parsedPostBody"></div>
        </div>
    </div>
    <div xs="12" sm="12" md="2" lg="2" :class="['post-list', selected ? 'post-list--hide' : '']">
        <b-card-group v-for="i in Math.ceil(posts.length / 3)" :key="i">
            <b-card :title="post.title" :img-src="post.image" class="post my-3" v-for="post in posts.slice((i - 1) * 3, i * 3)" :key="post.slug" @click="changePost(post.slug)" img-top>
                <p class="card-text">{{ post.description }}</p>
                <div slot="footer">
                    <small>{{post.date}}</small>
                </div>
            </b-card>
        </b-card-group>
    </div>
</b-row>
</template>

<script>

let marked = require('marked')

export default {
  props: {
    prefix: String,
    slug: String,
    posts: Array
  },
  data () {
    return {
      currentPost: null,
      selected: false,
      ready: false,
      lastSelectedPost: null
    }
  },
  computed: {
    parsedPostBody () {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      })
      return marked(this.currentPost.body)
    }
  },
  mounted () {
    console.log(`mounted ${this.slug}`)
    this.selected = false
    if (this.slug) {
      this.changePost(this.slug)
    } else {
      this.selected = false
    }
  },
  watch: {
    '$route' (to, from) {
      // Watch for and handle the case where someone clicks back to blog index via nav
      if (!to.params.slug) {
        this.selected = false
      }
    }
  },
  methods: {
    getPost (slug) {
      console.log(`getPost ${slug}`)
      return (this.posts.filter(post => post.slug === slug).pop() || this.posts.shift())
    },
    changePost (slug) {
      console.log(`changePost ${slug}`)
      this.currentPost = this.getPost(slug)
      this.$router.push({name: this.prefix, params: { slug }})
      this.selected = true
      this.ready = true
    },
    closePost () {
      if (this.lastSelectedPost !== null) {
        this.selected = false
        this.ready = false
      }
    },
    nextPost () {
      if (this.lastSelectedPost < this.posts.length - 1) {
        this.lastSelectedPost++
        this.ready = false
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost]
          this.postImage = this.currentPost.image
          this.ready = true
        }, 600)
      }
    },
    prevPost () {
      if (
        this.lastSelectedPost <= this.posts.length - 1 &&
        this.lastSelectedPost !== 0
      ) {
        this.lastSelectedPost--
        this.ready = false
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost]
          this.postImage = this.currentPost.image
          this.ready = true
        }, 600)
      }
    }
  },
  created () {
    window.addEventListener('keydown', e => {
      e.keyCode === 39 ? this.nextPost() : false
      e.keyCode === 37 ? this.prevPost() : false
      e.keyCode === 27 ? this.closePost() : false
    })
  },
  name: 'exhibit'
}
</script>

<style>
.post-title {
  color: #00bf8f;
}
.post-date {
  color: grey;
}
.post-view__content p {
  font-size: 20px;
}
.post-view__content img {
  max-width: 100%;
}
</style>