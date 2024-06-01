const express = require('express')
const router = express.Router()
module.exports = router

const products = [
  {id: 1, title: 'product', description: 'testing prod', price: 100}
]

//create
router.post('/product',(request,response) => {
    const body = request.body
    const id = body.id
    const title = body.title
    const description = body.description
    const price = body.price

    products.push({
        id: id,
        title: title,
        description: description,
        price: price
    })
    response.send(products)
})
//read
router.get('/product',(request,response) => {
    //const strprod = JSON.stringify(products)
    //response.setHeader('Content-Type', 'application/json')
    //response.end(strprod)
    response.send(products)
})

//update //'/product/:id' - request.param.id
router.put('/product',(request,response) => {
    const body = request.body
    const id = body.productId
    const price = body.price
    for (let index = 0;index <products.length;index++)
        {
        const product = products[index];
    if(product['id']==id)
        {
            product['price'] = price
        }
    }
    //const strprod = JSON.stringify(products)
    //response.setHeader('Content-Type', 'application/json')
    //response.end(strprod)
    response.send('Updated product')
})


//delete

router.delete('/product/:id',(request,response) => {
    const id = request.params.id
    for (let index = 0;index <products.length;index++)
        {
        const product = products[index];
    if(product['id']==id)
        {
            products.splice(index,1)
            break
        }
    }
    //const strprod = JSON.stringify(products)
    //response.setHeader('Content-Type', 'application/json')
    //response.end(strprod)
    response.send('Deleted product')
})