import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () =>
			import(/* webpackChunkName: "main" */ '@/views/MainGrid.vue')
	},
	{
		path: '/blog/:id',
		name: 'blog',
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
