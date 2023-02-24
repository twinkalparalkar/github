
const f=document.querySelector("#form1")
const e1=document.querySelector("#electronic")
const e2=document.querySelector("#food")
const e3=document.querySelector("#skincare")

const a=document.querySelector("#price")
const b=document.querySelector("#name")
const c=document.querySelector("#cat")
const w1=document.querySelector("#w1")
f.addEventListener('submit',additem)
w1.addEventListener('click',removeitem1)

function additem(e){
	e.preventDefault()
	const li=document.createElement("li")
	const del1=document.createElement('button')
	del1.className="del11"
	li.appendChild(document.createTextNode(`${a.value}-${b.value}-${c.value} `))
	del1.appendChild(document.createTextNode(`Delete Order`))
	li.append(del1)
	if(c.value=="Electronic"){e1.append(li)}
	else if(c.value=="Food"){e2.append(li)}
	else{e3.append(li)}
	let j={"price":a.value,"productName":b.value,"category":c.value}
	// let m=JSON.stringify(j)
	axios.post("https://crudcrud.com/api/af5c06c21b164c9f80671f95281ee9f3/studentdata",j)
	.then((r)=>console.log(r))
	.catch((err)=>console.log(err))
	a.value=''
		b.value=''
		c.value=''
}

function removeitem1(e){
	e.preventDefault()
	if(e.target.classList.contains("delete")){
		const li=e.target.parentElement
		const ul=li.parentElement

		axios.delete(`https://crudcrud.com/api/af5c06c21b164c9f80671f95281ee9f3/studentdata/${li.id}`)
		.then((r)=>console.log(r))
	.catch((err)=>console.log(err))
		ul.removeChild(li)
	console.log("hello",li.id,ul.id)
	}
}
window.addEventListener("DOMContentLoaded",()=>{
	axios.get("https://crudcrud.com/api/af5c06c21b164c9f80671f95281ee9f3/studentdata")
	.then((r)=>{
		for(var i=0;i<r.data.length;i++){
			// console.log(r.data[i])
			showall(r.data[i])
		}
	})
	.catch((err)=>console.log(err))
})

function showall(o){
	const li=document.createElement('li')
	li.id=o._id
	li.appendChild(document.createTextNode(`${o.price}-${o.productName}-${o.category} `))
	const d=document.createElement('button')
	d.appendChild(document.createTextNode('Delete Order'))
	d.className="delete"
	li.appendChild(d)
	if(o.category=="Electronic"){e1.append(li)}
	else if(o.category=="Food"){e2.append(li)}
	else{e3.append(li)}
}
console.log("hello",f,a,b,c)