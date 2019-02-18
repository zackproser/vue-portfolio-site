<template>
<b-container class="my-5">
    <b-row>
      <h4>{{ title }}</h4>
    </b-row>
    <b-row>
      <b-col v-for="image in images" :key="image.src">
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
  width: 100%;
  height: 14vw;
 }
</style>