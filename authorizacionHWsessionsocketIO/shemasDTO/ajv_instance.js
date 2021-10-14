const Ajv= require('ajv');
const addFormats = require('ajv-formats');

const ajvInstatce = new Ajv({allErrors:true,$data: true,});
addFormats(ajvInstatce);

module.exports=ajvInstatce;
