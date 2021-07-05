const prompt = require('prompt');

console.log("Module compare connected!");


function calculate_age(dob) {
   let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


  function showMyAge()
{
prompt.get(['datebirthd'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Введите вашу дату рождения в формате 1921:');
    console.log('  YouInputDateBirthd: ' + result.datebirthd);
    console.log('Вам исполнилось'+' '+calculate_age(new Date(result.datebirthd, 1, 1))+' '+'лет');
    const calculateYear=(calculate_age(new Date(result.datebirthd, 1, 1)));
    
});
   
}
function onErr(err) {
    console.log(err);
    return 1;
}


showMyAge();
module.exports=
{
	resyear:showMyAge(),
}

console.log("Module compare connected!");

