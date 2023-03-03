const http=require('http')
const server=http.createServer((req,res)=>{
	console.log(req,"Twinkal Paralkar")
})

server.listen(4000)