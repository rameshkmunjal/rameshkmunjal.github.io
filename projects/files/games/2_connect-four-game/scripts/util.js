export const $GID=(ele)=>document.getElementById(ele);
export const $CE=(ele)=>document.createElement(ele);
export const $ACP=(parent, child)=>parent.appendChild(child);
export const $SC=(ele, className)=>ele.setAttribute('class', className );
export const $CESC=(ele, className)=>{
    let element=document.createElement(ele);
    element.setAttribute('class', className);
    return element;
}
export const $QS=(selector)=>document.querySelector(selector);
export const $GEBC=(selector)=>{
    let elements=document.querySelectorAll(selector);
    return [...elements];
};
