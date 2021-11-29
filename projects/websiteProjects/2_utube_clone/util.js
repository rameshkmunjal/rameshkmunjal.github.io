//----------------------Some Utility functions-----------------------
export const $GID=(id)=>{
    //console.log(id);
    let ele=document.getElementById(id);
    //console.log(ele);
    return ele;
}
export const $CE=(ele)=>document.createElement(ele);
export const $CTN=(txt)=>document.createTextNode(txt);
export const $APC=(parent, child)=>parent.appendChild(child);
export const $SET_CLASS=(ele, className)=>{
    ele.setAttribute('class', className);
}
export const setId=(ele, idName)=>ele.setAttribute('id', idName);

//-------------------------------------------------------------------