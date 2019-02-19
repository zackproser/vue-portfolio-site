<template>
  <div id="app">
    <b-container class="main-wrapper clearfix" fluid>
      <b-row class="outer-row">
        <b-col xs="12" sm="4" md="3" lg="2" class="sidebar">
            <b-row class="h-100">
              <div class="col-sm-12 my-auto nameplate text-center">
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
          <transition name="fade">
            <router-view class="content-wrapper"></router-view>
          </transition>
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

p a {
  color: #00bf8f;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sidebar {
  background: #00bf8f;
}
.sidebar-content {
  margin-top: 40%;
}

.nameplate {
  top: -200px;
}

.nameplate p {
  font-size: 3em;
  color: #fff;
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

.content-wrapper {
  margin: 35px;
  width: 60%;
}

img.mugshot {
  outline: 1px solid white;
  border-radius: 50%;
}

p.professional-title {
  font-size: 26px;
}

.outer-row {
  min-height: 1500px !Important;
}
</style>
