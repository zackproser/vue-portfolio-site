<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col xs="12" sm="12" md="2" lg="2" xl="2" class="sidebar">
            <b-row class="h-100">
              <div class="my-auto mx-auto nameplate text-center">
                <p class="lead">Zack Proser</p>
                <p class="professional-title">Software Engineer</p>
                <div id="bubbles">
                    <div class="bubble x1"></div>
                    <div class="bubble x2"></div>
                    <div class="bubble x3"></div>
                    <div class="bubble x4"></div>
                    <div class="bubble x5"></div>
                    <div class="bubble x6"></div>
                    <div class="bubble x7"></div>
                    <div class="bubble x8"></div>
                    <div class="bubble x9"></div>
                    <div class="bubble x10"></div>
                    <div class="bubble x11"></div>
                    <div class="bubble x12"></div>
                    <div class="bubble x13"></div>
                    <div class="bubble x14"></div>
                    <div class="bubble x15"></div>
                    <div class="bubble x16"></div>
                </div>
                <img src="/static/assets/img/beaker.png">
              </div>
            </b-row>
        </b-col>
        <b-col xs="12" sm="12" md="10" lg="10" xl="10">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    document.title = 'Zack Proser Portfolio Site'
  }
}
</script>

<style>

body, html {
  height: 100%;
}

p a, li a, h4 {
  color: #00bf8f;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sidebar {
  background: #00bf8f;
}

.nameplate p {
  font-size: 3em;
  color: #fff;
}

.post-title {
  color: #00bf8f;
}

.post-date {
  color: grey;
}

.post-view__content {
  max-width: 800px;
}

.post-view__content p, li {
  font-size: 20px;
}

.post-view__content img {
  max-width: 100%;
}

.post-view_content p {
  color: #green;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .45s;
}

.fade-enter-active {
  transition-delay: .45s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

p.professional-title {
  font-size: 26px;
}
</style>
