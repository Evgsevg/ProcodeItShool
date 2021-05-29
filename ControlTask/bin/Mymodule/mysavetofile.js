const fsPromises = require('fs').promises;
const writeWeather =require('./myweather');
const saveWeather = writeWeather.funcshow_weather;
const datewrite = ()=>{await fsPromises.writeFile('./test.txt',saveWeather)}
module.exports ={
    funcdatawrite:datewrite()
   
   
  }
/*const fs = require('fs');
const util =require('util');
//writeFile=util.promisify(fs.writeFile);
fn=async()=>{await fs.writeFile('test1.txt','testrecord');}
fn()

const content = 'Test content!'
fs.writeFile('test.txt',content,err=>
{
    if(err)
    {
        console.log(err)
        return
    }
    console.log('success!');
}
);
const myappendtofile=()=>{
    fs.appendFile('./test.txt',content,err=>
        {
            if(err)
            {
                console.error(err)
                return
            }
            console.log('success!');
        }
    )
}

*/