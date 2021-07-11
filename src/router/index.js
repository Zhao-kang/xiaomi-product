import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views'
import cart from '@/views/cart'
import home from '@/views/home'
import personal from '@/views/personal'
import category from '@/views/category'

const routes = [
	{	path: '/home', name: 'index',	component: Index },
	// tabs
	{ path: '/home', name: 'home', component: home },
	{ path: '/cart', name: 'cart', component: cart },
	{	path: '/category', name: 'category', component: category },
	{ path: '/personal', name: 'personal', component: personal },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router