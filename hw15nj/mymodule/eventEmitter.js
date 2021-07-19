const EE = function() {
    const list = {};
    this.on = (eventName, cb) => {
      if(!list[eventName]) {
        list[eventName] = [];
      }
  
      list[eventName].push(cb);
    }
  
    this.emit = (eventName, data) => {
      if(!list[eventName]) {
        return;
      }
  
      list[eventName].forEach(cb => {
        cb(data);
      });
    }
  }
  
module.exports =
{
    EE
};
  