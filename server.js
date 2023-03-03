const http=require('http')
const server=http.createServer((req,res)=>{
	console.log(req.url,"Twinkal Paralkar")
	res.setHeader('Content-Type','text/html')
	res.write('<html>')
	res.write('<head><title>My First Page</title></head>')
	res.write('<body>')
	if(req.url=='/home'){
		res.write('<h1>Welcome home</h1>')}
	else if(req.url=='/about'){
		res.write('<h1>Welcome to about Us Page</h1>')}
	else if(req.url=='/node'){
		res.write('<h1>Welcome to my Node JS Project</h1>')}
	res.write('</body>')
	res.write('</html>')
	res.end()
})

server.listen(4000)