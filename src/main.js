// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'highlight.js/styles/monokai-sublime.css'
import Highlight from 'vue-markdown-highlight'
import VueAnalytics from 'vue-analytics'

Vue.component('navLinks', require('./components/Nav.vue').default)
Vue.component('testimonialsCarousel', require('./components/Testimonials.vue').default)
Vue.component('testimonialItem', require('./components/testimonialItem.vue').default)
Vue.component('imageRow', require('./components/ImageRow.vue').default)
Vue.component('resumeBody', require('./components/Resume.vue').default)
Vue.component('exhibit', require('./components/Exhibit.vue').default)

require('./assets/custom.css')

Vue.use(BootstrapVue)
Vue.use(Highlight)
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-13188644-29',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
