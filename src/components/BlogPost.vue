<template>
  <b-col>

    <nav-links class="my-5"></nav-links>

    <b-container>

      <b-row class="my-5">
        <h1>{{ article.title }}</h1>
      </b-row>

      <b-row>
        <b-col>
          <b-img :src="article.img" fluid/>
        </b-col>
        <b-col col="4">
          <article>
            <span v-html="article.content" class='lead'>
              {{ article.content }}
            </span>
          </article>
        </b-col>
      </b-row>

    </b-container>

  </b-col>
</template>

<script>

export default {
  name: 'blog-post',
  props: ['slug'],
  data () {
    return {
      article: this.getArticle(this.$route.params.slug).article
    }
  },
  methods: {
    getArticle: (slug) => {
      return {
      }[slug]
    }
  }
}
</script>

<style scoped>

</style>
