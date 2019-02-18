<template>
  <b-col>

    <nav-links class="my-5"></nav-links>

    <h1>{{ app.name }}</h1>

    <b-row>
      <p class="lead">
        {{ app.description }}
      </p>

    </b-row>

  </b-col>
</template>

<script>

export default {
  name: 'software-detail',
  props: ['slug'],
  data () {
    return {
      app: this.getApp(this.$route.params.slug)
    }
  },
  methods: {
    getApp: (slug) => {
      console.log(slug)
      return {
        'articleoptimizer': {
          name: 'Article Optimizer',
          description: 'I did wakka wakka'
        }
      }[slug]
    }
  }
}
</script>

<style scoped>
.intro {
  height: 400px;
}
</style>
