console.log("Module one connected!");
/*


let formatter = new Intl.DateTimeFormat("ru");
console.log('%c%s', 'color: red; font: 18px Tahoma;',formatter.format(date)+'!!!!!!!!!!!'); 



var date = new Date();
console.log(date.toISOString());
date.toISOString();
function join(t, a, s) {
	function format(m) {
	   let f = new Intl.DateTimeFormat('ru', m);
	   return f.format(t);
	}
	return a.map(format).join(s);
 }
 
 let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
 let s = join(new Date, a, '-');
 console.log(s);

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1967, 1, 1)));

const getDateBirthd =()=>{};
const showDateBirthd=()=>{};
/*
function later(delay, value) {
    return new Promise(resolve => setTimeout(resolve, delay, value));
}
*/
/*
const jobs = []
const interval = setInterval(() => {
	if(jobs.length == 10) {
		clearInterval(interval);
	}
	let job = Promise.resolve('new job created');
	jobs.push(job);
	console.log('job created')
}, 10000);

setTimeout(() => {
	Promise.all(jobs).then(data => console.log(data))
}, 10000*15);
console.log("Module compare connected!");
//setInterval(2000,console.log("123"));
//later(2000,console.log("123"));

/*
var str = '  ';

if (str != null && typeof str !== "undefined") {
   str = str.trim();
}

if (!str) { 
   console.log("Пусто");
}

var test = "   ";
var test2 = " ыва ыва   ";

console.log(isEmpty(test));
console.log(isEmpty(test2));
 

function isEmpty(str) {
  if (str.trim() == '') 
    return true;
    
  return false;
}
*/