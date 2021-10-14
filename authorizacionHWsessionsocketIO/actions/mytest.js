const userModel = require('../models/user');
//const cru = require('./cru');
/** 
const os = require('os');
const cru=()=> {
    let ifaces = os.networkInterfaces();
    console.log('\x1b[36m','123');
}

cru();
*/



//console.log('\x1b[36m', 'sometext123' ,'\x1b[0m');
const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};
//console.log(colours.bg.blue, colours.fg.white, "I am a white message with a blue background", colours.reset) ; 

// Make sure that you don't forget "colours.reset" at the so that you can reset the console back to it's original colours.
console.log(colours.bg.cyan, colours.fg.white, '=====MytestStart====', colours.reset) ; 
console.log("\x1b[32m",'=====MytestConnected====');
const os = require('os');
const cru=()=> {
    let ifaces = os.networkInterfaces();
    console.log("\x1b[35m",'mac:',ifaces.Ethernet[0].mac,'ip:',ifaces.Ethernet[0].address);
}
cru();



//console.log("\x1b[32m",'=====MytestEnd====');
//test model findAll
const  testDB=async()=>
{
 
const docs =  await userModel.find({});

const test1Db=(doc)=>{
    console.log('\x1b[36m',doc,'\x1b[0m')
}
docs.map(test1Db);
console.log(colours.bg.blue, colours.fg.white, '=====MytestEnd====', colours.reset) ; 

}
testDB()

//console.log("\x1b[32m",'=====MytestEnd====');





