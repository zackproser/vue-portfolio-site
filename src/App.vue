<template>
  <div id="app">
    <b-container class="main-wrapper clearfix" fluid>
      <b-row>
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

a {
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

#bubbles {
    margin-left: -6.5em;
    position: relative;
    left: 50%;
    top: 2em;
    z-index: 4
}

.bubble {
    width: 16px;
    height: 16px;
    background: #5bf983;
    border-radius: 200px;
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;
    position: absolute
}

.x1 {
    left: 85px;
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    transform: scale(.5);
    opacity: .4;
    animation: moveclouds 4.1s infinite;
    -webkit-animation: moveclouds 4.1s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: moveclouds 4.1s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -o-animation: moveclouds 4.1s linear infinite, sideWays 4s ease-in-out infinite alternate
}

.x2 {
    left: 86px;
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    transform: scale(.5);
    opacity: .5;
    -webkit-animation: moveclouds 5s linear infinite, sideWays 5s ease-in-out infinite alternate;
    -moz-animation: moveclouds 5s linear infinite, sideWays 5s ease-in-out infinite alternate;
    -o-animation: moveclouds 5s linear infinite, sideWays 5s ease-in-out infinite alternate
}

.x3 {
    left: 87px;
    -webkit-transform: scale(.35);
    -moz-transform: scale(.35);
    transform: scale(.35);
    opacity: .6;
    -webkit-animation: moveclouds 3.9s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: moveclouds 3.9s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -o-animation: moveclouds 3.9s linear infinite, sideWays 4s ease-in-out infinite alternate
}

.x4 {
    left: 88px;
    -webkit-transform: scale(.4);
    -moz-transform: scale(.4);
    transform: scale(.4);
    opacity: .35;
    -webkit-animation: moveclouds 6.1s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: moveclouds 6.1s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -o-animation: moveclouds 6.1s linear infinite, sideWays 2s ease-in-out infinite alternate
}

.x5 {
    left: 89px;
    -webkit-transform: scale(.2);
    -moz-transform: scale(.2);
    transform: scale(.2);
    opacity: .8;
    -webkit-animation: moveclouds 3.5s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: moveclouds 3.5s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -o-animation: moveclouds 3.5s linear infinite, sideWays 3s ease-in-out infinite alternate
}

.x6,
.x7 {
    opacity: .9
}

.x6 {
    left: 90px;
    -webkit-transform: scale(.45);
    -moz-transform: scale(.45);
    transform: scale(.45);
    -webkit-animation: moveclouds 7s linear infinite, sideWays 7s ease-in-out infinite alternate;
    -moz-animation: moveclouds 7s linear infinite, sideWays 7s ease-in-out infinite alternate;
    -o-animation: moveclouds 7s linear infinite, sideWays 7s ease-in-out infinite alternate
}

.x7 {
    left: 91px;
    -webkit-transform: scale(.7);
    -moz-transform: scale(.7);
    transform: scale(.7);
    -webkit-animation: moveclouds 4.7s linear infinite, sideWays 6s ease-in-out infinite alternate;
    -moz-animation: moveclouds 4.7s linear infinite, sideWays 6s ease-in-out infinite alternate;
    -o-animation: moveclouds 4.7s linear infinite, sideWays 6s ease-in-out infinite alternate
}

.x8 {
    left: 92px;
    -webkit-transform: scale(.6);
    -moz-transform: scale(.6);
    transform: scale(.6);
    opacity: .4;
    -webkit-animation: moveclouds 5.5s linear infinite, sideWays 18s ease-in-out infinite alternate;
    -moz-animation: moveclouds 5.5s linear infinite, sideWays 18s ease-in-out infinite alternate;
    -o-animation: moveclouds 5.5s linear infinite, sideWays 18s ease-in-out infinite alternate
}

.x10,
.x11,
.x12,
.x13,
.x9 {
    opacity: .9
}

.x9 {
    left: 93px;
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    transform: scale(.5);
    -webkit-animation: moveclouds 6.2s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: moveclouds 6.2s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -o-animation: moveclouds 6.2s linear infinite, sideWays 4s ease-in-out infinite alternate
}

.x10 {
    left: 94px;
    -webkit-transform: scale(.3);
    -moz-transform: scale(.3);
    transform: scale(.3);
    -webkit-animation: moveclouds 7.4s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: moveclouds 7.4s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -o-animation: moveclouds 7.4s linear infinite, sideWays 2s ease-in-out infinite alternate
}

.x11 {
    left: 95px;
    -webkit-transform: scale(.4);
    -moz-transform: scale(.4);
    transform: scale(.4);
    -webkit-animation: moveclouds 3.8s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: moveclouds 3.8s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -o-animation: moveclouds 3.8s linear infinite, sideWays 3s ease-in-out infinite alternate
}

.x12,
.x15 {
    -webkit-transform: scale(.2);
    -moz-transform: scale(.2)
}

.x12 {
    left: 96px;
    transform: scale(.2);
    -webkit-animation: moveclouds 5.7s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: moveclouds 5.7s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -o-animation: moveclouds 5.7s linear infinite, sideWays 3s ease-in-out infinite alternate
}

.x13 {
    left: 97px;
    -webkit-transform: scale(.3);
    -moz-transform: scale(.3);
    transform: scale(.3);
    -webkit-animation: moveclouds 4.2s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: moveclouds 4.2s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -o-animation: moveclouds 4.2s linear infinite, sideWays 2s ease-in-out infinite alternate
}

.x14 {
    left: 98px;
    -webkit-transform: scale(.1);
    -moz-transform: scale(.1);
    transform: scale(.1);
    opacity: .7;
    -webkit-animation: moveclouds 3.2s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: moveclouds 3.2s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -o-animation: moveclouds 3.2s linear infinite, sideWays 2s ease-in-out infinite alternate
}

.x15 {
    left: 99px;
    transform: scale(.2);
    opacity: .6;
    -webkit-animation: moveclouds 3.4s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: moveclouds 3.4s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -o-animation: moveclouds 3.4s linear infinite, sideWays 2s ease-in-out infinite alternate
}

.x16 {
    left: 100px;
    -webkit-transform: scale(.2);
    -moz-transform: scale(.2);
    transform: scale(.2);
    opacity: .9;
    -webkit-animation: moveclouds 4.3s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: moveclouds 4.3s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -o-animation: moveclouds 4.3s linear infinite, sideWays 3s ease-in-out infinite alternate
}

@media (min-width:991px) {
    #bubbles {
        top: 2em
    }
}

@-webkit-keyframes moveclouds {
    0% {
        top: 1em
    }
    100% {
        top: -500px
    }
}

@-webkit-keyframes sideWays {
    0% {
        margin-left: -.1em
    }
    100% {
        margin-left: .2em
    }
}

@-moz-keyframes moveclouds {
    0% {
        top: 1em
    }
    100% {
        top: -10em
    }
}

@-moz-keyframes sideWays {
    0% {
        margin-left: 0
    }
    100% {
        margin-left: 50px
    }
}

@-o-keyframes moveclouds {
    0% {
        top: 500px
    }
    100% {
        top: -500px
    }
}

@-o-keyframes sideWays {
    0% {
        margin-left: 0
    }
    100% {
        margin-left: 50px
    }
}

</style>
