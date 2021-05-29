const axios = require('axios');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=50a7aa80fa492fa92e874d23ad061374';

const run = async()=>{
await axios.get(url).then((response=>response.json).then(data => {
      let tempValue = await data['main']['temp'];
      let nameValue = await data['name'];
      let descValue = await data['weather'][0]['description'];
    console.log(tempValue);
    console.log(nameValue);
    console.log(descValue);
      
    
    }).catch(err => alert("Wrong city name!"))
   

}
run();
module.exports ={
  funcshow_weather:run()
 
 
}

console.log(' Module myweather connected!');