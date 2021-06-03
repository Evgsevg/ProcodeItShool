console.log('HW for lection6!');
const http = require('http');
const mydownload=  require('./mydownload.js');
const downloadfile=mydownload.downloadFile;
const readfile =mydownload.myreadworker;
const port =8082;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('server worked!');
    res.send1(downloadfile);
    res.end(
readfile,
'finish server!'
    );
}).listen(port);
