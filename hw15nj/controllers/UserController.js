const model =require("../models/UserModel");
const EE =require("../mymodule/eventEmitter");
module.exports =
{
    set:(req,res)=>{
        res.send(model.users);
    },
};