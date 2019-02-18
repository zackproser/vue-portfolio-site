<template>
    <b-carousel id="carousel1"
                style="color: #000;"
                :interval="7000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <testimonial-item
        name="John Funge"
        title="Chief Product Officer at DataTribe"
        quote="Zack is very resourceful, entrepreneurial and scrappy. He’ll figure out a way of getting whatever it is done. As well as technical skills, Zack is rounded. He can write and he has broad interests - such as visual arts. Zack has a lot of initiative and will proactively take action when he sees something that needs to be done. I’d be remiss if I didn’t mention Zack’s work ethic. He never shied away from our demanding hours and would regularly spend the little after-work time he had deepening his technical skills. Lastly, Zack has a great sense of humor and is one of those folks that just makes work more fun. He’s someone you want on your team."
        imgSrc="https://media.licdn.com/dms/image/C4D03AQGXVfTs2aI7xA/profile-displayphoto-shrink_100_100/0?e=1552521600&v=beta&t=vhEEPwtx_WTxIGnGBYO9qt0FhQelyF89C7voU6B7rtc"
      >
      </testimonial-item>

      <testimonial-item
        name="Leo Scott"
        title="CTO at WealthEngine"
        quote="Zack is an all-round business athlete. Whether he’s helping to brainstorm viral marketing strategies or working on your development team he’s going to provide a ton of value. He’s a fast learner and a hard worker, and is fun to work with."
        imgSrc="https://media.licdn.com/dms/image/C4D03AQH5vxp2Dy5msQ/profile-displayphoto-shrink_100_100/0?e=1552521600&v=beta&t=2coZfKgb9I6C9Jl7o96YITqqd3a-ejJQMW18S4r8Ej4"
      >
      </testimonial-item>


      <testimonial-item
        name="Steven Fusco"
        title="Senior Software Developer, R&D at AlienVault"
        quote="Zack is a great addition to any development team. He thinks fast, adapts to shifting requirements, and has proven he can quickly ramp up on the latest technologies to put them to good use.
"
        imgSrc="https://media.licdn.com/dms/image/C4E03AQGvNxxLWxEZVA/profile-displayphoto-shrink_100_100/0?e=1552521600&v=beta&t=9zU5L_1IG02ml_d2Glg8164_kthOlT1p7SXoXP-Zj8o"
      >
      </testimonial-item>

    </b-carousel>
</template>

<script>
export default {
  name: 'testimonials-carousel',
  data () {
    return {
      slide: 0,
      sliding: null
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