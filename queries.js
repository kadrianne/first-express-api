const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    allStudents(){
        return database('students')
    }

    // addStudent(student){
    //     return database('students').insert(student)
    // }
}