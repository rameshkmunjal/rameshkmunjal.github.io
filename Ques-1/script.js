$(document).ready(function() {
	
	// this function will close the open section
	let closeSection=()=> {
		//other non-clicked button class active to be removed
		$('.accordion .accordion-title').removeClass('active');
		//its content slide up
		$('.accordion .accordion-content').slideUp(300);
	}
	
	//an event handler function - triggered while title button clicked 
	$('.accordion-title').click(function(e) {
		// grab button href - will be used to down the slide
		$clickedBtnContentId = $(this).attr('href'); //href and content div id is same

		if($(e.target).is('.active')) { //if clicked button is already open  - close its content div
			closeSection();
		}else { //else - if it is other one - go ahead to open content
			closeSection(); // to close other open content divs

			// add class active to presently clicked button
			$(this).addClass('active');
			
			// Open  the hidden content div
			$('.accordion ' + $clickedBtnContentId ).slideDown(300);
		}
		//to avoid other clickables to respond
		e.preventDefault();
	}); //end of click event function
}); //end of document.ready function
