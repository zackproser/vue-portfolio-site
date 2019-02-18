import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Blog from '@/components/BlogIndex'
import Software from '@/components/SoftwareIndex'
import SoftwareDetail from '@/components/SoftwareDetail'

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
      path: '/blog/:slug?',
      name: 'blog',
      component: Blog,
      props: true
    },
    {
      path: '/artwork',
      beforeEnter () {
        location.href = 'https://instagram.com/zackproser'
      }
    },
    {
      path: '/resume',
      beforeEnter () {
        location.href = 'https://www.linkedin.com/in/zackproser/'
      }
    },
    {
      path: '/software',
      name: 'Software',
      component: Software
    },
    {
      path: '/software/:slug',
      name: 'SoftwareDetail',
      component: SoftwareDetail
    }
  ]
})
