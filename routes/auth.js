const express = require('express')
const passport = require('passport')
const router = express.Router()


//@desc Login/landing page
//@route GET /
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


//@desc Dashboard
//@route GET /dashboard
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
    res.redirect('/todoTasks')
})

//logoutlogin
//logout 
router.get('/logout', (req, res)=>{
    req.logout(function(err){
        if (err) {
            return next(err)  }
            res.redirect('/')
    })
})
module.exports = router