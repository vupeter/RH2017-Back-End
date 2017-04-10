//Require API Manager
const express = require('express');
const router = express.Router();

const Location = require('../structures/location');
const User = require('../structures/user');
var request = require('request');

/* for(count = 0; count < 10; count++) {
	var x = count*10+1000
	request.post({
		rejectUnauthorized: false,
		 url: "https://cryndex.io/api/ru/user/create/",
		 headers: {
			"Content-Type": "application/json"
		 },
		 body: {
			"owner":true, 
			"name":"owner"+count,
			"avatarURL":"https://static.pexels.com/photos/101584/pexels-photo-101584.jpeg",
			"description":"hi there",
			"ratings":[],
			"contact":{
				"email":"user"+count+"email.com",
				"phone":"911",
				"address":""+x+" Yonge Street"
			},
			"orders":{}
		 },
		 json:true
	}, function(error, response, body){
	   console.log(error);
	   console.log(JSON.stringify(response));
	   console.log(body);
	});
}

for(count = 0; count < 10; count++) {
	var x = count*10+2000
	request.post({
		rejectUnauthorized: false,
		 url: "https://cryndex.io/api/ru/user/create/",
		 headers: {
			"Content-Type": "application/json"
		 },
		 body: {
			"owner":false, 
			"name":"user"+count,
			"avatarURL":"https://static.pexels.com/photos/101584/pexels-photo-101584.jpeg",
			"description":"hi there",
			"ratings":[],
			"contact":{
				"email":"user"+count+"@email.com",
				"phone":"911",
				"address":""+x+" Yonge Street"
			},
			"orders":{}
		 },
		 json:true
	}, function(error, response, body){
	   console.log(error);
	   console.log(JSON.stringify(response));
		console.log(body);
	});
} */
for(count = 0; count < 6; count++) {
	var x = count*10+1000
	request.post({
		rejectUnauthorized: false,
		 url: "https://cryndex.io/api/ru/location/create/",
		 headers: {
			"Content-Type": "application/json"
		 },
		 body: {
			"ownerID":"58ce23f98be6c90a6721d9b"+count, 
			"address":""+x+" Yonge Street",
			"rating":5,
			"price":count*5 + 20,
			"capacity":5,
			"availability":[{start:12, end:8}],
			"bookings":{}
		 },
		 json:true
	}, function(error, response, body){
	   console.log(error);
	   console.log(JSON.stringify(response));
	   console.log(body);
	});
}


/* for(count = 0; count < 10; count++){
	let user = new User();
	var x = count*10+1000;
	var profile = {"owner":true, 
					"name":"owner"+count,
					"avatarURL":"https://static.pexels.com/photos/101584/pexels-photo-101584.jpeg",
					"description":"hi there",
					"ratings":[],
					"contact":{
						"email":"user"+count+"email.com",
						"phone":"911",
						"address":""+x+" Yonge Street"
					},
					"orders":{}
	}
	console.log(count);
	await user.create(profile);
	{
			"owner":true, 
			"name":"owner"+count,
			"avatarURL":"https://static.pexels.com/photos/101584/pexels-photo-101584.jpeg",
			"description":"hi there",
			"ratings":[],
			"contact":{
				"email":"user"+count+"email.com",
				"phone":"911",
				"address":""+x+" Yonge Street"
			},
			"orders":{}
		 }
} */
request.get({
		rejectUnauthorized: false,
		 url: "https://cryndex.io/api/ru/user/58ce2afe48a81d38b782bba8/book/58ce2afe48a81d38b782bbb4/8/28",
		 headers: {
			"Content-Type": "application/json"
		 },
		 json:true
	}, function(error, response, body){
	   console.log(error);
	   console.log(JSON.stringify(response));
		console.log(body);
	});