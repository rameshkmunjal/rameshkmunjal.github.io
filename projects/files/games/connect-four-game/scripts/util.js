export const $GID=(ele)=>document.getElementById(ele);
export const $CE=(ele)=>document.createElement(ele);
export const $AC=(parent, child)=>parent.appendChild(child);
export const $SC=(ele, className)=>ele.setAttribute('class', className );
export const $CESC=(ele, className)=>{
    let element=document.createElement(ele);
    element.setAttribute('class', className);
    return element;
}
export const $GE=(selector)=>document.querySelector(selector);
