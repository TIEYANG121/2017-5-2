import Vue from 'vue';
import VueRouter from 'vue-router';

import art from '../components/art.vue'; 
import lists from '../components/lists.vue'; 

Vue.use(VueRouter);
export default new VueRouter ({
	routes:[
		{path:'/',component:lists},
		{path:'/art',component:art},

	]
})