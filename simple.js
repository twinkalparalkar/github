const f=document.querySelector('#form')
const n=document.querySelector('#name')
const em=document.querySelector('#email')
const pho=document.querySelector('#phone_no')
const ul=document.querySelector('#items')

f.addEventListener('submit',additem)

ul.addEventListener('click',removeitem)

function removeitem(e){
	e.preventDefault()
	// console.log(e.target.parentElement.innerText)
	if(e.target.classList.contains('delete')){
		var t=e.target.parentElement.innerText
		const v=t.split(' - ')[1]
		localStorage.removeItem(v)
		console.log(t.split(' - '))
		var l=e.target.parentElement;
		ul.removeChild(l)
	}
	if(e.target.classList.contains('edit')){
		console.log(112)
		var t=e.target.parentElement.innerText
		const v=t.split(' - ')
		localStorage.removeItem(v[1])
		console.log(v)
		var l=e.target.parentElement;
		ul.removeChild(l)
		n.value=v[0]
		em.value=v[1]
		pho.value=v[2]

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
	li.appendChild(document.createTextNode(`${n.value} - ${em.value} - ${pho.value} - `))
	const d=document.createElement('button')
	d.appendChild(document.createTextNode('Delete'))
	d.className="delete"
	li.appendChild(d)
	const ed=document.createElement('button')
	ed.appendChild(document.createTextNode('Edit'))
	ed.className="edit"
	li.appendChild(ed)
	ul.appendChild(li)
	let m={
		name:n.value,
		email:em.value,
		phone:pho.value
	}
	let m1=JSON.stringify(m)
	axios.post("https://crudcrud.com/api/e7a689a9022e45bbb9407e0c1dc4e4d0/studentdata",m)
	.then((r)=>console.log(r))
	.catch((err)=>console.log(err))
	// localStorage.setItem(em.value,m1)
	n.value=''
		em.value=''
		pho.value=''
	// console.log(1)
}


