var express = require('express');
var router = express.Router();
const controller =require("../controllers/UserController");
router.get("/", controller.set);

//router.get('/', function(req, res) {
  //res.sendFile(__dirname + "/views/shipping.htm");
///res.send('fdsdgdsds');
//});

module.exports = router;
