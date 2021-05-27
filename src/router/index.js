import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () =>
			import(/* webpackChunkName: "main" */ '@/views/HomeLayout.vue')
	},
	{
		path: '/links',
		name: 'links',
		component: () =>
			import(/* webpackChunkName: "blog" */ '@/views/Links.vue')
	},
	{
		path: '/blog/:id?',
		name: 'blogReader',
		component: () =>
			import(/* webpackChunkName: "blog" */ '@/views/BlogReader.vue')
	},
	{
		path: '/maker',
		name: 'maker',
		component: () =>
			import(/* webpackChunkName: "maker" */ '@/views/DataMaker.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
