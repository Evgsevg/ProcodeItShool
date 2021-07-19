var express = require('express');
var router = express.Router();
const controller =require("../controllers/UserController");
/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get("/", controller.set);
module.exports = router;
