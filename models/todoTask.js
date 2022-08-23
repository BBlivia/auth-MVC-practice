const mongoose = require('mongoose')
//creating a new schema / blueprint template
const todoTaskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true //every task must have a title

    },
    constent:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now 
    }

})
// exports module from mongoose module, i named the modelname(todoTask), from the scheme and told it which collection on db to connect to 
module.exports = mongoose.model('toDoTask', todoTaskSchema, 'tasks')
