const express = require("express");
const multer = require('multer');
const fs = require('fs');
const gm = require('gm');
const app = express();

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb) =>
    {
        cb(null,'./myupload')
    },
    filename: (req, file, cb) =>
    {
        cb(null, Date.now()+ "---" +file.originalname);
    },
});

const upload = multer({storage:fileStorageEngine});
app.get('/', function (req, res) {
    res.render('index', {});
  });
  app.get('/recolor', function (req, res) {
    res.render('index', {
        gm('./myupload/image.png')
          .recolor("1 0.15 0.15 , 0.98 1 0.98  , 0.02 0.02 1")
          .write('./public/output/image.png', function (err) {
            if (!err) console.log('done');
            if (err) console.log(err);
        });

    });
  });
app.use( express.static( path.join( application_root, 'site') ) );
app.use('/static', express.static(__dirname + '/public'));
app.post("/single", upload.single("image"),(req,res)=>
{
    console.log(req.file);
    res.send("Single File Upload success");
}

);
app.post("/multiple", upload.array("images",3),
(req,res)=>
{
    console.log(req.files);
    res.send("Multiple File Upload Success");
});

app.listen(5000);