const express = require('express');
const upload = require('multer')();
const router = express.Router();
const authCtrl = require('../controllers/auth');
const validateDTO= require('../middleware/validate_dto');
const userSchema = require('../shemasDTO/user');


//validateDTO
//router.post('/auth',validateDTO(userSchema));
/* GET home page. */
router.get('/auth', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.render('auth', {title: 'Auth',someInfo: "Данные для передачи"});
});
router.get('/login',upload.none(), async(req, res)=> {
    //res.render('index', { title: 'Express' });
    //!validation
    const {login,pwd}=req.body;
    //return{status:'unkown user'};
    //return{status:'invalid password'};
    //return{status:'ok',payload:{user:doc}};
    const result= await authCtrl.login(login,pwd);
    if(['unkown user','invalid password'].includes(result.status))
    {
        res.json({status:'fail auth'});
        return;
    }
    console.log(result);
    const {profile}= result.payload;
    res.json({status:'ok',payload:{profile:{_id:profile.id,name:profile.name}}});
    //res.render('index', {title: 'Auth',someInfo: "Данные для передачи"});
});
router.get('/logout', (req, res)=> {
    //const {uid}=req.session;
    delete(req.session.uid);
    res.json({status:'ok'});

});
router.get('/profile', async(req, res)=> {
    if(!uid)
    {
        res.json({status:'unathorized'});
        return;

    }
    const result= await authCtrl.getProfile(uid);
    if(result.status !=='ok')
    {
        throw new Error(result.status);
    }
    const {profile}=result.payload;
    res.json({status:'ok',payload:{profile}});
});

module.exports = router;

