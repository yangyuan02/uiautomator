import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import index from "../views/index.vue";

// 注册插件
Vue.use(VueRouter);

// 注册路由
const routes: RouteConfig[] = [
	{
		path: "/",
		name: "home",
		alias: "index",
		component: index,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
