//function to get all elements of a class
export const $GEBC=(className)=>{
    let elements=document.querySelectorAll(className);
    return [...elements];
}

//function to create an element and set class
export const $CESC=(element, className)=>{
    let ele=document.createElement(element);
    ele.setAttribute('class', className);
    return ele;
}

//function to create an element
export const $CE=(ele)=>document.createElement(ele);

//function to get an element using query selector
export const $QS=(attr)=>document.querySelector(attr);

//function to append a child with parent
export const $ACP=(parent, child)=>{ parent.appendChild(child) ;}

