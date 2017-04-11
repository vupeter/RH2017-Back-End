//Require API Manager
let mongoose = require('mongoose');
const express = require('express');
const faker = require('faker');
const router = express.Router();

const Location = require('../structures/location');
const User = require('../structures/user');
const request = require('request');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
            
db.once('open', function() {
    
});

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

const randomPrice = function randomPrice(){
	return Math.ceil(Math.random()*30);
}

const randomAvailability = function randomAvailability(){
	let start = Math.floor(Math.random()*6 + 6);
	let end = Math.floor(Math.random()*9 + 15);

	return {start,end};
}

const randomCapacity = function randomCapacity(){
	return Math.floor(Math.random() * 10 + 5);
}

const randomRating = function randomRating(){
	return Math.ceil(Math.random() * 5);
}

const streets = ['King St W', 'Yonge','Dundas St W','Bloor St W','Dundas St E','Dufferin St','Eglington Ave W','Eglington Ave E'];

const randomAddress = function randomAddress(){
	let number = Math.ceil(Math.random()*1500);
	let street = streets[Math.floor(Math.random()*streets.length)];
	return `${number} ${street}`;
}

//User generate
/* const userGenerate = function userGenerate(){
	for(let count = 0; count < 10; count++){
		let x = count*10+1000
		let user = new User();
		await user.create({
			"owner":true, 
			"name": faker.name.findName(),
			"avatarURL": faker.image.avatar(),
			"description":"hi there",
			"ratings":[],
			"contact":{
				"email":"user"+count+"@email.com",
				"phone":"911",
				"address": x+" Yonge Street"
			},
			"orders":{}
		 });
	}
}*/


//Location generate
const locationGenerate = function locationGenerate(){
	for(let count = 0; count < 20; count++) {
		let location = new Location();
		let randomName = faker.name.findName();
		await location.create({
			"ownerID":"58ce23f98be6c90a6721d9b5", 
			"name": randomName,
			"description": `Hi my name is ${randomName.split(' ')[0]}! I have a bit of space for people who need to temporarily store their bags while they go around Toronto. Feel free to send me a message!`,
			"avatarURL": faker.image.avatar(),
			"address":randomAddress(),
			"rating":randomRating(),
			"price": randomPrice(),
			"capacity":randomCapacity(),
			"availability":[randomAvailability()],
			"bookings":{}
		});
	}
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
/* request.get({
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
	}); */