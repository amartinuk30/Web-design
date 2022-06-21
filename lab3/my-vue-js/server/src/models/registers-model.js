const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegSchema = new Schema({
  name: {
        type: String
      },
      last_name: {
        type: String
      },  
  email: {
    type: String,
    unique: true
  },
      data_b: {
        type: Date
      },
      gender: {
        type: String
      },
    password: {
        type: String
    },
    my_profile_check: {
        type: Boolean
    }
})
const RegModel = mongoose.model('registers', RegSchema)
module.exports = RegModel