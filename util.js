/*
 * utility functions - some DOM related methods
 * can be used in all js files
*/

//grab an element by ID
export const $GID=(ele)=>document.getElementById(ele);

//create element
export const $CE=(ele)=> document.createElement(ele);

//append child to parent
export const $APC=(parent , child)=>parent.appendChild(child);

//set class of a givent element
export const $SET_CLASS=(ele, className)=> ele.setAttribute('class', className);
