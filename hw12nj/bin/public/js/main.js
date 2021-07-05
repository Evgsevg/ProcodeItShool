const formE1 = document.forms.testfile;
formE1.addEventListener('submit',async(ev)=>
{
    ev.preventDefault();
    //add all forms
    const formData= new FormData(ev.target);
/*
//расшифровка записи, которая выше, тут более подробнее
    const {data} ={data: 123, a:4,b:78}

    const {data} ={data: 123,a,b}=resp
  
    const {data} = resp.data;
    const a= resp.a;
    const b= resp.b;
    */
    const {data} = await axios.post('/test',formData);

    console.log('rsponse:', data);

}
)