

module.exports = {
    ensureAuth: function(req, res, next){
        passport.authenticate('google', { scope: ['profile'] })
        if (req.isAuthenticated()){
            
            return next()
        }else{
            res.redirect('/')
        }
    },
    ensureGuest: function(req, res, next){
        if(req.isAuthenticated()){
            res.redirect('/todoTasks')
        }else{
            return next()
        }
    }, 
    
}


