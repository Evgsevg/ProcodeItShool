// Запускаем web-сервер
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });
  
  var io = socketio.listen(server);
  
  // Настраиваем socket.io
  io.configure(function() {
  
    // Аутентификация пользователей
    io.set('authorization', function (data, accept) {
      // Проверяем переданы ли cookie
      if (!data.headers.cookie) 
        return accept('No cookie transmitted.', false);
  
      // Парсим cookie
      data.cookie = cookie.parse(data.headers.cookie);
  
      // Получаем идентификатор сессии
      var sid = data.cookie['sid'];
  
      if (!sid) {
        accept(null, false);
      }
  
      sid = sid.substr(2).split('.');
      sid = sid[0];
      data.sessionID = sid;
  
      // Добавляем метод для чтения сессии
      // в handshakeData
      data.getSession = function(cb) {
        // Запрашиваем сессию из хранилища
        session_storage.get(sid, function(err, session) {
          if (err || !session) {
            console.log(err);
            accept(err, false);
            return;
          }
          cb(err, session);
        });
      }
      accept(null, true);
    });
  });