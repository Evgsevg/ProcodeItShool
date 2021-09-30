(function(){
    let element = function(id){
      return document.getElementById(id)
    }
  
    let status = element('status')
    let messages = element('messages')
    let textarea = element('textarea')
    let username = element('username')
    let clearBtn = element('clear')
  
    let statusDefault = status.textContent
  
    let setStatus = function(s){
      status.textContent = s
  
      if(s !== statusDefault){
        let delay = setTimeout(function(){
          setStatus(statusDefault)
        }, 4000)
      }
    }
  
    let socket = io.connect('http://127.0.0.1:4000')
  
    if(socket !== undefined){
      console.log('Connected to socket...')
  
      socket.on('output', function(data){
        if(data.length){
          for(let i=0; i < data.length; i++){
            let message = document.createElement('div')
            message.setAttribute('class', 'chat-message')
            message.textContent = data[i].name+": "+data
            [i].message
            messages.appendChild(message)
            messages.insertBefore(message, messages.firstChild)
          }
        }
      })
  
      socket.on('status', function(data){
        setStatus((typeof data === 'object')? data.message : data)
        if(data.clear){
          textarea.value = ''
        }
      })
  
      textarea.addEventListener('keydown', function(event){
        if(event.which === 13 && event.shiftKey == false){
          socket.emit('input',{
            name:username.value,
            message:textarea.value
          })
  
          event.preventDefault()
        }
      })
  
      clearBtn.addEventListener('click', function(){
        socket.emit('clear')
      })
  
      socket.on('cleared', function(){
        messages.textContent = ''
      })
    }
  
  })()