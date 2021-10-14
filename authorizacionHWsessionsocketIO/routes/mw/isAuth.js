const mw = (req,res,next)=>
{
    const {uid} = req.session;
    if(!uid)
    {
        res.json({status:'unathorized'});
        return;
    }
    next();
}
module.exports =mw;