var express = require('express');
var app = express();
app.use(express.static('./'))
var art=[
	{"title":"html入门",
	"article":"\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	",
	"author":"超人",
	"date":"2017-5-2"
	},
	{"title":"html入门",
	"article":"\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	",
	"author":"超人",
	"date":"2017-5-2"
	},
	{"title":"html入门",
	"article":"\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	<p>html入门html入门html入门html入门html入门html入门html入门html入门html入门</p>\
	",
	"author":"超人",
	"date":"2017-5-2"
	},
]
app.get('/getdata',function(req,res){
	res.send(art);
})
app.get('/getcontent',function(req,res){
	for(var i=0;i<art.length;i++){
		if(art[i].title===req.query.title){
			res.send(art[i]);
			return;
		}
	}
	res.send('未能获取文章')
})


app.listen(8080,function(){
	console.log('server is running');
})