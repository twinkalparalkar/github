const n=document.querySelector('#name')
const em=document.querySelector('#email')
const f=document.querySelector("#form1")

const ul=document.querySelector('.items')

f.addEventListener("submit",onSubmit1)
function onSubmit1(e){
	e.preventDefault()
	if(n.value===""|| em.value===""){
		alert("fill it")
	}else{
		const l=document.createElement('li')
		l.appendChild(document.createTextNode(`
		${n.value}`))
		ul.appendChild(l)
	}
	console.log(n.value,em.value)
	// localStorage.setItem('name',n.value)
	// localStorage.setItem('email',em.value)
	let m={
		name:n.value,
		email:em.value
	}
	let m1=JSON.stringify(m)
	localStorage.setItem('object',m1)
	n.value=""
	em.value=""
	console.log(localStorage.getItem('name'))

}
