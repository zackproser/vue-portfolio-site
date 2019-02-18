<template>
  <b-col>

    <nav-links class="my-5"></nav-links>

    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="job in jobs" :key="job.company">
            <b-row class="mt-3">
              <b-col sm="2" md="2" lg="2">
                <img :src="job.logo">
              </b-col>
              <b-col sm="10" md="10" lg="10" class="pl-5">
                <p class="lead">{{ job.title }}</p>
                <p>
                  <strong>{{ job.company }}</strong>
                  <br>
                  <em>{{ job.range }}</em>
                  <br>
                  <br>
                  {{ job.description }}
                </p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>

export default {
  name: 'resume',
  data () {
    return {
      jobs: [
        {
          logo: 'https://via.placeholder.com/150',
          company: 'Cloudflare',
          range: 'April 2017 - Present',
          title: 'Software Engineer',
          description: 'Full stack developer on a core API team designing and implementing systems, services and web applications in Golang, PHP, Node.js, Javascript, Bash, delivered via Docker and Kubernetes. Part application development part devops.'
        },
        {
          logo: 'https://via.placeholder.com/150',
          company: 'Cloudmark',
          range: 'Feb 2015 - April 2017',
          title: 'Software Engineer',
          description: 'Designed and implemented solutions for multiple teams as a full-stack developer working in PHP, node.js, Javascript, backbone, Golang, CSS, SASS, bash. Designed and implemented containerized build systems leveraging Docker.'
        },
        {
          logo: 'https://via.placeholder.com/150',
          company: 'WealthEngine',
          range: 'April 2014 - June 2014',
          title: 'Software Engineer',
          description: 'After BrightContext was acquired by WealthEngine, I helped get the WealthEngine team up to speed with our platform. In the meantime, I wrote the first publicly available SDKs for the WealthEngine API in node.js, Python and PHP.'
        },
        {
          logo: 'https://via.placeholder.com/150',
          company: 'BrightContext Corporation',
          range: 'April 2012 - April 2014',
          title: 'Software Engineer',
          description: 'Employee #9 at a real-time stream processing engine startup. Built web apps and demos in Node.js and FunnelCake, BrightContext\'s proprietary stream-processing language. BrightContext was acquired by Wealthengine.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.list-group-item {
  margin: 10px 0 10px 0;
}
</style>
