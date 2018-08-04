//-----------------------------------------------------------
			//A program to make work NAV slider
//-----------------------------------------------------------

//openNav function - will slide NAV rightwards - to show NAV
let openNav=()=> {	
    document.getElementById("mySidenav").style.width = "250px";	
}

//closeNav function - will slide NAV leftwards - to hide NAV
let closeNav =()=>{
    document.getElementById("mySidenav").style.width = "0";
}

//init function - click event fired - openNav called
let init =() =>{
  let button = document.getElementById("navIconBox");
  button.onclick = openNav;	
}

//after onload of web page - init called 
window.onload = init;