// Task 3
const s=document.querySelector("#header-title");
s.style.borderBottom="solid 2px black";
const f=document.querySelector(".title")
f.style.fontWeight="bold"
f.style.color="green"

// Task 4
const ul=document.querySelector("#items");
ul.children[2].style.background="green"

for(let i=0;i<ul.children.length;i++){
	ul.children[i].style.fontWeight="bold"
}
const lc=document.getElementsByClassName("list-group")
lc[0].children[4].style.color="yellow"
lc[0].children[4].style.paddingTop = "10px"
lc[0].children[4].style.paddingBottom = "10px"
const l5=document.getElementsByTagName("li")
l5[4].style.background="red"
l5[4].style.paddingLeft="21px"
console.log(lc[0].children[0])
