const express = require('express')
const app = express() // creates new instance of express
const port = process.env.PORT || 3000
const queries = require('./queries')

app.listen(port, () => console.log(`Listening on Port ${port}`))

app.get('/students', (request,response) => {
    queries.allStudents()
        .then(students => response.json(students))
})

// app.post('/students', (request,response) => {
    
//     queries.addStudent()
// })