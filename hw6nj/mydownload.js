const util = require("util");
const stream = require("stream");
const pipeline = util.promisify(stream.pipeline);
const patch='/upload';
const downloadFile = async (...args) => {
    try {
        await pipeline( axios.get('https://xxx/my.pdf', {responseType: 'blob'}), 
                            fs.createWriteStream(patch));
        console.log("donwload pdf pipeline successfull");   
    } catch (error) {
        console.error("donwload pdf pipeline failed", error);
    }
}

exports.downloadFile = downloadFile;


//read file from saving directory
const myreadworker=(...args)=>{
    fs.readFile(patch, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
}
exports.myreadworker = myreadworker;