const WebSoket = require('ws');
//start servers
const run = (httpServer)=>
    {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!ws server  
const wsServer = new wsServer.Server({server:httpServer})
wsServer.on('connection',(soket)=>
{
    console.log((new Date())+'New WS connection')
    let sum=0;
    soket.on('message',(date)=>
    {
        sum+=Number(data);
        console.log(`Frontend send ${data}`);
        console.log(`Sum ${sum}`);
        if(sum>10)
        {
                soket.send(sum);
        }
    }
    );
}
);

}



module.exports =run;