import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Photo from '@/components/Photo'
import MyWork from '@/components/MyWork'
import HaveFun from '@/components/HaveFun'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/MyWork',
      name: 'MyWork',
      component: MyWork
    },
    {
      path: '/HaveFun',
      name: 'HaveFun',
      component: HaveFun
    }
  ]
})
