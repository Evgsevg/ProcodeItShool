const currtime=()=>
{
    const d = new Date();

    // Set the value of the "date" field
    document.getElementById("date").value = d.toDateString();

    // Set the value of the "time" field
    let years = d.getFullYear
    let month = d.getMonth()
    let day = d.getDay;
    document.getElementsByName("date_create").value = years + "-" + month + "-" + day;
}
const my_id=()=>
{
    const id = "id" + Math.random().toString(16).slice(2)
    document.getElementsByName("my_id").value = id;
}
const init =()=>
{
    currtime;
    my_id;


}
init();