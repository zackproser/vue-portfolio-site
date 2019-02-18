<template>
  <b-col>

    <nav-links class="my-5"></nav-links>

    <b-row>
      <p class="lead">
        My software
      </p>
    </b-row>

    <image-row
      :images="[
      {
        src: 'http://www.wealthengine.com/wp-content/uploads/2018/10/logo.png',
        alt: 'BrightContext Corporation',
        relLink: '/software/sluggy'
      },
      {
        src: 'http://www.wealthengine.com/wp-content/uploads/2018/10/logo.png',
        alt: 'WealthEngine'
      },
      {
        src: 'http://www.wealthengine.com/wp-content/uploads/2018/10/logo.png',
        alt: 'Cloudmark'
      },
      {
        src: 'http://www.wealthengine.com/wp-content/uploads/2018/10/logo.png',
        alt: 'Cloudflare'
      },
      {
        src: 'http://www.wealthengine.com/wp-content/uploads/2018/10/logo.png',
        alt: 'Johns Hopkins'
      }
      ]"
      title=""
    >

    </image-row>

    <image-row
     :images="[
      {
        src: 'https://via.placeholder.com/150',
        alt: 'BrightContext Corporation',
        link: 'https://www.crunchbase.com/organization/brightcontext'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'WealthEngine'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'Cloudmark'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'Cloudflare'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'Johns Hopkins'
      }
      ]"
      title=""
    >
    </image-row>

    <image-row
     :images="[
      {
        src: 'https://via.placeholder.com/150',
        alt: 'BrightContext Corporation',
        link: 'https://www.crunchbase.com/organization/brightcontext'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'WealthEngine'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'Cloudmark'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'Cloudflare'
      },
      {
        src: 'https://via.placeholder.com/150',
        alt: 'Johns Hopkins'
      }
      ]"
      title=""
    >
    </image-row>

  </b-col>
</template>

<script>

export default {
  name: 'software'
}
</script>

<style scoped>
.intro {
  height: 400px;
}
</style>
