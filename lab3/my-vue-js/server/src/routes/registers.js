const express = require('express')
const router = express.Router()
const Reg = require("../models/registers-model")


router.post('/registers', (req, res) => {
    var db = req.db;
    var name = req.body.name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var data_b = req.body.data_b;
    var gender = req.body.gender;
    var password = req.body.password;
    var my_profile_check = req.body.my_profile_check;
    var new_reg = new Reg({
      name: name,
      last_name: last_name,
      email: email,
      data_b: data_b,
      gender: gender,
      password: password,
      my_profile_check: my_profile_check
    })
  
    new_reg.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Comment saved successfully!'
      })
    })
  })

  router.get('/registers', (req, res) => {
    Reg.find({}, 'name last_name email data_b gender password my_profile_check', function (error, registers) {
      if (error) { console.error(error); }
      res.send({
        registers: registers
      })
    }).sort({_id:-1})
  })


  router.put('/registers/:id', (req, res) => {
    var db = req.db;
    Reg.findById(req.params.id, 'my_profile_check', function (error, reg) {
      if (error) { console.error(error); }
      reg.my_profile_check = !reg.my_profile_check
      reg.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  })


  module.exports = router;