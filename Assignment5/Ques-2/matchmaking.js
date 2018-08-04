//This file is about functions written in jquery   
$(document).ready(()=> {
	// This function will  calculate a random number
	let getRandomNumber=()=>{
		let num = Math.floor(Math.random()*10);
		return num;				
	}
	// This function will loop through matches array of JSON objects 
	//and return every single match object to the calling function one by one
	let createProfile=(index)=>{		
		for( let i=0; i < matches.length; i++){
			if( i === index){
				return matches[i];				
			}
		}
	}
	//This function will create elements - show profiles there in as got from matches data
	let showProfile=( $match, $row, $visitor, $num )=>{		
		if(!$visitor){  //if visitor variable is false -  images and content will be added to the row
			$box = $("<div>"); //container of img and content
			
			$box.attr("id", "box-"+ $num); //id of box
			$imgBox = $("<div>");
			$imgBox.html('<img src="'+$match.image+'" />');						
			$imgBox.addClass("img-box").appendTo($box); //img box added to box div
			
			$contentBox = $("<div>");
			$contentBox.html('<ul>'+
								'<li><b>ID:'+ $match.id+'</b></li>'+
								'<li><b>Age:</b>'+$match.age+' yr.</li>'+
								'<li><b>Height:</b>'+ $match.height+'</li>'+
								'<li><b>Quali.:</b>'+ $match.qualification+'</li>'+
								'<li><b>Profession:</b>'+ $match.profession+'</li>'+
								'<li><b>Annual Income:Rs.</b>'+ $match.income+'</li>'+
								'<li><button class="connectBtn bg-mycolor"><a href="javascript:void(0)"  onclick="alertJoke()">Connect</a></button></li>'+
								'</ul>');
			$contentBox.addClass("content-box").appendTo($box); //content box added to box div
			$box.addClass("box").appendTo($row); //box added to row div
		}
		else{ //if visitor variable is true - only images will be added to the row
			$box = $("<div>");
			$box.html('<img src="'+$match.image+'" class="visitorImage"/>');
			$row.removeClass("row");
			$row.addClass("visitorRow");
			$box.addClass("visitorDiv").appendTo($row);				
		}
	}
	// a multi-use function to create container and row
	let createContainer=(heading)=>{
		let $displayArea = $("#displayArea");	
		let $container = $("<div>");
		$container.html(heading); //heading is text argument in function call
		let $row = $("<div>");
		$container.addClass("container").appendTo($displayArea);
		$row.addClass("row").appendTo($container);
		//console.log($container);
		return $row;		
	}
	//This function will get profiles from match - will also ensure not to repeat that profile in that row
	let getProfileDetails=($row, $visitor)=>{
		let indexArr = [];
		let limit = 4;
		for(let $i=1 ; $i <= limit; $i++){
			let index = getRandomNumber(); //variable of random value
			if( indexArr.indexOf(index) === -1){ // if profile not existing in array - move ahead
				//console.log(index);
				indexArr.push(index); //push such exclusive number in array to compare with coming next ones
				$match = createProfile(index);
				showProfile($match, $row, $visitor, $i );
			} else {
					$i--; // if profile repeated keep the counter at same value reducing by 1
			}
		}		
	}
	//function to create new matches row
	let createNewMatches=()=>{
		let heading = "<h2>New Matches</h2>";
		let $row = createContainer(heading);		
		getProfileDetails($row, false);								
	}
	//function to create daily recommendations row
	let createDailyMatches=()=>{		
		let heading = "<h2>Daily Recommendations</h2>";
		let $row = createContainer(heading);		
		getProfileDetails($row, false);				
	}
	//function to create interest received row
	let createInterestRecd=()=>{		
		let heading = "<h2>Interest Received</h2>";
		let $row = createContainer(heading);		
		getProfileDetails($row, false);				
	}
	//function to create profile visitors row
	let createProfileVisitors=()=>{		
		let heading = "<h2>Profile Visitors</h2>";
		let $row = createContainer(heading);		
		getProfileDetails($row, true);						
	}

//------------------------Nav Slider functions ---------------------------------------------	
	//openNav function - will slide NAV rightwards - to show NAV
	let openNav=()=> {		
		$("#mySidenav").animate({left:"+=250px"}, 1000);
		//alert("icon bar clicked");
	}

	//init function - all functions called at start - wrapped in it
	let init =() =>{
		createNewMatches();
		createDailyMatches();
		createInterestRecd();
		createProfileVisitors();		
		$("#navIconBox").click(function (){
			openNav(); 
		});	
	}
	
	//a function to initialize programme 
	init();
}); //document ready function ended

//closeNav function - will slide NAV leftwards - to hide NAV
let closeNav =()=>{		
	$("#mySidenav").animate({left:"-=250px"}, 1000);
}
//---------------------------------------------------------------------------------------------------
let alertJoke =()=>{
		alert("Ha! Ha ! Ha ! Really , Are you serious !");
}
//--------------------------------------------------------------------------------------------------