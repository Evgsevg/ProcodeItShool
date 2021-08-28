const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  
  date_create: {
    type : Date, 
    default: Date.now 
  },
  completed: {
    type: Boolean,
    default: false
  },
  my_id: {
    type:mongoose.Schema.Types.Mixed,
    required: true,
    unique: true // `my_id` must be unique
  }
});


module.exports = model('Article', schema)
