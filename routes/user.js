var express = require('express');
var userrouter = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET ALL UserS */
userrouter.get('/', function(req, res, next) {
    User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE User BY ID */
userrouter.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
userrouter.post('/', function(req, res, next) {
    User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE user */
userrouter.put('/:id', function(req, res, next) 
{
  console.log('request body -> ' + req.body.author);

  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    console.log('PUT Status -> ' + post);
    res.json(post);
  });
});

/* DELETE user */
userrouter.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = userrouter;