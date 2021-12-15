import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Sign from '../views/Sign.vue'
import Menu from '../views/Menu.vue'
import Home from '../views/sys/Home.vue'
import Show from '../views/sys/Show.vue'
import ThreeD from '../views/sys/ThreeD.vue'

Vue.use(VueRouter)

const routes = [
  {
	  path: '*',
	  redirect: '/'
  },
  {
	  path: '/',
	  name: 'Login',
	  component: Login,
  },
  {
  	  path: '/sign',
  	  name: 'Sign',
  	  component: Sign,
  },
  {
	  path: '/menu',
	  name: 'Menu',
	  component: Menu,
	  children: [
		  {
			  path: '/home',
			  name: '导航',
			  component: Home
		  },
		  {
			  path: '/find',
			  name: '统计数据',
			  component: Show
		  },
		  {
			  path: '/three',
			  name: '3D展示',
			  component: ThreeD
		  }
	  ]
  }
]

const router = new VueRouter({
  routes
})

export default router