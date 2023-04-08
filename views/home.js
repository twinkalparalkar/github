const f1=document.querySelector('#f1')
const u1=document.querySelector('#list')
console.log('hello',f1)

f1.addEventListener('submit',add_item)
u1.addEventListener('click',delete_item)

async function add_item(e){
    try{
        e.preventDefault()
    const name1=document.querySelector('#name')
const price=document.querySelector('#price')
    let j={"name":name1.value,"price":price.value}
    
    let res=await axios.post('http://localhost:3000/seller/add_item',j)
    // console.log(j,res.data.new_data)
    showall(res.data.new_data)
    }
    catch(err){ 
        console.log(err)
    }    
}

async function delete_item(e){
    try{
        e.preventDefault()
    if(e.target.classList.contains('del1')){
        const li=e.target.parentElement
        const u1=li.parentElement
        let res=await axios.delete(`http://localhost:3000/seller/delete/${li.id}`)
        if(res.status==200){
            alert('Deleted Sucessfully')
            u1.removeChild(li)
            }
        // console.log(li)
    }
}
catch(err){ 
    console.log(err)
}  
}

window.addEventListener("DOMContentLoaded",()=>{
    async function getData(){
        try{
            let r=await axios.get("http://localhost:3000/seller/display")
            console.log(r.data.update)
            for(var i=0;i<r.data.update.length;i++){
                // console.log(r.data.update[i])
                showall(r.data.update[i])
            }
        }
        catch(err){
            console.log(err)
        }
    }
    getData()
})

function showall(d){
    try{
        const e1=document.querySelector('#list')
console.log("oppppp",d,u1)
const li=document.createElement('li')
li.id=`${d.id}`
li.appendChild(document.createTextNode(`${d.name} - ${d.price} - `))

const del=document.createElement('button')
del.className="del1"
del.appendChild(document.createTextNode('Delete Product'))
li.appendChild(del)
e1.append(li)
       
    }catch(err){
        console.log(err)
    }
    
}