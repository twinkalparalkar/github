const f=document.querySelector('#f1')

f.addEventListener('submit',add_user)

function add_user(e){
    e.preventDefault()
    const a=document.querySelector('#name').value
    const b=document.querySelector('#Email').value
    const c=document.querySelector('#Password').value
    
    let j={name:a,email:b,password:c}
    let res=axios.post('http://localhost:3000/user/signup',j)
    console.log(a,b,c,j,res.data.new_data)
}
console.log("h12",f)