const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const todoTask = require('./models/todoTask')
const  connectDB = require('./config/db')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todoTasks')
const auth = require('./routes/auth')



require("dotenv").config() // all the secret things are in this
 //require passport for auth

 //! We are setting up database connection 
dotenv.config({path: './config/config.env' })
connectDB()


//LOGGING
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))  //* tells us what pages are being used 
}

//set global variable for us to access user from within our templace
app.use(function(req, res, next){
    res.locals.user = req.user || null
    next()
})

//Middle Ware- helps to detail with the traffic as things come and go from server
// setting ejs as view engine and creating public folder for css/js
app.set('view engine', 'ejs')

app.use(session ({
    secret: 'keyboard cat',
    resave: false,   //dont wanna save a session
    saveUninitialized: false,  //dont create session if nothing in store
    store:MongoStore.create({mongoUrl: process.env.DB_Connection})                            //stores session in database so that when we load our page it doesnt kick the user out of the app
    
})
)

//intializing passport
app.use(passport.initialize())
app.use(passport.session())


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

    // makes sure the right type of data is being passed 





app.use('/', mainRoutes)

app.use('/todoTasks', todoRoutes)


const PORT = process.env.PORT || 8003
app.listen(PORT, console.log(`server is running mode on PORT ${PORT}`))