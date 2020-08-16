
let populateDivWithData=(d, a)=>{
	for(let i=0; i<a.length; i++){
		let div =document.createElement('div');
		div.setAttribute('class', 'box');
		let h3=document.createElement('h3');
		let h3Txt=document.createTextNode(a[i].heading);
		h3.append(h3Txt);
		let p=document.createElement('p');
		let pTxt=document.createTextNode(a[i].details);
		p.append(pTxt);
		let aTag=document.createElement('a');
		let aTxt=document.createTextNode('View Page');
		aTag.setAttribute('href', a[i].fileSrc);
		aTag.setAttribute('class', 'link');
		aTag.append(aTxt);
		p.append(aTag);
		div.append(h3);
		div.append(p);
		d.append(div);		
	}
	return d;
}

let getTechSection=(name)=>{
	let div = document.createElement('div');
	div.setAttribute('id', name);	
	let a=project.filter((b)=>{
		return b.type===name;
	})
	console.log(a);
	let h2=document.createElement('h2');
	let h2Txt=document.createTextNode(name);
	h2.append(h2Txt);
	div.append(h2);
	div=populateDivWithData(div, a);	
	return div;
}
let getDistinctValues=(arr)=>{
	let newArr=[];
	for(let i=0; i<arr.length; i++){
		if(newArr.indexOf(arr[i]) === -1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

let sortProjectHeadings=(items)=>{
	let arr=[];
	for(let item of items){
		arr.push(item.type);
	}
	return arr;
}

//controller function 
let init=()=>{
	console.log(project);
	let displayArea=document.getElementById('displayArea');
	let projectArr=sortProjectHeadings(project);
	console.log(projectArr);
	projectArr=getDistinctValues(projectArr);
	console.log(projectArr);
	for(let i=0; i < projectArr.length; i++){
		console.log(i);
		let section=getTechSection(projectArr[i]);
		displayArea.append(section);
	}
	console.log(displayArea);		
}


//as and when document loads - event handler
window.onload=init;

/*
	
	*/