const showweather=require('./myweather');
const savemyfile=require('./mysavetofile');
const mysuperTimeout =()=>{
const show_myweather=showweather.funcshow_weather;
const jobs = []
const interval = setInterval(() => {
	if(jobs.length == 10) {
		clearInterval(interval);
	}
	let job = Promise.resolve(Console.log(showweather));
	jobs.push(job);
	savemyfile.funcdatawrite;
}, 5000);

setTimeout(() => {
	Promise.all(jobs).then(data => console.log(data))
}, 10000*5);
}
mysuperTimeout()