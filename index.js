const express = require('express');
const hbs = require('hbs');

const app = express();


hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');

//use html directly
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});


app.get('/',(req,res)=>{
	//res.send('Hellow world');
	res.render('home.hbs',{
		pageTitle:'Home Page',
		welcomeMessage:'Welcome To My Website'
	});
});

app.get('/help',(req,res)=>{
	res.send({
		name:'kuldee',
		likes:['solving puzzel','vollyvall'
		]
	});
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'About Page'
	});
});

app.listen(3000,()=>{
	console.log('Server is Up');
});