const f=document.querySelector("#myform")
const ul=document.querySelector("#list")
const ex=document.querySelector("#ex")
const de=document.querySelector("#de")
const ca=document.querySelector("#category")

f.addEventListener("submit",additem);

ul.addEventListener('click',edititem);
function additem(e){
	e.preventDefault()
	if(ex.value==""|| de.value==""||ca.value==""){
		alert("Plz fill all input")
	}
	else
	{
		var li=document.createElement('li')
		li.appendChild(document.createTextNode(`${ex.value}-${ca.value}-${de.value} `));
		ul.appendChild(li)

		var d1=document.createElement('button')
		d1.className="delete"
		d1.appendChild(document.createTextNode('Delete Expense'))
		li.appendChild(d1)

		var e1=document.createElement('button')
		e1.className="edit"
		e1.appendChild(document.createTextNode('Edit Expense'))
		li.appendChild(e1)

		let m={
			expense_amount:ex.value,
			category:ca.value,
			description:de.value
		}
		localStorage.setItem(`${ex.value}-${ca.value}-${de.value} `,JSON.stringify(m))
		ex.value=""
		ca.value=""
		de.value=""
	}
	
}

function edititem(e){
	if(e.target.classList.contains("delete")){
		var li=e.target.parentElement
		
		var s=li.textContent.split(" ")[0]+" "
		console.log(li.textContent,s)
		localStorage.removeItem(s)
		ul.removeChild(li)
	}
	if(e.target.classList.contains("edit")){
		var li=e.target.parentElement
		
		var s=li.textContent.split(" ")[0]+" "
		
		localStorage.removeItem(s)
		ul.removeChild(li)
		var s1=li.textContent.split(" ")[0].split("-")
		console.log(li.textContent,s,li.textContent.split(" ")[0].split("-"),s)
		ex.value=s1[0]
		ca.value=s1[1]
		de.value=s1[2]
		
	}
}
console.log(ex,"jkk")
