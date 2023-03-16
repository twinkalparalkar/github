// const http=require('http')
// const bo=require('body-parser')
const express=require('express')
const router=express.Router()
router.get('/add-product',(req,res,next)=>{
    console.log("In the middle ware")
    // res.send("<h1>Add Product</h1>")
    res.send("<form action='/product' method='POST' ><input type='text' name='tit'><button type='submit'>ADD Product</button></form>")
})

router.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router
// const server=http.createServer(app)
//http://localhost:4000/node
// server.listen(4000)