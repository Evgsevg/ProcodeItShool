const moment = require('moment');
moment.locale('ru');
const getDateBirthd=()=>
{
return {
    year: 1996,
    day:13,
    hours:11
    }
}
const MyDateBirhd =
{
    y:1996,
    d:13,
    h:11
}
const showdate=moment(MyDateBirhd).format();
console.log(showdate);
const many_years_ago= moment(showdate,"YYYYMMDD").fromNow();

const calcdate=moment(showdate).format("YYYYMMDD");

//const many_days_ago= moment().startOf('day').fromNow();
//const many_hours_ago= moment().startOf('hour').fromNow();
const many_days_ago=moment().diff(moment(calcdate, 'YYYYMMDD'), 'days');
const many_hours_ago=moment().diff(moment(calcdate, 'YYYYMMDD'), 'hours');
const day_of_week =moment().subtract(10,'days').calendar();
console.log('Вы родились'+' '+many_years_ago);
console.log('С той поры прошло'+'  '+many_days_ago +' дней...');
console.log('С той поры прошло'+'  '+many_hours_ago+' часов....');
console.log('Это был день недели'+'  '+moment(calcdate).format('dddd'));


