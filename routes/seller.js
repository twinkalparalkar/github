const ex=require('express')
const route=ex.Router()
const userController=require('../controller/seller')

route.post('/seller/add_item',userController.postreq)

route.get('/seller/display',userController.display_req)

route.delete('/seller/delete/:id', userController.delete_req)


module.exports = route;