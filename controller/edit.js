//! call in model 
const { model } = require('mongoose')
const todoTask = require('../models/todoTask')

module.exports = {
    

    getEdit: (req, res) => {
        const id = req.params.id;
        todoTask.find({}, (err, task) => {
            res.render("edit.ejs", { todoTasks: task, idTask: id });
        });
    },
        deleteTask: (req, res) => {
            const id = req.params.id;
            todoTask.findByIdAndRemove(id, err => {
                if (err) return res.send(500, err);
                res.redirect("/");
            });
        },
        updateTask: (req, res) => {
            const id = req.params.id;
            todoTask.findByIdAndUpdate(
                id,
                {
                    title: req.body.title,
                    content: req.body.content
                },
                err => {
                    if (err) return res.status(500).send(err);
                    res.redirect("/");
                });
        }
}


