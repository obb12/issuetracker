/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Issues = require('./../models/Issues');

const CONNECTION_STRING = process.env.DB;

mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to mongodb")
});
module.exports = function (app) {

  app.route('/api/issues/:project')

    .get(function (req, res){
      var project = req.params.project;
      Issues.find({}, function (err, issues) {
        res.send(issues);
    });
    })

    .post(function (req, res){
      const ar1 = ['issue_title', 'issue_text','created_by'];
      if(ar1.every(r => req.body.includes(r))){
        console.log('Found all of');
        Issues.create({issue_title:req.body.issue_title,issue_text:req.body.issue_text,created_by:req.body.created_by}, function (err, small) {
    if (err) return handleError(err);
    // saved!
    res.json(small)
  });
      }
      else {
        res.end()
      }

    })

    .put(function (req, res){
      var project = req.params.project;

    })

    .delete(function (req, res){
      var project = req.params.project;

    });

};
