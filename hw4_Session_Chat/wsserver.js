const io = require('socket.io').listen(8888);
const net = require('os');
const session = require("express-session");
io.sockets.on ("connection",
(socket)=>{console.log("new connection");
socket.on ("message",(msg)=>{
    console.log(msg);
  });
    //send messages for all
socket.broadcast.emit("message",msg);
socket.on('message', function(data){
  let name = data.name
  let message = data.message
  });
//connect midelware
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(session({ secret: "cats" })));
io.on("connection", (socket) => {
   const session = socket.request.session.name; // here you get access to the session :)
});
});
