const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  name: {
    type: String
  },
  last_name:{
    type: String
  },
  body: {
    type: String
  }
})
const CommentModel_3 = mongoose.model('post3', CommentSchema)
module.exports = CommentModel_3
