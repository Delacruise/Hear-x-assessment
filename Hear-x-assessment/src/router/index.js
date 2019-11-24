import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
