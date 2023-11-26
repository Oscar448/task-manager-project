require('./db/connect')
const express = require('express');
const app = express()
// const port = 3000
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config() //npm install =>how to invoke 

// app.use(express.json())
app.use(express.json());
app.use(express.static('./public'))


app.use('/api/v1/tasks', tasks);

//route


const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('Welcom to our Website');
})

app.get('/hello', (req, res) => {
    res.send('Task Manage App');
})
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is listeaning on port ${port}`)
        });
 
    } catch (error)  {
        console.log( error)
 
    } 
}  
start() 
 
 
 
 
 
//app.get('/api/v1/t asks')             -Gett all task
//app.post('/api/v1/ tasks')            -Create a new task
//app.get('/api/v1/t asks/:id')             -Gett single task
//app.patch('/api/v1 /tasks/:id')             -Update task
//app.delete('/api/v 1/tasks/:id')             -delete task


// router.route('/').get(getAllTasks).post(createTask)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// module.exports = router



