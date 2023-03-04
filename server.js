const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
	res.setHeader('Content-Type','text/html')
	res.write('<html>')
	res.write('<head><title>My First Page</title></head>')
	res.write('<body>')
    
    	if(req.url=='/'){
		res.write('<h1>Welcome home</h1>')
        res.write('<form action="/m" method="POST"><input type="text"name="message"><button type="submit">Send</button></form>')
        
        }
        if(req.url=='/m'&& req.method=="POST"){
            const body=[]
            req.on('data',(chunk)=>{
                console.log(chunk)
                body.push(chunk)
            })
            return req.on('end',()=>{
                const parsebody=Buffer.concat(body).toString()
                const message=parsebody.split("=")[1]
                fs.writeFileSync("m.txt",message)
                res.statusCode=302
                res.setHeader('Location','/')
            })
            
            
        }
        res.setHeader('Content-Type','text/html')
	res.write('</html>')
	res.end()
})
//http://localhost:4000/node
server.listen(4000)
