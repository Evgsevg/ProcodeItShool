'use strict';

const net = require('net');

const socket = new net.Socket();
const port =2000;
const host ='127.0.0.1';
socket.on('data', data => {
  console.log('📨:', data);
});

socket.connect({
  port: port,
  host: host,
}, () => {
  socket.write('💋'+'Test my message!');
});

socket.unref();