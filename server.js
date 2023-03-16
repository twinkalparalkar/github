// const http=require('http')
// const fs=require('fs')
// const server=http.createServer((req,res)=>{
// 	res.setHeader('Content-Type','text/html')
// 	res.write('<html>')
// 	res.write('<head><title>My First Page</title></head>')
// 	res.write('<body>')
//     res.write('<h1>Welcome home</h1>')
//     res.write('<form action="/" method="POST"><input type="text"name="message"><button type="submit">Send</button></form>')
//     fs.writeFileSync("m.txt",message)
//     res.statusCode=302
//     res.setHeader('Location','/')
//         res.setHeader('Location','/')
// 	res.write('</html>')
// 	res.end()
// })
// //http://localhost:4000/node
// server.listen(4000)

const http=require('http')
const bo=require('body-parser')
const express=require('express')
const app=express()
app.use(bo.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    console.log("In the middle ware")
    // res.send("<h1>Add Product</h1>")
    res.send("<form action='/product' method='POST' ><input type='text' name='tit'><button type='submit'>ADD Product</button></form>")
})

app.use('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    console.log("In the middle ware")
    res.send("<h1>hello world twinkal</h1>")
})
const server=http.createServer(app)
//http://localhost:4000/node
server.listen(4000)
