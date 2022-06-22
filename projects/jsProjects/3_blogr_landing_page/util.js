//common untility function in the entire program 
// to swap classes - removing one and adding another
export const $SC=(ele, classToRemove, classToAdd)=>{
    ele.classList.remove(classToRemove);
    ele.classList.add(classToAdd);
}