<template>
<b-container class="my-5">
    <b-row>
      <h3 class="my-4">{{ title }}</h3>
    </b-row>
    <b-row>
      <b-col v-for="image in images" :key="image.src">
        <span v-if="image.title"><strong>{{ image.title }}</strong></span>
        <a target="_blank" :href="image.link">
          <b-img :src="image.src" :alt="image.alt"  fluid />
        </a>
      </b-col>
    </b-row>
</b-container>
</template>

<script>

export default {
  name: 'image-list',
  props: ['images', 'title']
}

</script>

<style scoped>
 .wrapper {
  height: 200px;
 }
 img {
  height: 14vw;
 }
h1, h2, h3, h4 {
  color: #00bf8f;
 }
</style>