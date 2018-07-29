
let getId=(element)=>{
	return document.getElementById(element);	
}
let $=(element)=>{
	return document.createElement(element);	
}
let addElementsToDisplayArea=(row, p )=>{	
	let col = $("div");
	col.setAttribute("class" , "col-xs-12 col-sm-6 col-md-3 col-lg-3");	
	let details=$("div");
	details.setAttribute("class", "details");
	details.innerHTML='<h3>'+p.heading+'</h6><p>'+p.details+'</p><p>'+p.technologies+'</p>';
	let btnHolder=$("div");
	btnHolder.setAttribute("class", "btnHolder");
	btnHolder.innerHTML='<button class="btn"><a  href="'+p.fileSrc+'">View Page</a></button>';
	col.appendChild(details);
	col.appendChild(btnHolder);
	row.appendChild(col);		
	//console.log(displayArea);	
}

let init=()=>{
	let displayArea = getId("displayArea");
	let container = $("div");
	container.setAttribute("class" , "container");
	let row = $("div");
	row.setAttribute("class" , "row");
	let arrayLength = project.length;	
	
	for(let i=0; i < arrayLength; i++){
		let p = project[i];	
		console.log(i);
		addElementsToDisplayArea(row, p );		
	}
	container.appendChild(row);
	displayArea.appendChild(container);

}
window.onload=init;