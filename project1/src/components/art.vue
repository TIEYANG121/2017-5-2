<template>
	<div>
		<h1>{{art.title}}</h1>
		<div v-html="art.content"></div>
		<h3>{{art.author}}</h3>
		<h3>{{art.date}}</h3>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				art:null,
			}
		},
		mounted(){
			var temp =this;
			axios.get('./getcontent',{params:this.$route.query}).then(function(res){
				temp.art = res.data;
			})
		}	
	}
</script>