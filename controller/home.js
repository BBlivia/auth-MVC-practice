//! get lgoin


module.exports = {
    getLogin: (req, res)=>{
        res.render('login.ejs')
    },
    
    getIndex: async (req,res) =>{
        try{
           const task = await todoTask.find()
                res.render('index.ejs', { todoTasks: task
            })
            
            }catch(err){
                if (err )console.log("error")
    }
    },

    createTask: async (req, res) => {
        const todoTask = new TodoTask(
            {
                title: req.body.title,
                content: req.body.content
            });
        try {
            await todoTask.save();
            console.log(todoTask)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
}
// call in the differnt pages of site 

/* getIndex : async (req, res) => {
        try {
            const tasks = await
           // TodoTask.find()
            res.render("index.ejs", { todoTasks: tasks });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    }, */



    