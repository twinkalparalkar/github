var obj={num:2}

var additem=function(a,b,c){
	return this.num+a+b+c
}
console.log(additem.call(obj,6,3,4))


console.log(additem.apply(obj,[6,3,4]))
	
var b=additem.bind(obj)
console.log(b(6,3,4))
	
var Student={age:20}

var Printage=function(){
	return this.age
}

console.log(Printage.bind(Student)())
// part2
let multiply=function(x,y){
	console.log(x*y)
}
let m1=multiply.bind(this,2)
m1(5)

let m2=multiply.bind(this)
m2(5,3)

let multiply1=function(x){
	return function (y){
	console.log(x*y)}
}
let m3=multiply.bind(this,2)
m3(10)