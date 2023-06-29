let count=1
let prr=[]
function dynamic(){
	const parent = document.getElementsByClassName("container")[0]
	const player1ref = document.getElementById("player-1")
	const player2ref = document.getElementById("player-2")
	const player1= player1ref.value
	const player2= player2ref.value
	const landingpageref = document.getElementById("landingpage")
	prr.push(player1)
	prr.push(player2)
	landingpageref.remove()
	let gridconatiner = document.createElement("div")
	parent.appendChild(gridconatiner)
	let message=document.createElement("div")
	message.className="message"
	message.innerText=`${player1}, you're up`
	let count=0;
	gridconatiner.append(message)
	let grider= document.createElement("div")
	grider.className="grider"
	gridconatiner.append(grider)
	let gridarray=[]
	for(let i=0;i<9;i++){
		let create=document.createElement("div")
		create.className="gridcell"
		create.id=`${i+1}`
		grider.append(create)
		gridarray.push(create)
		create.addEventListener("mousedown",populate)
	}	
}	

function populate(obj){
	if(obj.target.innerText!=""){
		return
	}
	const mess= document.getElementsByClassName("message")[0]
	if(mess.innerText===`${prr[1]}, congratulations you won` || mess.innerText===`${prr[0]}, congratulations you won`){
		return
	}
	let player1
	if(count%2===0){
		mess.innerText=`${prr[0]}, you're up`
		obj.target.innerText="O"
	}
	else{
		mess.innerText=`${prr[1]}, you're up`
		obj.target.innerText="X"
	}
	count++
	const element = document.getElementById(obj.target.id)
	checkforwin()
}
function checkforwin(){
	const el1= document.getElementById("1")
	const el2= document.getElementById("2")
	const el3= document.getElementById("3")
	const el4= document.getElementById("4")
	const el5= document.getElementById("5")
	const el6= document.getElementById("6")
	const el7= document.getElementById("7")
	const el8= document.getElementById("8")
	const el9= document.getElementById("9")
	let arr=[]
	arr.push([el1.innerText,el2.innerText,el3.innerText])
	arr.push([el4.innerText,el5.innerText,el6.innerText])
	arr.push([el7.innerText,el8.innerText,el9.innerText])
	const mess= document.getElementsByClassName("message")[0]
	if((arr[0][0]==="X" &&arr[0][1]==="X" &&arr[0][2]==="X") || (arr[0][0]==="O" &&arr[0][1]==="O" &&arr[0][2]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
	if((arr[1][0]==="X" &&arr[1][1]==="X" &&arr[1][2]==="X") || (arr[1][0]==="O" &&arr[1][1]==="O" &&arr[1][2]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
	if((arr[2][0]==="X" &&arr[2][1]==="X" &&arr[2][2]==="X") || (arr[2][0]==="O" &&arr[2][1]==="O" &&arr[2][2]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
	if((arr[0][0]==="X" &&arr[1][0]==="X" &&arr[2][0]==="X") || (arr[0][0]==="O" &&arr[1][0]==="O" &&arr[2][0]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
	if((arr[0][1]==="X" &&arr[1][1]==="X" &&arr[2][1]==="X") || (arr[0][1]==="O" &&arr[1][1]==="O" &&arr[2][1]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
	if((arr[0][2]==="X" &&arr[1][2]==="X" &&arr[2][2]==="X") || (arr[0][2]==="O" &&arr[1][2]==="O" &&arr[2][2]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
	if((arr[0][0]==="X" &&arr[1][1]==="X" &&arr[2][2]==="X") || (arr[0][0]==="O" &&arr[1][1]==="O" &&arr[2][2]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
	if((arr[0][2]==="X" &&arr[1][2]==="X" &&arr[2][0]==="X") || (arr[0][2]==="O" &&arr[1][1]==="O" &&arr[2][0]==="O")){
		if(count%2===0){
			mess.innerText=`${prr[0]}, congratulations you won`
		}
		else{
			mess.innerText=`${prr[1]}, congratulations you won`
		}
		return
	}
}