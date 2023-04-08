const User=require('../models/product')

const postreq=async (req,res,next)=>{
    try{
        if(!req.body.name || !req.body.price ){
            throw new error("this is required")
        } 
        const a=req.body.name
        const b=req.body.price
        
        console.log(a,b)
        const data=await User.create({name:a,price:b})
        res.status(201).json({new_data:data})
    }catch(err){
        res.status(500).json({error:err})
    }
}

const display_req=async (req,res,next)=>{
    try{
    const data=await User.findAll()
    res.status(200).json({update:data})
    // console.log(data)
    }catch(err){
        res.status(500).json({error:err})
    }

}
const delete_req=async (req,res)=>{
    try{
        const uid=req.params.id;
        await User.destroy({where:{id:uid}})
        res.sendStatus(200)
    }
    catch(err){
        res.status(500).json({error:err})
    }
}
module.exports={
    postreq,display_req,delete_req
}