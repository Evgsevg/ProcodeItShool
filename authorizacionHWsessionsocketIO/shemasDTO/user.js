const ajvInstance = require('./ajv_instance');
const schema =
{
    type:'object',
    properties:{
        name:{type:'string'},
        password:{type:'string'},
    },


required:['name','password'],
additionalProperties:false,};
const validate = ajvInstance.compile(schema);
module.exports =validate;