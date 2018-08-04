//--------------------------------------------editProfilePage function started-------------------------------------------------
//This function create edit profile page - to enable user to change profile picture
let editProfilePage =(id)=>{	
	let displayDiv = getId("displayArea");
	vacateBox(displayDiv);	
	hideNavBox();
	showUserSection();
	createPageHeading(id, "Edit Profile");	
	
	let formContainer = $("div"); //creating container	
	let profileFormBox = $("div"); // creating div that will house form
	setAnyAttribute(profileFormBox, "class", "col-md-4 col-md-offset-4");
	
	let profileForm = $("form");	//creating form
	setAnyAttribute(profileForm, "id", "profileForm");
	
	let inputArr = ["Name", "Mobile", "Password", "Image"];
	let inputValue = { name:null, mobile:null, password:null, image:null };
	let readOnlyArr = [ true, true, false, false ];
	let inputValueArr = [];
	//to show input boxes pre-filled with user details
	for (user of users){
		if(user.id === id){
			inputValue.name = user.name;
			inputValueArr.push(inputValue.name);
			inputValue.mobile = user.mobile;
			inputValueArr.push(inputValue.mobile);
			inputValue.password = user.password;
			inputValueArr.push(inputValue.password);
			inputValue.image = user.image;
			inputValueArr.push(inputValue.image);
		}
	}
	//function  to create input boxes and setting their attributes 		
	createProfileFormInput(profileForm,inputArr, inputValueArr, readOnlyArr);
	// creating submit button
	let formBtn = $("button");	
	setAnyAttribute(formBtn , "id", "submitBtn");
	setAnyAttribute(formBtn , "class", "btn  btn-block");
	formBtn.innerHTML =  "Submit";
	profileForm.appendChild(formBtn);
	
	profileFormBox.appendChild(profileForm);
	formContainer.appendChild(profileFormBox);
	displayDiv.appendChild(formContainer);
	//adding click event to submit button
	let submitBtn = getId("submitBtn"); 
	submitBtn.onclick = function(){
			alert("Sorry ! No functionality added to this button");
			editProfilePage(id); //to retain user at same page
	}
	//providing exit from page  by clicking left arrow back button on left-top
	backToHomePage(id);	
}//end of editProfilePage function 

//-----------------------------------------showUnreadMsgPage function started-----------------------------------------------
//This function will show All chats including unread messages with a friend
let showUnreadMsgPage =(id)=>{		
	createPageLinks(id);
	let displayDiv = getId("displayArea");
	vacateBox(displayDiv);
	hideUserSection();				
	//creating table of friends names and images	
	let table = $("table");		
	setAnyAttribute(table,"class","table table-hover");
	let tBody = $("tbody");		
	//loop to extract info on friends and append to table	
	for(user of users){
		if(id === user.id){
			let friendsArray = user.friends;				
				
			for(let i=0; i < friendsArray.length; i++){
				let friendID = friendsArray[i];
					
				for(user of users){
					if( friendID === user.id){	//function will insert contents in table columns and return row 						
						let row = createMainPageTable ( true , id, friendID, user.image, user.name);							
						tBody.appendChild(row);
					} //end of inner if block
				} //end of third for loop													
			}//second for loop ended
		}//if block ended
	}//first for loop ended
	
	table.appendChild(tBody);
	displayDiv.appendChild(table);		
}// showUnreadMsgPage function ended
//--------------------------------------------Single Friend Chat function started-------------------------------------------------
//This page will show 121 chat between user and his friend
let show121ChatsPage =(userId, friendID, flag, msgCount)=>{
	//flag is true when unread shown separately
	
	let displayDiv = getId("displayArea");
	vacateBox(displayDiv);
	hideNavBox();
	showUserSection();
	resetSendMsgRow();
	//loop to search friend , create page heading with his name and image 
	for(user of users){
		if(user.id === friendID){						
			createPageHeading( friendID, user.name);						
			createMessages(flag, friendID, userId, displayDiv, msgCount);	//function to extract messages from chats file		
		}//if block ended
	}//for loop ended
	
	showSendMsgContainer();
	let inputBox = getId("inputBox");
	inputBox.onmouseenter = changeIcons; //will replace camera icon with send msg icon
	backToHomePage(userId, flag);	//to go back to home page
}//show121ChatsPage function ended
//--------------------------------------------Single Friend Chat function ended-------------------------------------------------

//--------------------------------------------Home page related functions started-------------------------------------------------

// a function to create friends list in a table format with clickable links
let prepareFriendList = (userId) =>{		
		let displayDiv = getId("displayArea");
		vacateBox(displayDiv);// in case of second time use of function
		hideUserSection();	//section showing page heading when nav is not shown but hide now			
		//creating table to create friend list
		let table = $("table");		
		setAnyAttribute(table, "class", "table table-hover");
		let tBody = $("tbody");		
		//getting friends array from users file
		for(user of users){
			if(userId === user.id){
				let friendsArray = user.friends;				
				//loop to get a friend id
				for(let i=0; i < friendsArray.length; i++){
					let friendID = friendsArray[i];
					//loop to get friendwise info
					for(user of users){
						if( friendID === user.id){	
							//first argument - false when last msg and unread msg count not to be shown						
							let row = createMainPageTable ( false , userId, friendID, user.image, user.name);
							tBody.appendChild(row);
						} //end of inner if block
					} //end of third for loop													
				}//second for loop ended
			}//if block ended
		}//first for loop ended
	table.appendChild(tBody);
	displayDiv.appendChild(table);	
}// prepareFriendList function ended

// function to show user image at top left corner of page
let createUserProfile =(id)=>{	
	let userID = id;
	for(user of users){
		if(user.id === id){
			let profileImgBox = getId("profileImgBox");			
			vacateBox(profileImgBox);
			let image = $("img");
			image.src = user.image;			
			setAnyAttribute(image, "id", "table-image");
			profileImgBox.appendChild(image);						
		}
	}	
}//createUserProfile function ended

//a function - To create page links and insert in nav menu items alongwith login ID 
let createPageLinks = (id) =>{
	
	let aArr = document.getElementsByTagName("a");	
	
	for(let i=0; i < aArr.length; i++){
		let a = aArr[i];
		
		let testID = a.getAttribute("id");
		//adding functions to a tags 
		if( testID === "home"){	
			a.href="javascript:void(0)";
			a.setAttribute("onclick", "showHomePage("+id+")");
		}  else if( testID === "profile"){
			a.href="javascript:void(0)";
			a.setAttribute("onclick", "editProfilePage("+id+")");	
		} else if( testID === "unread"){
			a.href="javascript:void(0)";
			a.setAttribute("onclick", "showUnreadMsgPage("+id+")");
		}				
	}		
}// createPageLinks function ended
//------------------------------------------Login stage functions --------------------------------------------------------------
// function to facilitate login if password and mobile number match - proceed in the program
// else display error message
let validateLoginDetails=()=>{
	let mobileNumber = getId("mobile").value;
	let password = getId("password").value;
	
	let mobileNumberFound=false;
	let passwordFound = false;
	
	for(user of users){
		
		if(mobileNumber === user.mobile){
			mobileNumberFound = true;			
		}
	   if(password === user.password){
			passwordFound = true;
		}
		
		//if mobile number and password match
		// remove form and modal container , show main page conatiner and createHomePage
		if(mobileNumber === user.mobile && password === user.password ){
			//remove formContainer and modalContainer- not required now
			let formElement = getId("formContainer");		
			formElement.parentNode.removeChild(formElement);
			let btnElement = getId("modalContainer");		
			btnElement.parentNode.removeChild(btnElement);
			let loginPageTitle = getId("loginPageTitle");		
			loginPageTitle.parentNode.removeChild(loginPageTitle);
			//display main page - henceforth will display pages required
			let mainPage = getId("mainPage");
			mainPage.style.display = "block";			//
			
			//create main page - default display
			createHomePage(user.id);
		}		
	} //end of for loop
	
	//display password or mobile number mismatch error
	if(!mobileNumberFound && !passwordFound){
			alert("mobile number and password is wrong"); 
	} else if(mobileNumberFound && !passwordFound){
		alert("password is wrong");
	}else if(!mobileNumberFound && passwordFound){
		alert("mobile is wrong");
	}	
} // validateLoginDetails function ended
//------------------------------------------------------------------------------------------------------------------
//function to create helpModal - table of user ids and passwords 
let createHelpModal = () =>{
	let tableBox = getId("table-box");
	vacateBox(tableBox);
	let table = $('table');	
	setAnyAttribute( table, "class", "table table-hover");
	let tBody = $('tbody');
	
	let row = createTwoColumnRow("th","Mobile Number", "Password");
	
	tBody.appendChild(row);
	
	for( user of users){
			let line = createTwoColumnRow("td", user.mobile, user.password);			
			tBody.appendChild(line);
	}
	
	table.appendChild(tBody);
	tableBox.appendChild(table);	
}//createHelpModal function ended
//------------------------------------------------------------------------------------------------------------------------
// As document loads - it will create helpModal and on click of button - will start function to validate login details 
let init =()=>{
	createHelpModal();
	let loginBtn = getId("loginBtn");
	loginBtn.onclick = validateLoginDetails;	
}

window.onload = init;