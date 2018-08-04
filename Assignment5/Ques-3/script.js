$(document).ready(function(){ //when html page is loaded
	//function to show home images and details of homes		
	let addHomeRow=($container, $home)=>{		
		$row = $('<div>').addClass('row');
		$contentBox=$('<div>').addClass('content-box');
		$imgBox=$('<div>').addClass('img-box');
		$imgBox.html('<img src="'+$home.image+'" />');
		$imgBox.appendTo($row);
		
		$contentBox.html('<ul class="home-details"><li><b>ID : </b>'+$home.id+'</li>'+
									'<li><b>City : </b>'+$home.city+'</li>'+
									'<li><b>Type : </b>'+$home.type+'</li>'+
									'<li><b>Builder : </b>'+$home.builder+'</li>'+
									'<li><b>Status : </b>'+$home.status+'</li>'+
									'<li><b>Size : </b>'+$home.size+'</li>'+
									'<li><b>Cost : </b>Rs. '+$home.cost+'</li></ul>');
		$contentBox.appendTo($row);
		$row.appendTo($container);
	}//end of addHomeRow function 
	
	// function to add button below the image and contents
	let addButtonRow=($container, $home)=>{
		$row = $('<div>').addClass("row").attr("id" , "btnRow");
			
		$button = $('<button>');
		$button.html("Contact Agent");
		$button.addClass("btn").attr("href", "javascript:void(0)").attr("onclick" ,"showModal("+$home.id +")");
		$button.appendTo($row);		
		
		$row.appendTo($container);
	} //end of addButtonRow function
	
	// a loop containing all functions required to create images and contents reg homes
	for($home of homes){ // single object will be supplied as argument in each pass of loop
		$displayArea=$("#displayArea"); //grabbing element by id 
		$container = $('<div>').addClass("displayContainer");
		addHomeRow($container, $home); 
		addButtonRow($container, $home);
		$container.appendTo($displayArea); //container with all info appended to displayArea
	} //end of for loop		
}); // end of document.ready function 

//modal will be shown when button in webpage  is pressed to contact agent
let showModal=(id)=>{		
		$modalArea = $("#modalArea"); //element grabbed by id	
		$modalArea.empty();
		$container=$('<div>'); //container to hold form inside modal
		$form = $('<form>'); //form inside modal 
		//details of person desiring to contact agent
		$row1=$('<div>').attr("id" , "row1");
		$row1.html('<p>I am interested , pls contact me.</p>');		
		$row1.addClass('formRow').appendTo($form);
		
		$row2 = $("<div>");
		$row2.html('<input class="inputBox" id="userName" type="text" placeholder="Name"   />');
		$row2.addClass("formRow").appendTo($form);
		
		$row3 = $("<div>");
		$row3.html('<input class="inputBox" id="userMobile" type="text" placeholder="Mobile"  />');
		$row3.addClass("formRow").appendTo($form);
		
		$row4 = $("<div>");
		$row4.html('<input class="inputBox" id="userEmail" type="email" placeholder="email address"  />');
		$row4.addClass("formRow").appendTo($form);
		
		$row5 = $("<div>");
		$button1 = $('<button>');
		$button1.html("Send Message");
		$button1.addClass("btn2").appendTo($row5);
		$button1.click((e)=>{ //button-1 is pressed to contact agent
			e.preventDefault();
			$userName = $("#userName").val();
			$userMobile = $("#userMobile").val();
			$userEmail = $("#userEmail").val();
			//validateModalForm will validate form input
			validateModalForm($userName, $userMobile, $userEmail);						
		});
		
		$button2 = $('<button>'); //press button-2 to go back to page
		$button2.html("Back");
		$button2.addClass("btn2").appendTo($row5);
		$button2.attr("href", "javascript:void(0)").attr("onclick" ,"resetFunction()");
		$row5.addClass("btnRow").appendTo($form);
		//adding form to container and container to modalArea
		$form.addClass("modalForm").appendTo($container);
		$container.attr("id" , "modal").appendTo($modalArea);
		$modalArea.fadeIn(2000); // empty to ensure no previous content exists
}//end of showModal function


//resetFunction will create page showing displayArea again
let resetFunction=()=>{	
	$modalArea = $("#modalArea");
	$modalArea.fadeOut(2000);
	$displayArea = $("#displayArea");
	$displayArea.show(1000);	
}//end of reset function

let validateModalForm =($userName, $userMobile, $userEmail)=>{	
	//removing previous errors shown
	$(".error").remove();
	
	//if inputBox of name is blank - show error and return
	if($userName.length < 1){
		$("#userName").after('<span class="error">This field is empty.</span>');
		return;
	} else { //if inputBox of mobile is blank or not equal to 10 digits - show error and return
		if($userMobile.length < 1 || $userMobile.length != 10 ){
			$("#userMobile").after('<span class="error">field empty or not 10 digits </span>'  );
			return;
		} else { //validate email using regex
				$filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				
				if ($filter.test($userEmail)) { //if email tested right format - show msg , empty modal and return to main page					
					alert("message sent to the agent");								
					resetFunction();
				} else { //if email tested wrong format - show error and return
					$("#userEmail").after('<span class="error">field empty or input wrong</span>'  );
				} //end of last else
		}//end of second else
	}//end of first else
}//end of validateModalForm function
