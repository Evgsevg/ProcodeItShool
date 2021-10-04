$(document).ready(function() {
  console.log(123);
  let socket = io.connect('/');

  socket.on('connect', function() {
    console.log('connected');
  });

  socket.on('message', function(data) {
    let chat_message = data['user'] + ': ' + data['message'];
    $('#log').val($('#log').val() + '\n' + chat_message);
    $('#log').scrollTop(100000);
  });

  $('#send').click(function() {
    let msg = $('#message').val();
    socket.emit('message', {'message': msg});
    $('#message').val('');
  });
});