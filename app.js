const ex=require('express')
const bodyparse=require('body-parser')
const path=require('path')
const cor=require('cors')
const rootdr=require('./util/path')
// const User=require('./models/product')
const userRoute=require('./routes/seller')

const app=ex()
app.use(cor())
app.use(bodyparse.json({extended:false}))
// app.set('view engine', 'ejs');
// app.set('views', 'views');
app.use('/',userRoute)
// app.use(ex.static(path.join(rootdr,'public')))
// sequelize.sync().then(res=>app.listen(4000)).catch((err)=>console.log(err))
app.listen(3000)
// http://localhost:4000/user/add  post
