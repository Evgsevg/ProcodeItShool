const startbrowser=()=>
{
console.log('Browser aplication strted!');
const url = 'http://localhost:3001';
const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);
console.log('Browser satrted...');
}

module.exports={
    startbrowser
}