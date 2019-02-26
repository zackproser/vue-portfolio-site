<template>
  <div>
  <nav-links></nav-links>
  <b-container>
    <testimonial-flat
      v-for="testimonial in testimonials"
      :key="testimonial.title"
      :name="testimonial.name"
      :title="testimonial.title"
      :quote="testimonial.quote"
      :imgSrc="testimonial.imgSrc"
    >
    </testimonial-flat>
  </b-container>
  </div>
</template>

<script>

import testimonials from '../../data/testimonials.json'

export default {
  name: 'testimonials-gallery',
  data () {
    return {
      testimonials
    }
  }
}
</script>
<style>
  .testimonial-item {
    margin: 30px 0 30px 0;
  }

</style>