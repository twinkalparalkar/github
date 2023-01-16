const f=document.querySelector('#form')
const n=document.querySelector('#name')
const em=document.querySelector('#email')
const pho=document.querySelector('#phone_no')
const ul=document.querySelector('#items')

f.addEventListener('submit',additem)

function additem(e){
	e.preventDefault()
	if(n.value=="" || em.value=="" ||pho.value==""){
		alert('Fill all input')
	}else{
		console.log(n.value)
	}
	const li=document.createElement('li')
	li.appendChild(document.createTextNode(`${n.value} - ${em.value} - ${pho.value}`))
	ul.appendChild(li)
	let m={
		name:n.value,
		email:em.value,
		phone:pho.value
	}
	let m1=JSON.stringify(m)
	localStorage.setItem(em.value,m1)
	console.log(1)
}
// console.log(f)