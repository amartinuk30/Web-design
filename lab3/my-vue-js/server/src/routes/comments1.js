const express = require('express')
const router = express.Router()
const Comm = require("../models/comment1-model")


router.post('/post1', (req, res) => {
    var db = req.db;
    var name = req.body.name;
    var last_name = req.body.last_name;
    var body = req.body.body;
    var new_comment = new Comm({
      name: name,
      last_name: last_name,
      body: body
    })
  
    new_comment.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Comment saved successfully!'
      })
    })
  })

  router.get('/post1', (req, res) => {
    Comm.find({}, 'name last_name body', function (error, post1) {
      if (error) { console.error(error); }
      res.send({
        post1: post1
      })
    }).sort({_id:-1})
  })

  router.delete('/post1/:id', (req, res) => {
    var db = req.db;
    Comm.remove({
      _id: req.params.id
    }, function(error, post1){
      if (error)
        res.send(error)
      res.send({
        success: true
      })
    })
  })

  module.exports = router;