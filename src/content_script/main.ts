import main from "./main.vue";
import Vue from "vue";
document.body.appendChild(
	new Vue({
		render: (h) => h(main),
	}).$mount().$el
);
