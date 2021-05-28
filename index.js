const fs= require('fs-extra');
const run= async()=>
{
    await fs.copy( './123.txt,','./124.txt');
    console.log('success!');
};
run();
//дз выводить температуру и облачность с сайта https://openweathermap.org/
