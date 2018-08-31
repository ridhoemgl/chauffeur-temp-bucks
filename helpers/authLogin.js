function isLogin(req,res,next){
    res.send(req.session.user)
    if(req.session.user===null||req.session.user===null){
        res.redirect('/customer/login');
    }
    else{
        if(req.session.user.role==='Customer'){
            next();
        } else{
            res.redirect('/customer/login');
        }
    }
}
module.exports = isLogin;   