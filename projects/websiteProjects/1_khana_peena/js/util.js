export const $GID=(id)=>document.getElementById(id);
export const $CE=(ele)=>document.createElement(ele);
/*
export const $SET_CLASS=(ele, className)=>{
    console.log(ele, className);
   return ele.setAttribute("class", className);
}
*/
export const $setClass=(ele, className)=> ele.setAttribute('class', className);
export const $setId=(ele, idName)=> ele.setAttribute("id", idName);
export const $ACP=(parent, child)=>parent.appendChild(child);