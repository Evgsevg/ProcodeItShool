const express = require('express');
const app = express();
path= require('path');
const app=express(),
por= 8084
app.set('routes',path.join(__dirname,'routes'))
app.set('public',path.join(__dirname,'public'))

app.set('views',path.join(__dirname,'views'))
app.set('view','ejs')




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', (req, res) => {
    res.send({ application: 'sample-app', version: '1.0' });
});
app.post('/api/v1/getback', (req, res) => {
    res.send({ ...req.body });
});
app.listen(port, () => {console.log(`Listening on: `+port) }); 