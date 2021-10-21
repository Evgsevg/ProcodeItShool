const sio = require('socket.io');
const authCtrl= require('../../../controllers/auth');
const run = (server) => {
   const io = sio(server);
   
   io.on('connection', (socket) => {
      console.log(`Connection ID: ${socket.id}`);
      /*
      console.log(socket.handshake.auth); // prints { token: "JWTtoken" }
      socket.on("connect_error", (err) => {  if (err.message === "invalid credentials")
      {socket.auth.token = "JWTtoken";
          socket.connect();  }});*/
  //example
socket.on('/pow',(data,cb)=>
{
const result = Math.pow(data.val, data.lvl);
console.log('result pow:', result);
(async () => {
   
    await result
    console.log(result);
return result
})()
   
cb({result});
});
//jwt!!!!!!!!!!!!!!
//test JWT
//send tocken
const token ='uqwyteuiwqyruiqyer73tiurewtiuifei';
socket.on('/jwt',(tocken)=>{
   const result=tocken;
})
socket.on('/jwt',(data,cb)=>
{
const result = Math.pow(data.val, data.lvl);
console.log('result jwt:', result);
(async () => {
   
    await result
    console.log(result);
return result
})()
   
cb({result});
});

// server
io.use((socket, next) => {
   const token = socket.handshake.auth.token;
   if (isValidJwt(token)){
       next();
   }else{
       next(new Error("Socket authentication error"));
   }
});

async function isValidJwt(token){
   jwt.verify(token, secrets.jwt, function(err, decoded) {
       if (err){
           console.log(err);
           return false;
       }else{
           //console.log(decoded);
           return true;
       }
   });
}










//test
socket.on('/test', (data) => {
   const makeUser= authCtrl.createUser(data.name,data.pwd);
   
});
socket.on('/auth', (data, cb) => {
 //console.log('DataTest:',data);
const login=data.name;
const pwd=data.pwd;
const result = authCtrl.loginUser(login,pwd);
 /*const result = async(req, res)=> {await authCtrl.loginUser(login,pwd)
   if(['unkown user','invalid password'].includes(result.status))
   {
       res.json({status:'fail auth'});
       return;
   }
   console.log(result);
   const {profile}= result.payload;
   res.json({status:'ok',payload:{profile:{_id:profile.id,name:profile.name}}});

};
*/
const mytest=
(async (cb) => {
   const userLogin=await result
   //return await result;
   
   //cb({userLogin});
   
   return userLogin;
  // console.log('login:',userLogin.status)
 })()

mytest;

// console.log('result:',mytest);

   //return result;
    

  
});
//reverse
let result=123;
socket.on('setuser', (result=123, cb) => { cb(result); });



      socket.on('disconnect', () => {
         console.log(`Disconnection ID: ${socket.id}`);
      });
   });
};

module.exports = run;