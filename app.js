// Task 3
// const s=document.querySelector("#header-title");
// s.style.borderBottom="solid 2px black";
// const f=document.querySelector(".title")
// f.style.fontWeight="bold"
// f.style.color="green"

// Task 4
// const ul=document.querySelector("#items");
// ul.children[2].style.background="green"

// for(let i=0;i<ul.children.length;i++){
// 	ul.children[i].style.fontWeight="bold"
// }
// const lc=document.getElementsByClassName("list-group")
// lc[0].children[4].style.color="yellow"
// lc[0].children[4].style.paddingTop = "10px"
// lc[0].children[4].style.paddingBottom = "10px"
// const l5=document.getElementsByTagName("li")
// l5[4].style.background="red"
// l5[4].style.paddingLeft="21px"
// console.log(lc[0].children[0])

// task 6
// const ul1=document.querySelector(".list-group")
// ul1.children[1].style.background="green"
// ul1.children[2].style.display = "none";

// const ul=document.querySelectorAll(".list-group")
// ul[0].children[1].style.color="green"
// for(let i=0;i<ul[0].children.length;i+=2){
// 	ul[0].children[i].style.background="green"
// 	// console.log(i)
// }
//Task 7
const p=document.querySelector("#items")


// p.parentNode.style.background="#ccc"
p.parentElement.style.background="#ccc"
console.log(p.children,p.lastElementChild,p.firstElementChild)
p.firstElementChild.style.background="red"
p.lastElementChild.style.background="red"
console.log(p.children,p.firstChild,p.lastChild)

console.log(p.nextSibling,p.previousSibling)
console.log(p.nextElementSibling,p.previousElementSibling)
p.nextElementSibling.style.background="pink"
p.previousElementSibling.style.background="pink"
var newDiv=document.createElement('div')
newDiv.className='hello'
newDiv.setAttribute('title','Hello div')
console.log(newDiv)
var newDivText=document.createTextNode('HEllo')
newDiv.appendChild(newDivText)
var c=document.querySelector('header .container')
var h=document.querySelector('header h1')
c.insertBefore(newDiv,h)
// console.log(newDiv)
var newDiv1=document.createElement('div')
newDiv.className='hello'
var newDivText1=document.createTextNode('HEllo')
newDiv1.appendChild(newDivText1)
var c1=document.querySelector('#main')
var h1=document.querySelector('#items')
c1.insertBefore(newDiv1,h1)


