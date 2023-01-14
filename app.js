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
