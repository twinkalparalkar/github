const f=document.querySelector('#form')
const n=document.querySelector('#name')
const em=document.querySelector('#email')
const pho=document.querySelector('#phone_no')
const ul=document.querySelector('#items')

f.addEventListener('submit',additem)

ul.addEventListener('click',removeitem)

function removeitem(e){
	e.preventDefault()
	console.log(e.target.parentElement.innerText)
	if(e.target.classList.contains('delete')){
		var t=e.target.parentElement.innerText
		const v=t.split(' - ')[1]
		localStorage.removeItem(v)
		console.log(t.split(' - '))
		var l=e.target.parentElement;
		ul.removeChild(l)
	}
	

}

function additem(e){
	e.preventDefault()
	if(n.value=="" || em.value=="" ||pho.value==""){
		alert('Fill all input')
	}else{
		console.log(n.value)
	}
	const li=document.createElement('li')
	li.appendChild(document.createTextNode(`${n.value} - ${em.value} - ${pho.value}`))
	const d=document.createElement('button')
	d.appendChild(document.createTextNode('Delete'))
	d.className="delete"
	li.appendChild(d)
	ul.appendChild(li)
	let m={
		name:n.value,
		email:em.value,
		phone:pho.value
	}
	let m1=JSON.stringify(m)
	localStorage.setItem(em.value,m1)

	// console.log(1)
}
// localStorage.removeItem('amishaparalkar16@gmail.com')
