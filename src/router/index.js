import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import expandTable from '../components/expandTableHeight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/expandTable',
      name: 'expandTable',
      component: expandTable
    },
  ]
})
