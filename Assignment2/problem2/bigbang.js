//---------------------------Some Utility functions -------------------------------------------------
//function defined to create an element
let $ = (element) =>{
	return document.createElement(element);	
}
//function defined to grab  an element by its id
let getId = (id) =>{
	return document.getElementById(id);	
}
//----------------------------------------Help Page functions------------------------------------------
// function defined to bind NAV buttons with onclick event 
//and to show NAV bar triggered by onmouseenter event
let showNavbar =() =>{	
	let navbar = getId("searchButtonHolder");
	navbar.style.display = "block";
	getId("showEpiBtn").onclick = openFirstModal;
	getId("showAllEpiBtn").onclick = openSecondModal;
	getId("searchNameBtn").onclick = openThirdModal;		
}
//----------------------------------------------------------------------------------------------------
// function to show and hide help page as per truthy/falsy  parameter
let showAndHideHelpModal = (sh) =>{
	let helpPage = getId("helpPage");
	
	if(sh){
		helpPage.style.display = "block";
	} else {		
		helpPage.style.display = "none";
		init();
	}	
}
// function to hide helpPage
let closeHelpPage = () =>{
	let helpDiv = getId("helpDiv");
	if(helpDiv != null){
		helpDiv.parentNode.removeChild(helpDiv);
	}
	showAndHideHelpModal(false);
}
// function to show help page inside table data - info on all episodes
let showHelpPage = (helpPage) =>{	
	//hide container if it is showing any episode info
	let container = getId("container");
	container.style.display = "none";
				
	//episodes array assigned to an array
	let episodes = bigbang._embedded.episodes;
	//helpDiv will act as container of tablulated information
	let helpDiv = $("div");
	helpDiv.setAttribute("id", "helpDiv");
	helpPage.appendChild(helpDiv);
	//creating and adding all child elements to helpPage
	let heading = $("h3");
	heading.innerHTML = "<p>Get Help To Ensure Correct Input</p>";
	helpDiv.appendChild(heading);
		
	let table = $("table");
	let tBody = $("tbody");
		
	let th1 = $("th");
	let th2 = $("th");
	let th3 = $("th");
	let th4 = $("th");
		
	th1.innerHTML = "<b>Season</b>";
	th2.innerHTML = "<b>Episode</b>";
	th3.innerHTML = "<b>ID</b>";
	th4.innerHTML = "<b>Name</b>";
		
	tBody.appendChild(th1);
	tBody.appendChild(th2);
	tBody.appendChild(th3);
	tBody.appendChild(th4);
		
	for(episode of episodes){				
		let c1 = $("td");
		let c2 = $("td");
		let c3 = $("td");
		let c4 = $("td");
		let row = $("tr");
			
		c1.innerHTML = "<p>"+ episode.season  +"</p>";
		c2.innerHTML = "<p>"+ episode.number   +"</p>";
		c3.innerHTML = "<p>"+ episode.id  +"</p>";
		c4.innerHTML = "<p>"+ episode.name  +"</p>";
			
		row.appendChild(c1);
		row.appendChild(c2);
		row.appendChild(c3);
		row.appendChild(c4);
			
		tBody.appendChild(row);			
	}
		
	table.appendChild(tBody);
	helpDiv.appendChild(table);
	// helpBtn disabled to avoid duplicate table generation		
	getId("helpBtn").disabled = true;		
}

// function to trigger functions showHelpPage and showAndHideHelpModal
let openHelpModal = () =>{		
	let helpPage = getId("helpPage");		
	showHelpPage(helpPage);
	showAndHideHelpModal(true);					
} 
//--------------------Some Commonaly Shared Functions  -------------------------------------------------
// function used when Navbar is to be hidden
let hideNavbar = () =>{
	let navbar = getId("searchButtonHolder");
	navbar.style.display = "none";	
}
// function used when container is to be hidden
let hideContainer = () =>{
	let container = getId("container");
	container.style.display = "none";
}
// function used when container is to be shown
let showContainer = (container) =>{
	container.style.display = "block";	
	container.innerHTML ="";	
}

//function used when modals are shown or hidden
//true value arg supplied will show modal
//false value arg supplied will hide modal
let showAndHideModals = ( fm , sm , tm) =>{
	//closeHelpPage();
	let firstModal = getId("firstModal");
	let secondModal = getId("secondModal");
	let thirdModal = getId("thirdModal");
		
	if(fm){			
		firstModal.style.display = "block";
	} else {			
		firstModal.style.display = "none";			
	}
		
	if(sm){			
		secondModal.style.display = "block";				
	} else {			
		secondModal.style.display = "none";				
	}
		
	if(tm){			
		thirdModal.style.display = "block";			
	} else {			
		thirdModal.style.display = "none";			
	}		
}

//function used to show output data 
//episode is the object having all data relating one episode
let showOutputData = (container, episode) =>{
	let heading = $("div");
	heading.setAttribute("id", "heading");
	heading.innerHTML = "<h2>"+episode.name +"</h2>";
	container.appendChild(heading);
		
	let introDiv = $("div");
	introDiv.setAttribute("id", "introDiv");					
					
	let table = $("table");
	let tBody = $("tbody");
	let row_1 = $("tr");
	let cell_1 = $("td");
	cell_1.setAttribute("id", "cell_1"); //id set so that styling could be made
	let cell_2 = $("td");
	cell_2.setAttribute("id", "cell_2");
	let cell_3 = $("td");
	cell_3.setAttribute("id", "cell_3");					
					
	cell_1.innerHTML ="<p><b>ID: </b>"+ episode.id +"<p>";
	cell_2.innerHTML ="<p><b>Season: </b>"+ episode.season +"<p>";
	cell_3.innerHTML ="<p><b>Episode No. : </b>"+ episode.number +"<p>";					

	row_1.appendChild(cell_1); // cells added to row
	row_1.appendChild(cell_2);
	row_1.appendChild(cell_3);					
					
	let c_1 = $("td");
	let c_2 = $("td");
	let c_3 = $("td");
					
	c_1.innerHTML ="<p><b>Date: </b>"+ episode.airdate +"<p>"; 
	c_2.innerHTML ="<p><b>Time: </b>"+ episode.airtime +"<p>"; 
	c_3.innerHTML ="<p><b>Duration: </b>"+ episode.runtime +" min.<p>"; 
					
	let row_2 = $("tr");					
	row_2.appendChild(c_1); 
	row_2.appendChild(c_2);
	row_2.appendChild(c_3);
					
	tBody.appendChild(row_1); //rows added to table body
	tBody.appendChild(row_2);
	table.appendChild(tBody); //table body added to table
	introDiv.appendChild(table); // introDiv added to container
	container.appendChild(introDiv);
					
	let photoDiv = $("div");
	photoDiv.setAttribute("id", "photoDiv");			
					
	let image = $("IMG"); //img element created
		
					
	if(episode.image){ //if image exists in episode object
		let imageSrc = episode.image.medium;
		image.setAttribute("src" , imageSrc);
		image.setAttribute("width", "400");
		image.setAttribute("height", "200");
		image.setAttribute( "alt" , "episode image");
	} else{ // default image if image is missing in episode object
		image.setAttribute("src" , "bg-10.jpg");
		image.setAttribute("width", "400");
		image.setAttribute("height", "200");
		image.setAttribute( "alt" , "episode image");
	}
	photoDiv.appendChild(image);
	container.appendChild(photoDiv); //image holder div added to container

	let detailsDiv = $("div");
	detailsDiv.setAttribute("id", "detailsDiv");
					
	detailsDiv.innerHTML = "<p>"+episode.summary+"</p>"; //summary of episode added to detailsDiv
	container.appendChild(detailsDiv);	//detailsDiv added to container			
}

//--------------------------------Function pertaining only Search Name option ----------------------------------------
//function used to show episode by name 
let showEpisodeByName =(episodeName) =>{
	//hiding help page
	closeHelpPage();
		
	showAndHideModals( false, false, false);
		
	
	let count = 0;
		
	let episodes = bigbang._embedded.episodes; //array assigned to episodes
		
	for (episode of episodes){ //loop to pick objects one by one
		if(episode.name == episodeName){	//if input name matches with database name 
				let container = getId("container");
				showContainer(container);
				showOutputData(container, episode);
				count++;
		}			
	}
	if(count == 0){
		alert("name not found. use HELP for correct input");
	}
}

//grab input and call function to show output
let captureName = () =>{
	const epiName = getId("episodeName").value;		
	showEpisodeByName(epiName);			
}

//hide nav , hide container , show modal and call function to grab name value 
let openThirdModal = () =>{
	hideNavbar();
	hideContainer();
		
	showAndHideModals( false, false, true);

	getId("submitName").onclick = captureName;	
}
//-------------------------Function pertaining only show episode by ids option -----------------------------
//function used to show episode by ids 
let showDetailsByIds = ( ...ids) => {
	//hiding help page
	closeHelpPage();
	//hiding  modal 
	showAndHideModals( false, false, false);
			
	let container = getId("container");
	showContainer(container);
		
	let episodes = bigbang._embedded.episodes;//assigning array
	let idArray = ids[0]; //get array stored inside array at zero index  		
		
	for( i in idArray){
		console.log(i + " : " + idArray[i]);
		for(episode of episodes){
				//console.log(episode.id);
			if( idArray[i] == episode.id){						
				showOutputData(container, episode);
			} //outer if block ended	
		} // inner for loop ended
	}		//outer for loop ended
} // function definition ended

let weedOutWrongIds =(numArr)=>{	
	let errorMessage = "These id do not exist in DB :  ";
	let epiArr = [];
	let epi = bigbang._embedded.episodes;//assigning array
	for( e of epi){
		epiArr.push(e.id);
	}
	
	for( let i=0; i < numArr.length; i++){
		if(epiArr.indexOf(numArr[i]) == -1){
			errorMessage += numArr[i] + " ";
			numArr.splice( i , 1);
			//next index would replace removed index . 
			//Hence counter needed to decreased by one
			i--;
		}
	}
	alert(errorMessage);
	
	showDetailsByIds(numArr);
}

// function to grab input and validate and sanitize it for use
let captureIDs = () =>{
	let ids = getId("episodeId").value;
	//input is wrapped in a single str hence split into many values 
	let strArr = ids.split(',');
		
	//array created to store numeric values
	let numArr = [];
	//input data validation or sanitization
	//only numeric values are filtered and stored in a new array
	for( a of strArr){
		const num = Number(a);
		if(isNaN(a)){								
			alert("This value is a string : " + a);
		} else{
			//check if input is a decimal value
			if( a % 1 != 0){
				alert("This input is Decimal value : " + a);					
			} else{				  
				 numArr.push(num);
			}
		}
	}
	//only if numArr holds any numeric value after sanitization
	// function showDetailsByIds is called
	// else user requested to re-enter input
	if(numArr.length > 0){			
		weedOutWrongIds(numArr);
	} else { 
		getId("episodeId").value = "";	
		alert("Please use HELP to input valid ID");
	}
}

//hide nav , hide container , show modal and call function to grab name value  
let openSecondModal = () =>{
	hideNavbar();
	hideContainer();		
	//second argument set true to show second modal
	showAndHideModals( false, true, false);	
		
	getId("submitId").onclick = captureIDs;	//click fired and function called to get ids
}
//----------------------------------------------------------------------------------------
//function to hide first modal 
// if input matches our records - call showOutputData function
//consequently all details of an episode will be shown
let showEpisodeDetails = (sn, en) =>{
	//hiding help page
	closeHelpPage();
		
	let count = 0;			
	console.log(sn , en);	
	let episodes = bigbang._embedded.episodes;
		
	for(episode of episodes){				
		if(episode.season == sn && episode.number == en){
			count++;
			showAndHideModals( false, false, false); //hide modal	
			
			let container = getId("container");
			showContainer(container);
			showOutputData(container, episode);
		} // end of if block				
	}
			
	if( count == 0){				
		alert("This season number or episode number does not exist");				
	}
}

//function to grab input of first modal and call showEpisodeDetails function - if input is validated
let captureEpisodeDetails = () =>{
	//grab both input values and assign to variables
	const seasonNumber = getId("seasonNum").value;
	const episodeNumber = getId("episodeNum").value;
	//validate input 
	if( (seasonNumber && episodeNumber) == undefined || 
		 (seasonNumber && episodeNumber) == null || 
		 (seasonNumber && episodeNumber) == "" ){
		alert("input details and then submit");
	} else {
		//call function to show episode details
		showEpisodeDetails(seasonNumber , episodeNumber);
	}
}

//hide nav , hide container , show modal and call function to grab name value 
let openFirstModal = () =>{		
	hideNavbar();
	hideContainer();
		
	showAndHideModals( true, false, false);		
	//if click fired - function to capture episode details	
	getId("submitNumber").onclick = captureEpisodeDetails; 
}
//-------------------------------------------------------------------------

//init function created to fire click events of buttons ---> to open modals
let init = () => {
	getId("nav-icon").onmouseover = showNavbar;
	const helpBtn = getId("helpBtn");	
	helpBtn.disabled = false;
	helpBtn.onclick = openHelpModal;
	//grab close button to activate its onclick property	
	const closeBtn = getId("closeBtn");
	closeBtn.onclick = closeHelpPage;
}
//--------------------------------------------------------------------------
//as load event is fired - init function called
window.onload = init;