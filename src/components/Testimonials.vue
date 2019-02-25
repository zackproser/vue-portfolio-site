<template>
    <b-carousel id="carousel1"
                style="color: #000;"
                :interval="6000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <testimonial-item
        name="John Funge"
        title="Chief Product Officer at DataTribe"
        quote="Zack is very resourceful, entrepreneurial and scrappy. He’ll figure out a way of getting whatever it is done. As well as technical skills, Zack is rounded. He can write and he has broad interests - such as visual arts. Zack has a lot of initiative and will proactively take action when he sees something that needs to be done. I’d be remiss if I didn’t mention Zack’s work ethic. He never shied away from our demanding hours and would regularly spend the little after-work time he had deepening his technical skills. Lastly, Zack has a great sense of humor and is one of those folks that just makes work more fun. He’s someone you want on your team."
        imgSrc="/static/assets/img/testimonials/john-funge.jpg"
      >
      </testimonial-item>

      <testimonial-item
        name="Leo Scott"
        title="CTO at WealthEngine"
        quote="Zack is an all-round business athlete. Whether he’s helping to brainstorm viral marketing strategies or working on your development team he’s going to provide a ton of value. He’s a fast learner and a hard worker, and is fun to work with."
        imgSrc="/static/assets/img/testimonials/leo-scott.jpg"
      >
      </testimonial-item>

      <testimonial-item
        name="Steven Fusco"
        title="Senior Software Developer, R&D at AlienVault"
        quote="Zack is a great addition to any development team. He thinks fast, adapts to shifting requirements, and has proven he can quickly ramp up on the latest technologies to put them to good use.
"
        imgSrc="/static/assets/img/testimonials/steven-fusco.jpg"
      >
      </testimonial-item>

      <testimonial-item
        name="Sachin Fernandes"
        title="Systems Engineer at Cloudflare"
        quote="I have worked with Zack on multiple projects. Every one of these encounters with him has not only made me a better engineer, but a better person.
        He is a brilliant engineer who truly cares about his code and the people who use it.
        He has the remarkable ability to pick apart hard problems ( technical or otherwise ) and put together a solution that benefits everyone.
        He is articulate, thoughtful, kind and exceptionally intelligent.
        Zack is also one of the only people I have ever met to have a real world implementation of an AI bot.
        His talents are as rare as they get and I unequivocally recommend him."
        imgSrc="/static/assets/img/testimonials/sachin-fernandes.jpg"
      >
      </testimonial-item>

      <testimonial-item
        name="Christian Paulus"
        title="VP Product Marketing at Cohesity"
        quote="I worked closely with Zack at Cloudflare. Zack was clearly the most talented, skilled and hard working developer in his team. I frequently tapped his brain for technical questions and he was always there to help. He is a true pleasure to work with and I can highly recommend him."
        imgSrc="/static/assets/img/testimonials/christian-paulus.jpg"
      >
      </testimonial-item>

      <testimonial-item
        name="Anthony Davanzo"
        title="Technical Product Marketing Manager at HashiCorp"
        quote="Zack is exactly the type of engineer you want on your team. He's smart, collaborative, and tremendously effective. Zack and I worked together building tools and websites to drive revenue and customer success. When challenging ideas were presented, Zack would jump at the opportunity to learn without any hint of hesitation to take on difficulty.

        Personally, he's kind, willing to help, and keeps a good sense of humor."
        imgSrc="/static/assets/img/testimonials/anthony-davanzo.jpg"
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