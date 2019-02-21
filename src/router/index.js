import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Blog from '@/components/BlogIndex'
import Software from '@/components/SoftwareIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/artwork',
      beforeEnter () {
        location.href = 'https://instagram.com/zackproser'
      }
    },
    {
      path: '/github',
      beforeEnter () {
        location.href = 'https://github.com/zackproser'
      }
    },
    {
      path: '/resume',
      beforeEnter () {
        location.href = 'https://www.linkedin.com/in/zackproser/'
      }
    },
    {
      path: '/software/:slug?',
      name: 'software',
      component: Software,
      props: true
    },
    {
      path: '/blog/:slug?',
      name: 'blog',
      component: Blog,
      props: true
    }
  ]
})
