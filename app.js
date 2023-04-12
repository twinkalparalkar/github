const ex=require('express')
const bodyparse=require('body-parser')
const cors=require('cors')
const user=require('./model/user')
const app=ex()
app.use(cors())
app.use(bodyparse.json({extended:false}))

app.post('/user/signup',(req,res,next)=>{
    const a=req.body.name
    const b=req.body.email
    const c=req.body.password
    console.log(req.body)
    const data=user.create({name:a,email:b,password:c})
    res.status(201).json({n:data})
    console.log(res.data,res.n)
    
})

app.listen(3000)