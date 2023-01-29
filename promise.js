console.log("Person1: show ticket")
console.log("Person2: show ticket")

const premMovie=async ()=>{
	const promisewifeforticket=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('ticket')
		},3000) })

	const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'))
	const getbutter=new Promise((resolve,reject)=>resolve('butter'))
	const getColdDrinks=new Promise((resolve,reject)=>resolve('Cold Drinks'))

	let ticket=await promisewifeforticket
	let [popcorn,butter,drink]=await Promise.all([getpopcorn,getbutter,getColdDrinks])
	console.log(`${popcorn},${butter},${drink}`)
	// console.log("husband:we should go in")
	// console.log("wife:no I am hungry")
	// let popcorn=await getpopcorn
	// console.log(`husband:I got ${popcorn}`)
	// console.log("husband:can we go in?")
	// console.log("wife: No take butter")
	// let butter=await getbutter

	// console.log(`husband:I got ${butter}`)
	// console.log("wife:Plz bring cold drinks")
	// let drink=await getColdDrinks
	// console.log(`husband:I got ${drink}`)
	return ticket
}

premMovie().then((t)=>console.log(`person3:show ${t}`))

// const promisewifeforticket=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve('ticket')
// 	},3000)
// })

// const getpopcorn=promisewifeforticket.then((t)=>{
// 	console.log("husband:we should go in")
// 	console.log("wife:no I am hungry")
// 	return new Promise((resolve,reject)=>resolve(`${t} popcorn`))	
// })

// const getbutter=getpopcorn.then((t)=>{
// 	console.log("husband:can we go in?")
// 	console.log("wife: No get butter")
// 	return new Promise((resolve,reject)=>resolve(`${t} butter`))})

// getbutter.then((t)=>console.log(`${t}`))
console.log("Person4: show ticket")
console.log("Person5: show ticket")
// let posts=[
// 	{title:"Post one",body:"one"},
// 	{title:"Post two",body:"two"}
// ]

// function display(){
// 	setTimeout(()=>{
// 		let output=''
// 		posts.forEach(function(post,index){
// 			output+=`<li>${post.title} created ${post.CreatedAt}</li>`
// 		})
// 		document.body.innerHTML=output
// 	},1000)
// }
// function createpost(p){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 		posts.push({...p,CreatedAt:new Date().getTime()})
// 			const error=false

// 			if(!error){
// 				resolve()
// 			}else{
// 				reject("Something wrong")
// 			}

// 		},1000)
// 	})
	
	
// }

// function deletepost(){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			const error=false
// 			if(Object.keys(posts).length === 0){
// 				error=true
// 			}else{
// 				posts.pop()
// 			}
				
// 			if(!error){
// 				resolve()
// 			}else{
// 				reject("Something wrong")
// 			}
// 		},1000)
		
// 	})
// }

// const newfunction1=()=>{
// 	display()
// 	deletepost()
// }
// // display()
// createpost({title:"Post three",body:"three",CreatedAt:new Date().getTime()}).then(()=>{
// 	display()
// 	deletepost().then(()=>{
// 		display()
// 		deletepost().then(()=>{
// 			display()
// 			deletepost().then(()=>{
// 				display()
// 				deletepost().then(()=>{
// 					display()
// 				}).catch(err=>console.log(err))
// 			})
// 		})
// 	})
	
// }).catch(err=>console.log(err))

// createpost({title:"Post Four",body:"three"}).then(()=>{
// 	display()
// 	deletepost().then(()=>{
// 		display()
// 	})
// }
// )
console.log("hello")