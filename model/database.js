const Sequelize=require('sequelize')
const sequelize=new Sequelize('expense','root','twinkal@123',{ dialect:'mysql',host:'localhost'})


module.exports=sequelize