import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '_c/HelloWorld'
import PetList from '_c/PetList'
import PetListTo from '_c/PetListTo'
import Login from '_c/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: HelloWorld,
      children: [
        {
          path: '/PetList',
          name: 'PetList',
          component: PetList
        },
        {
          path: '/PetListTo',
          name: 'PetListTo',
          component: PetListTo
        }
      ]
    },
  ]
})
