//----------------------Some Utility functions-----------------------
export const $GID=(id)=>document.getElementById(id);   
export const $CE=(ele)=>document.createElement(ele);
export const $CTN=(txt)=>document.createTextNode(txt);
export const $APC=(parent, child)=>parent.appendChild(child);
export const $SET_CLASS=(ele, className)=>{
    ele.setAttribute('class', className);
}
export const setId=(ele, idName)=>ele.setAttribute('id', idName);
export const $CREATE_NAV=(name, links)=>{
    let nav=$CE('nav');
    let title=$CE('h4');
    title.innerText=name;
    $APC(nav, title);
    links.map(link=>{
        let a=$CE('a');
        a.innerText=link;
        $APC(nav, a);
    })
    return nav;
}

//-------------------------------------------------------------------