//function to show userSection - page heading in place of nav
let showUserSection =()=>{
	let userSection = getId("userSection");
	userSection.style.display = "block";
		
}
//function to hide userSection when required
let hideUserSection =()=>{
	let userSection = getId("userSection");
	userSection.style.display = "none";	
}
let resetSendMsgRow=()=>{
	getId("inputBox").value=" ";
	getId("cameraIcon").style.display="block";
	getId("sendIcon").style.display="none";
}
//function to show image and page heading
let createPageHeading=(id, heading)=>{
	let imageholder = getId("userImgBox");					
	vacateBox(imageholder);
	
	let image = $("img");
	setImageSource(image, id);	
	setAnyAttribute(image, "id", "table-image");				
	imageholder.appendChild(image);	

	let headingBox = getId("pageNameBox");
	vacateBox(headingBox);
	let headingTxt = createText(heading);
	headingBox.appendChild(headingTxt);			
}
//function to show nav-box when required
let showNavBox =()=>{
	let navBox = getId("nav-box");
	navBox.style.display = "block";	
}
//function to hide nav-box when required
let hideNavBox =()=>{
	let navBox = getId("nav-box");
	navBox.style.display = "none";	
}

//function to style msgBox - a common div element - created to show message rows
let createNstyleMsgBox=()=>{
	let msgBox = $("div");
	setAnyAttribute(msgBox, "id", "msgBox");
	setAnyAttribute(msgBox, "class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
	return msgBox;
}

//function to set image source
let setImageSource=(image, id)=>{
	for (user of users){
		if(user.id === id){
			image.src = user.image;
		}
	}
}
//used When Home menu of main page is clicked
let showHomePage =(id)=>{		
	createPageLinks(id);	
	prepareFriendList(id);		
}
//function triggered when backBtn is clicked 
//to create default Home Page
let createHomePage=(id)=>{	
	createPageLinks(id);	
	prepareFriendList(id);
	createUserProfile(id);	
	showNavBox();
	hideUserSection();
	hideSendMsgContainer();
} 

let createUnreadPage =(id)=>{
	createPageLinks(id);	
	showUnreadMsgPage(id);	
	createUserProfile(id);	
	showNavBox();
	hideUserSection();
	hideSendMsgContainer();
}
//function linked with onclick event - will call createHomePage
let backToHomePage =(id, flag)=>{
	let backBtn = getId("backBtn");
	backBtn.onclick = function(e){			 
		e.preventDefault();
		if(!flag){
			createHomePage(id);	
		} else{			
			createUnreadPage(id);
		}
	};
}
//function to count unseen messages of a friend and return number
let countUnseenInYourInbox =(id, friendID)=>{
			let num = 0;
			for(message of msg){				
				if(message.receiver_id === id && message.sender_id === friendID && message.status === "unseen" ){
					num++;					
				}								
			}			
	return num;	//number of unseen messages of a friend		
}
//function to show last msg under the name of friend
let getLastMsgTxt =(id, friendID)=>{
	let lastMsg = "";
	let msgArray = [];
	for(message of msg){
		if( message.sender_id === friendID && message.receiver_id === id ||
			message.sender_id === id && message.receiver_id === friendID ){ 
				msgArray.push(message);			
			}
	}
	
	 
	for( let i=0; i < msgArray.length; i++){
		if(i === msgArray.length-1){
			lastMsg =  msgArray[i].text;			
		}		
	}
	if(lastMsg.length > 25){		
		lastMsg = lastMsg.substring(0, 25);
	} 
	lastMsg += ".......";
	//console.log(lastMsg);
	return lastMsg;
}

//function to replace send button icon with camera icon
//when mouse is entered in input box of send message
let changeIcons =(e)=>{
	e.preventDefault();
	
	let cameraIcon = getId("cameraIcon");
	cameraIcon.style.display = "none";
	
	let sendIcon = getId("sendIcon");
	sendIcon.style.display="block";
	
	sendIcon.onclick = function(){		
		alert("Sorry, No functionality added to this Button");		
	}
}

//function to show input box etc only when single friend chat page is shown
let showSendMsgContainer=()=>{
	let sendMsgContainer = getId("sendMsgContainer");
	sendMsgContainer.style.display="block";
}
//function to hide input box etc only when single friend chat page is not shown
let hideSendMsgContainer=()=>{
	let sendMsgContainer = getId("sendMsgContainer");
	sendMsgContainer.style.display="none";
}


//function to create table rows and columns and its contents for modal 
let createTwoColumnRow = ( col , colTxt1, colTxt2 )=>{
	let row = $("tr");
	let col1 = $(col);
	let col2 = $(col);
	let text1 = createText(colTxt1);
	let text2 = createText(colTxt2);
	col1.appendChild(text1);
	col2.appendChild(text2);
	
	row.appendChild(col1);
	row.appendChild(col2);
	
	return row;
}
//create message para with time to show in single friend chat
let addTime2MsgPara = ( msgTime, paraId , txt)=>{
	let para = $("p");					
	setAnyAttribute( para,"id", paraId);
	let msgTxt = createText(txt+" - "+msgTime);
	para.appendChild(msgTxt);
	return para;
}


//function to  create msg by friend and received by user
let createMsgPara=(displayDiv, msgBox, message, paraId)=>{
	let msgTime = calculateTime(message.time);
	let para = addTime2MsgPara( msgTime, paraId , message.text);
	msgBox.appendChild(para);
	displayDiv.appendChild(msgBox);
}

//function to create heading Unread Messages in between
let createUnreadHeading=(displayDiv, msgCount)=>{
	let msgBox = createNstyleMsgBox();				
	let boxTxt = createText("You have " + msgCount + " unread Messages");
	msgBox.appendChild(boxTxt);
	setAnyAttribute(msgBox, "class", "unreadHeading");				
	displayDiv.appendChild(msgBox);	
}

//function to create message - fetching data from chats.js
let createMessages = (flag, friendID, userId, displayDiv, msgCount)=>{
	if(!flag){ //flag is false when all msg without any distinction to be shown
		
		for( message of msg){					
			let msgBox = createNstyleMsgBox();
			
			if( message.sender_id === friendID && message.receiver_id === userId){
				createMsgPara(displayDiv, msgBox, message, "para-1");
			} else if ( message.receiver_id === friendID && message.sender_id === userId){
				createMsgPara(displayDiv, msgBox, message, "para-2");
			}
		}//for loop ended
	}//flag if ended
	else{ //flag is true when msg - seen and unseen - to be shown separately
		//alert("flag is true when unread shown separately");
		for( message of msg){					
			let msgBox = createNstyleMsgBox();					
			if( message.sender_id === friendID && message.receiver_id === userId && message.status ==="seen"){
				createMsgPara(displayDiv, msgBox, message, "para-1");
			} else if ( message.receiver_id === friendID && message.sender_id === userId ){
				createMsgPara(displayDiv, msgBox, message, "para-2");
			}					
		}//for loop ended
		
		createUnreadHeading(displayDiv, msgCount);		
				
		for( message of msg){					
			let msgBox = createNstyleMsgBox();			
			if ( message.sender_id === friendID && message.receiver_id === userId && message.status ==="unseen"){
				createMsgPara(displayDiv, msgBox, message, "para-1");
			}
		}
	}//flag else ended
}


//function to create main page table of friend list - visible by default on opening of site
let createMainPageTable = ( flag , id, friendID, friendImage, friendName)=>{
		let msgCount = countUnseenInYourInbox(id, friendID);
		let lastMsgTxt = getLastMsgTxt(id, friendID);						
		//col1 holds image of friend					
		let row = $("tr");
		let col1=$("td");
		setAnyAttribute(col1,"id", "col1");
							
		let image = $("img");							
		setAnyAttribute(image,"id", "table-image");
		image.src = friendImage;							
							
		col1.appendChild(image);							
		row.appendChild(col1);							
		//col1 holds name of friend					
		let col2 = $("td");								
		setAnyAttribute(col2,"id", "col2");		
		let col2Txt = '<p style="text-align:left">'+friendName +'</p>';
		//if value of flag is true and count of unread message number is > 0 - 
		//make addition to the contents of column - last message and unread message count
			if( flag && msgCount > 0){
				col2Txt +='<p id="lastMsg" ><span>'+lastMsgTxt+'</span><span id="msgCount">' + msgCount +'</span></p>';
			}
		col2.innerHTML = col2Txt;
		//if column content clicked - single friend chat will open
		col2.onclick = function(e){	
			e.preventDefault();
			show121ChatsPage(id, friendID, flag, msgCount);		//user id and friend id passed as arguments	flag=false when unread not shown							
		};
		row.appendChild(col2);
		
		return row;
}


//function to create form - to change image of user
let createProfileFormInput =(profileForm, inputArr, inputValueArr, readOnlyArr)=>{
	for(var i=0; i < 4; i++){
		let inputDiv = $("div");
		setAnyAttribute(inputDiv, "class", "form-group");
		let label = $("label");
		let labelTxt = createText(inputArr[i]);
		label.appendChild(labelTxt);
				
		let input = $("input");		
		setAnyAttribute(input , "class" , "form-control");
		
		if( inputArr[i] === "Password"){			
			setAnyAttribute(input , "type" , "password");
		}
		else if( inputArr[i] === "Image"){			
			setAnyAttribute(input , "type" , "file");
		}
		else{			
			setAnyAttribute(input , "type" , "text");			
		}
		
		setAnyAttribute(input , "value" , inputValueArr[i]);
		
		let readOnly = readOnlyArr[i];
		
			if(readOnly){
				setAnyAttribute(input , "readOnly", true);
			}
			
		inputDiv.appendChild(label);
		inputDiv.appendChild(input);
		
		profileForm.appendChild(inputDiv);	
	}
}
