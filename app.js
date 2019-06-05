var http = require('http');
var express = require('express');
var app = express();
var fs = require("fs");

var user = {
    "user4" : {
       "name" : "Jack",
       "password" : "password4",
       "profession" : "member",
       "id": 4
    }
 }
var updateuser = {
    "user4" : {
       "name" : "Jolly",
       "password" : "password4",
       "profession" : "member",
       "id": 2
    }
 }
 
 // api to add a user
 app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data.user4 = user.user4;
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 // api to show users list
app.get('/listUsers', function (req, res) {
    console.log("hey")
   fs.readFile( "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

//show single record by user id
app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile("users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
// to delete a user
 app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
// to update a user
 app.put('/updateUser/:userId', function (req, res) {
    // First read existing users.
    fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data.put(userId,updateuser).then((result) => {
            console.log( data );
            res.end( JSON.stringify(data));
       });    
    });
 })s
 
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 });