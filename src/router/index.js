import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Community from "../views/Community.vue"
import Message from "../views/Message.vue"
import Mine from "../views/Mine.vue"
import Login from "../views/Login.vue"
import Search from "../views/Search.vue"
import EyeVideoPlay from "../views/EyeVideoPlay.vue"
import AtricleContent from "../components/AtricleContent.vue"
import Discovery from "../components/Discovery.vue"

Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: "/home"
	},
	{
		path:'/search',
		component: Search,
		name: 'search'
	},
	{
		path:'/video',
		component: EyeVideoPlay,
		name: 'video',
		props: (route)=>({...route.query})
	},
	{
		path:'/login',
		component: Login,
		name: 'login'
	}
	,
	{
		path: '/home',
		name: 'home',
		redirect: "/home/feed",
		component: Home,
		children: [{
				path: "feed",
				component: AtricleContent
			},
			{
				path: "discovery",
				component: Discovery
			}
		]


	},

	{
		path: '/community',
		name: 'community',
		component: Community
	},
	{
		path: '/message',
		name: 'message',
		component: Message
	},
	{
		path: '/mine',
		name: 'mine',
		component: Mine
	}
	// {
	//   path: '/about',
	//   name: 'about',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
