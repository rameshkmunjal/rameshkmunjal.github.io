/*
 * helper functions - supporting the main functions in this app
 * 
*/
/* importing module dependency */
import {$CE, $APC} from './util.js';

// to get number of days in a month - args - year and month
export const getDaysInMonth=(y , m)=> new Date(y, m , 0).getDate();

// to send array containing names of week days
const getWeekDays=()=>["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// to send name of month desired - args - index position of month in arr
const getMonthName=(i)=>{
    const MONTHS=["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return MONTHS[i];
}

// to get week day of first date of month - args - month name and year
const getWeekDayOfFirstDate=(index, year)=>{
    let monthName=getMonthName(index);  
    return new Date(`${monthName} 1 , ${year}`).getDay();
}

//function will return a blank table(without table body) 
// but with table headers having weekdays names
const  getTableHeader=(i)=>{
    const daysArr=getWeekDays();
    let table=$CE('table');
    let thead=$CE('thead');
    let tr=$CE('tr');
    for(let j=0; j<7 ; j++){
        let th=$CE('th');
        th.innerText=daysArr[j].toUpperCase();
        th.style.backgroundColor=getBgColor(i);
        $APC(tr, th);
    }
    $APC(thead, tr);
    $APC(table, thead);
    return table;
}

//function to create array of dates of month
//args : md - month days
const  createArrayOfDates=(md)=>{
    let arr=[];
    for(let i=1; i<=md; i++){
        arr.push(i);
    }
    return arr;
}


//calendar table boxed before first date will have null values 
//hence arr is housed with null values in beginning indexes 
//args : limit - number of boxes with null values
//       arr - array of dates of month
const fillStartingVacantBoxesWithNull=(limit, arr)=>{
    //console.log(limit);
   // console.log(arr);
    let count=0;
    while(count < limit){
        arr.unshift(null);
        count++;        
    }
    return arr;
}

//calendar table boxed after last date will have null values  
//hence arr is housed with null values in ending indexes 
//args : rows - number of rows to allowed to appear
//       arr - array of dates of month
const fillEndingVacantBoxesWithNull=(arr, rows)=>{
    let totalItems=rows*7;
    let n=arr.length;
    while(n < totalItems){
        arr.push(null);
        n++;
    }
    return arr;
}
//params : i (index position)
//This function returns element at this index position i.e. i
const getBgColor=(i)=>{
    const colors=["#A0001C", "#2BB673", "#667E64", "#136478", "#F6A179", "#00A0CC", 
                   "#998502", "#7E6C6C", "#9C7C0B", "#25A18E", "#DA5552", "#9AB340"];
    return colors[i];
}


//exporting all above functions as properties of object.

export default{
    getDaysInMonth, 
    getMonthName, 
    createArrayOfDates, 
    getWeekDayOfFirstDate, 
    fillStartingVacantBoxesWithNull,
    fillEndingVacantBoxesWithNull,
    getTableHeader, 
    getWeekDays,
    getBgColor
}