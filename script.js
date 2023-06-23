//your JS code here. If required.
function dynamic(){
	const parent = document.getElementById("container")
	const player1ref = document.getElementById("player-1")
	const player2ref = document.getElementById("player-2")
	const player1= player1ref.value
	const player2= player2ref.value
	const landingpageref = document.getElementById("landingpage")
	landingpageref.remove()
	const gridconatiner = document.createElement("div")
	parent.append(gridconatiner)
	const message=document.createElement("div")
	message.className="message"
	message.innerText=`${player1}, you're up`
	let count=0;
	gridconatiner.append(message)
	for(let i=0;i<9;i++){
		let create=document.createElement("div")
		create.className="gridcell"
		create.id=`${i+1}`
		gridconatiner.append(create)
	}
	
}	
}