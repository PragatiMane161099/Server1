const express = require('express')
const bodyparser = require('body-parser')
//import routes
const routerproducts = require('./routes/product')

const app = express()
app.use(bodyparser.json())
//add routes in app
app.use(routerproducts)


app.listen(4000,'0.0.0.0',() => {
    console.log('Listeining on 4000')
})