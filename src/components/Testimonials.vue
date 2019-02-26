<template>
    <b-carousel id="carousel1"
                style="color: #000;"
                :interval="6000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

    <testimonial-item
      v-for="testimonial in testimonials"
      :key="testimonial.title"
      :name="testimonial.name"
      :title="testimonial.title"
      :quote="testimonial.quote"
      :imgSrc="testimonial.imgSrc"
    >
    </testimonial-item>

    </b-carousel>
</template>

<script>

import testimonials from '../../data/testimonials.json'

export default {
  name: 'testimonials-carousel',
  data () {
    return {
      slide: 0,
      sliding: null,
      testimonials
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style>

</style>