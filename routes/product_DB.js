const express = require('express')
const mysql = require('mysql')
const router = express.Router()
module.exports = router

router.get('/product',(request,response) => {
    //DB connect
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pragati',
        database: 'mystore',
        port: 3306
    })
    //statement
    const statement = 'select * from product'
    //execution
    connection.query(statement,(error,data) => {
        if (error){
            console.error(`error: ${error}`)
        } else{
            console.log(data)
        }
    connection.end()
    response.send(data)
    })

})