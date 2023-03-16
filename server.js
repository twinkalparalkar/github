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
const admin=require('./routes/admin')
const shop=require('./routes/shop')


app.use(bo.urlencoded({extended:false}))
app.use('/admin',admin)
app.use(shop)


app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>")
})
// const server=http.createServer(app)
//http://localhost:4000/node
app.listen(4000)
