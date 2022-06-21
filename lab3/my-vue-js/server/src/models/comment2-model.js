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
const CommentModel_2 = mongoose.model('post2', CommentSchema)
module.exports = CommentModel_2
