<template>
	<div>
	<h1>{{title}}</h1>
		<button v-on:click="change">获取数据</button>
	</div>
</template>
<script>
	import axios from 'axios';

	export default{
		data(){
			return{
				title:'原数据'
			}
		},
		methods:{
			
			change(){
				var temp = this;
				axios.get('data/test.json').then(function(res){
					temp.title = res.data;
				console.log(res.data);
			})
		}
	}
}
</script>