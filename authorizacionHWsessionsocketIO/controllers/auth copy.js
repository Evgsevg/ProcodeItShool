//const{DockOutLined}=require('@material-ui/icons');
const userModel= require('../models/user');
const os = require('os');

let ifaces = os.networkInterfaces();
console.log(ifaces.Ethernet[0]);
const mac = ifaces.Ethernet[0].mac;
const ip = ifaces.Ethernet[0].address;
console.log(mac,ip);
const createUser = async(pwd,name,login)=>{
    
      
    //console.log(mac,ip);
    console.log(12131);
    console.log(name,pwd);
    const doc= await userModel.create(
        {
            name,
            mac,
            ip,
            auth:
                {
                  name,
                  auth:{
                      login,
                      pwd,
                      //solt,
                      //token,
                  }
                }
        })
    return doc;
}

const login = async(login,pwd)=>
{
    const doc= await userModel.findOne({'auth.login':login});
    if(!doc){
        return{status:'unkown user'};
    }
    const check = doc.checkPwd(pwd);
    if(!check){
        return{status:'invalid password'};
    };


const profile =
{
    id:doc.id,
    name:doc.name,

}
return{ststus:'ok',payload:{profile}};
}

const getProfile = async(id)=>
{
    const doc = await userModel.findOne({_id:id},['name']);
    if(!doc)
    {
        return{status:'unkown user'};
    }
    return{status:'ok',payload:{profile:doc}};
}

module.exports={createUser,getProfile,login}