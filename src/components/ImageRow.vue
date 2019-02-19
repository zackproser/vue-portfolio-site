<template>

<b-container class="my-5">
  <b-row>
    <h3 class="my-4">{{ title }}</h3>
  </b-row>

  <b-row v-if="tiled">
    <b-card-group>
            <b-card
              v-for="image in images"
              :title="image.title"
              :img-src="image.src"
              class="post my-3"
              :key="image.src"
              img-top
            >
                <b-card-text>
                  {{ image.description }}
                </b-card-text>

                <br>
                <br>

                <b-button
                  :href="image.link"
                  variant="success"
                  size="lg"
                >
                  Read
                </b-button>

                <div v-if="image.date" slot="footer">
                  <small>{{ image.date }}</small>
                </div>

            </b-card>
    </b-card-group>
  </b-row>

  <b-row v-if="tiled === false">
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
  props: {
    images: Array,
    title: String,
    tiled: Boolean
  }
}

</script>

<style scoped>
 .wrapper {
  height: 200px;
 }
h1, h2, h3, h4 {
  color: #00bf8f;
 }
</style>