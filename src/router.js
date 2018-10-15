import Vue from 'vue'
import Router from 'vue-router'
import ErrorPage from '@/views/Error.vue'
import Category from '@/views/Category.vue'
import Dish from '@/views/Dish.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/error',
      component: ErrorPage
    },
    {
      path: '/',
      component: Category,
    },
    {
      path: '/:dishType',
      component: Category
    },
    {
      path: '/:dishType/:dish',
      component: Dish
    },
    {
      path: '*',
      component: ErrorPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 };
  }
})
