var mongoose = require('mongoose');

var Issues = new mongoose.Schema({
  issue_title:  String,
  issue_text: String,
  created_by: String,
  assigned_to: String,
  status_text: String,
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date, default: Date.now },
  open: Boolean,


});

module.exports =  Issues = mongoose.model('issue', Issues);
