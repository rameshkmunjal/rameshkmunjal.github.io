//function to vacate any element if it is occupied with some content
let vacateBox=(element)=>{	
	element.innerHTML ="";
}

// function to set any attribute like id or class etc.
let setAnyAttribute = (element , attrType , attr) =>{
	element.setAttribute(attrType , attr);
}

// function to grab the element by its id
let getId =(element)=>{
	return document.getElementById(element);	
}

//function to createTextNode using document object
let createText = (textInput) =>{
	return document.createTextNode(textInput);	
}

// function to create an HTML element
let $ =(element)=>{
	return document.createElement(element);	
}

//function use in calculateTime 
// to set digits of time or date double if it is single
let setDoubleDigitFormat=(timeDigits)=>{
	if(timeDigits < 10){
				timeDigits = "0"+timeDigits;
	}
	return timeDigits;
}

// A function to convert milliseconds into Date or time
//pass milliseconds and get Date if it is not today
//if it is today , get time in return 
let calculateTime =(msgTime)=>{
	let today = new Date();
	//let milli = today.getTime();
	//console.log(milli);
	
	let todayDate = today.getDate();
	let todayMonth = today.getMonth() + 1;
	let todayYear = today.getFullYear();
	
	let msgDateDetails = new Date(msgTime);
	let msgDate = msgDateDetails.getDate();
	let msgMonth = msgDateDetails.getMonth() + 1;
	let msgYear = msgDateDetails.getFullYear();	
	
	let timeOfMsg = null;
	
	if(todayDate=== msgDate && todayMonth=== msgMonth && todayYear === msgYear){
		let msgDateDetails = new Date(msgTime);
		let msgHours = msgDateDetails.getHours();
		msgHours = setDoubleDigitFormat(msgHours);	
		let msgMinutes = msgDateDetails.getMinutes();
		msgMinutes	= setDoubleDigitFormat(msgMinutes);
		let msgSeconds = msgDateDetails.getSeconds();
		msgSeconds	= setDoubleDigitFormat(msgSeconds);
		timeOfMsg = decideAmPm(msgHours, msgMinutes);			
	} else {
		msgDate	= setDoubleDigitFormat(msgDate);
		msgMonth	= setDoubleDigitFormat(msgMonth);
		console.log("Msg time is :"+ msgDate  +":"+ msgMonth +":"+ msgYear);
		timeOfMsg = msgDate + "/" + msgMonth + "/" + msgYear;		
	}
	
	return timeOfMsg;
}

// A function to decide that time is AM or PM
let decideAmPm =(msgHours, msgMinutes)=>{	
	let msgTime= "";
	if( msgHours === 12 && msgMinutes === 0){
		msgTime = msgHours+"."+msgMinutes+ "Noon";
	} else if(msgHours >= 12 && msgMinutes > 0){
		msgHours = msgHours-12;
		msgTime = msgHours+"."+msgMinutes+"PM";		
	} else {
		msgTime = msgHours+"."+msgMinutes+ "AM";		
	}
	
	return msgTime;
}
