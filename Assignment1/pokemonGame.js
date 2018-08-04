//------------------------------------Function to show details when input is name of pokemon --------------------
function showDetails(pName){
	//---creating array and assigning  pokemon array as value
	var pokemonArray = game.pokemon;
	//creating container var to show output data
	var container = getId("container");
	//emptying container if it has any previous data 
	container.innerHTML =" ";
	//starting a loop through pokemon array 
	var count = 0;
	var totalRecords = pokemonArray.length;
	
	for(var i in pokemonArray) {			
		//pokemon name matches with input value
		if(pokemonArray[i].name == pName){ 
			//create table to hold data and pic			
			var tbl = document.createElement('table');
			var tBody = document.createElement('tbody');			
			
			//create row inside table 
			var row = document.createElement('tr');
			//-------------------------------------------------------------------------------	
			//create  and adding  cell_3 with  image inside it
			var cell_3 = document.createElement('td');
			cell_3.setAttribute("id"  , "cell_3"  );
			var image = document.createElement("IMG");
			image.setAttribute("src", pokemonArray[i].img);
			image.setAttribute("width", "120");
			image.setAttribute("height", "120");
			image.setAttribute("alt", "Pokemon Image");
			//adding image to cell and cell to row
			cell_3.appendChild(image);			
			row.appendChild(cell_3);
			
			//-------------------------------------------------------------------------------
			//create  and adding  cell_1 with  data inside it
			var cell_1 = document.createElement('td');
			cell_1.setAttribute("id"  , "cell_1"  );
			var msg_1 = "<b>ID : </b>" + pokemonArray[i].id  + "<hr><b> Name : </b>"+ pokemonArray[i].name
							+ "<hr><b> Height :  </b>" + pokemonArray[i].height + "<hr><b> Weight :  </b>"+ pokemonArray[i].weight;
					
			cell_1.innerHTML = msg_1;
			row.appendChild(cell_1);
			
			//------------------------------------------------------------------------------------
			//create  cell_2 and msg2 , add msg2 with  data inside it to cell_2
			var msg_2 ="<b>Weaknesses : </b>";
			
			var cell_2 = document.createElement('td');
			cell_2.setAttribute("id"  , "cell_2"  );
			var vknessArr = pokemonArray[i].weaknesses;
			var vknessLength= pokemonArray[i].weaknesses.length;
			for(j in vknessArr) {
				if( j < vknessArr.length-1){
					msg_2 +=  vknessArr[j] + " , " ;
				} else {
					msg_2 +=  vknessArr[j] + "  " ;
				}
			}
			msg_2 += '<hr>' + "<b>Type :  </b>";
			
			//creating array of pokemon type
			var typeArr = pokemonArray[i].type;
			
			//loop through type array and adding its value to msg2 var
			for(k in typeArr) {
				msg_2 +=  typeArr[k] + "  " ;
			}
			
			msg_2 += '<hr>'+ "<b>Next Evolution :  </b>";
			//creating array of pokemon next evolution values
			var evoArr = pokemonArray[i].next_evolution;
			//loop through next evolution array and adding its values to msg2 var
			for(l in evoArr) {
				if( l < evoArr.length-1){
					msg_2 +=  evoArr[l].name + "  ,  " ;
				} else {
					msg_2 +=  evoArr[l].name + "  " ;
				}
			}
			
			msg_2 += '<hr>' + "<b>Egg :  </b>" + pokemonArray[i].egg + "<b>  Average Spawns :  </b>" + pokemonArray[i].avg_spawns;
			cell_2.innerHTML = msg_2;
			row.appendChild(cell_2);
		
			//adding row to the table 			
			tBody.appendChild(row);	
			tbl.appendChild(tBody);			
			
			//adding table to the container 			
			container.appendChild(tbl);
		}// end of if conditional
		else{
			count ++;
			if(count == totalRecords){
				container.innerHTML =  "<p class='errorMessage'>Input value does not match our records. Try again.</p>";
			}
		} //end of else
	}  // end of outermost for in loop
	getId("pokemonName").value = "";
} //end of showDetails function


//--------------------Function defined when argument in function call is next evolution name ---------------------------------- 
function showMatchInNxtEvo(nxt){
	console.log("function showMatchInNxtEvo");
	//array variable created to hold array - pokemon
	var pokemonArray = game.pokemon
	//capturing id of container div element - created to house output data
	var container = getId("container");	
	//---------emptying container space supposing it may have prior output there when clicked second/thrice
	container.innerHTML =" ";
	//starting loop searching values in  main array i.e. pokemonArray
	var count = 0;	
	
	for(var i in pokemonArray) {
		//next evolution array stored in a variable
		var evoArr = pokemonArray[i].next_evolution;
		
		if(evoArr != undefined ) {			
			//loop through evolution array
			for(var j in evoArr){
				//testing if input value matches with evolution array item	
				if( evoArr[j].name == nxt){
					count++;					
					//create table to hold output data and pic				
					var tbl = document.createElement('table');
					var tBody = document.createElement('tbody');
				
					//create row and cells to be shown inside table 
					var row = document.createElement('tr');				
					var cell_3 = document.createElement('td');
					cell_3.setAttribute("id"  , "cell_3"  );
					//creating image element and its attributes
					var image = document.createElement("IMG");
					image.setAttribute("src", pokemonArray[i].img);
					image.setAttribute("width", "120");
					image.setAttribute("height", "120");
					image.setAttribute("alt", "Pokemon Image");
					//adding image to cell and cell to row
					cell_3.appendChild(image);			
					row.appendChild(cell_3);
				
					//create  and adding  cell_1 with  data inside it -wrapped in msg_1 variable
					var cell_1 = document.createElement('td');
					cell_1.setAttribute("id"  , "cell_1"  );
					var msg_1 = "<b>ID : </b>" + pokemonArray[i].id  + "<hr><b> Name : </b>"+ pokemonArray[i].name
									+ "<hr><b> Height :  </b>" + pokemonArray[i].height + "<hr><b> Weight :  </b>"+ pokemonArray[i].weight;					
					cell_1.innerHTML = msg_1;
					row.appendChild(cell_1);
					
				
					//create  and adding  cell_2 with  data inside it - wrapped in msg_2 variable
					var msg_2 ="<b>Weaknesses : </b>";			
					var cell_2 = document.createElement('td');
					cell_2.setAttribute("id"  , "cell_2"  );
					var vknessArr = pokemonArray[i].weaknesses;
					var vknessLength= pokemonArray[i].weaknesses.length;
					for(j in vknessArr){
						if( j < vknessArr.length-1){
							msg_2 +=  vknessArr[j] + " , " ;
						} else {
							msg_2 +=  vknessArr[j] + "  " ;
						}
					}
					msg_2 += '<hr>' + "<b>Type :  </b>";
					
					//creating array of type and adding its values in msg_2
					var typeArr = pokemonArray[i].type;				
					for(k in typeArr){
						msg_2 +=  typeArr[k] + "  " ;
					}			
					
					msg_2 += '<hr>' + "<b>Candy :  </b>" + pokemonArray[i].candy + "<b>  Candy Count :  </b>" + pokemonArray[i].candy_count ;				
					msg_2 += '<hr>' + "<b>Next Evolution :  </b> " + nxt;
					cell_2.innerHTML = msg_2;
					row.appendChild(cell_2);
				
					//adding row to the table body and table body to table			
					tBody.appendChild(row);	
					tbl.appendChild(tBody);				
					
					//adding table to the container 			
					container.appendChild(tbl);
				}// end of inner if conditional
			} //end of inner for in loop
		}  // end of outer if condition			
	}// end of outermost for in loop
	// now a test if loop found any match for next evolution or not
	
	if( count == 0){
		container.innerHTML =  "<p class='errorMessage'>No such next evolution exists in  our records. Try again.</p>";
	}
	//emptying input box
	getId("pokemonName").value = "";
}//end of function showMatchInNxtEvo


//--------------------Function defined when argument in function call is Weakness ---------------------------------- 
function showAsPerVkness(vkness){
	//array variable created to hold array - pokemon 
	var pokemonArray = game.pokemon
	//capturing id of container div element - created to house output data
	var container = getId("container");
	//---------emptying container space supposing it may have prior output there when clicked second/thrice
	container.innerHTML =" ";
	//starting loop searching values in  main array i.e. pokemonArray
	var count = 0;
	for(var i in pokemonArray){
		//weaknesses array stored in a variable
		var weakness = pokemonArray[i].weaknesses;			
		//looping through weakness array 
		var totalRecords = pokemonArray.length;
		for( var j in weakness){
			// testing if input weakness exists in weakness array
			if( weakness[j] == vkness ){
				count++;
				//creating table to show output data
				var tbl = document.createElement('table');
				var tBody = document.createElement('tbody');

				//creating row  and cells inside the table
				var row = document.createElement('tr');
				var cell_3 = document.createElement('td');
				cell_3.setAttribute("id"  , "cell_3"  );

				//creating image element and setting its attributes
				var image = document.createElement('IMG');
				image.setAttribute('src', pokemonArray[i].img);
				image.setAttribute('height', "120");
				image.setAttribute('width', "120");

				//adding image to cell and then cell to row
				cell_3.appendChild(image);
				row.appendChild(cell_3);
				
				// same as above and pokemon data wrapped in a msg variable
				var cell_1 = document.createElement('td');						
				cell_1.setAttribute("id"  , "cell_1"  );
				var msg_1 = "<b>ID : </b>" + pokemonArray[i].id  + "<hr><b> Name : </b>"+ pokemonArray[i].name
					+ "<hr><b> Height :  </b>" + pokemonArray[i].height + "<hr><b> Weight :  </b>"+ pokemonArray[i].weight;					
				cell_1.innerHTML = msg_1;
				row.appendChild(cell_1);
								
				// same as above and pokemon data wrapped in a msg variable
				var cell_2 = document.createElement('td');
				cell_2.setAttribute("id"  , "cell_2"  );
				var msg_2 =pokemonArray[i].name + "  has a weakness for  : <b>  "+ vkness +" </b>";
				msg_2 += '<hr>' + "<b>Candy :  </b>" + pokemonArray[i].candy + "<b>  Candy Count :  </b>" + pokemonArray[i].candy_count ;				
				msg_2 += '<hr>' + "<b>Eggs :  </b> " + pokemonArray[i].egg + "  <b>  Spawn Time:  </b>  " + pokemonArray[i].spawn_time ;						
				cell_2.innerHTML = msg_2;
				row.appendChild(cell_2);
					
				// adding row to table body  and table body to table 
				tBody.appendChild(row);
				tbl.appendChild(tBody);
				
				container.appendChild(tbl);
			} //end of weakness test - if block
			else {
					console.log(count);
					if(i == (pokemonArray.length-1) && count == 0 ){												
						container.innerHTML =  "<p class='errorMessage'>No such weakness exists in  our records. Try again.</p>";
					}
			} //end of else
		} //end of outermost inner for loop		
	}//end of outermost for loop
	//emptying input box
	getId("pokemonName").value = "";
} // end of function showAsPerVkness

//-----------------------------------------------------------------------------------------------------------

// function defined  to use when input is a pokemon name
function captureInput(){	
	var pokeName = getId("pokemonName").value;	
	showDetails(pokeName);	
}
// function defined  to use when input is a next evolution name
function captureNxtEvo(){	
	var matchNxt  = getId("pokemonName").value;	
	showMatchInNxtEvo(matchNxt);
}
// function defined  to use when input is a weakness
function captureVkness(){	
	var vkness  = getId("pokemonName").value;	
	showAsPerVkness(vkness);
}

// function used to house onclick events - via 3 buttons 
function init(){	
	 getId("submit").onclick = captureInput;
	 getId("nxtEvo").onclick = captureNxtEvo;
	 getId("vknessBtn").onclick = captureVkness;	 
}


//load event fires when document loaded - in result init function called
window.onload = init;

//--------------------A utility function ------------------------------
// function used to capture id of an element - called at various points of   programme
function getId(id){
	return document.getElementById(id);
}
