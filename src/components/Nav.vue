<template>
      <b-nav class="my-5">
        <b-nav-item><router-link to="/" exact>About</router-link></b-nav-item>
        <b-nav-item><router-link to="/artwork">Artwork</router-link></b-nav-item>
        <b-nav-item><router-link to="/resume">Resume</router-link></b-nav-item>
        <b-nav-item><router-link to="/software">Software</router-link></b-nav-item>
        <b-nav-item><router-link to="/blog">Blog</router-link></b-nav-item>
      </b-nav>
</template>

<script>
export default {
  name: 'nav-links'
}
</script>

<style scoped>
.nav a {
    font-size: 24px;
    font-weight: 800;
    color: black;
}
.nav a.active {
  color: #00bf8f;
}
.row {
  flex-wrap: nowrap !Important;
}
</style>

