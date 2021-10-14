const mongoose = require('mongoose');
const path =require('path');

const {Schema} = mongoose;

const generalSchema = new Schema({
name:{
    type: Schema.Types.String,
    maxlength:100,
    index: true,
    required: true
},
userID:{
    type: Schema.Types.String,
    maxlength:100,
    index: true,
    required: true,
    unique: true
}
});
const modelName=path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);