/* importing dependency modules */
import {$GID, $CE, $APC, $setClass} from './util.js';
import H from './helper.js';

/*
    * decrements monthIndex when left arrow clicked
    * checks min value if needed resets at max and year is decremented
    * calls showCalendar with reset values of monthIndex and year
*/
let decrementMonth=(monthIndex, year)=>{
    monthIndex-=1;
    if(monthIndex < 0){
        monthIndex=11;
        year-=1;
    };

    showCalendar(monthIndex, year);
}
/*
    * increments monthIndex when right arrow clicked
    * checks max value if needed resets at zero and year is incremented
    * calls showCalendar with reset values of monthIndex and year
*/
let incrementMonth=(monthIndex, year)=>{
    monthIndex+=1;
    if(monthIndex > 11){
        monthIndex=0;
        year+=1;
    }
    showCalendar(monthIndex, year);
}
/*
    * params 
        - arr : its length decides how many table cells required and values are cells values
        - rows: its value decides how many rows required in the table
        - i   : will be passed to getTableHeader
    * This function is creating calendar table and returning to calling function
    * Helper function getTableHeader returns a table with header but without body
    * Helper function getWeekDays  returns an array of weekdays i.e. SUN-SAT
    * creates body of table
    * runs two loops - outer loop creates rows as per rows param
    * inner loop creates table cells and puts dates in these cells
    * function returns table after complete of task
*/

function createCalendarTable(arr, i, rows){
    let table=H.getTableHeader(i);    
    let daysArr=H.getWeekDays();    
    
    let num=0;
    let tbody=$CE('tbody');

    for(let k=0; k<rows ; k++){
        let tr=$CE('tr');
        for(let l=0; l<daysArr.length; l++){
            let td=$CE('td');            
            td.innerText=arr[num];
            $APC(tr, td);
            num++;
        }
        $APC(tbody, tr);
    }    
    $APC(table, tbody);
    return table;
 }
 /*
    *params - main (div element), index (month index), year
    *This function -
    * creates main element , where calender will be housed  
    * It increments month index by one and calls getDaysInMonth to get days in that month
    * creates array of dates in that month
    * finds out week day of first date 
    * as per weekday, index positions in the start of array to be filled with null 
    * if number of array elements is not divisible by 7 then ending positions to be filled  
    *  to make it completely divisible by seven.
    * Now we have array, number of rows to create a table of dates
    * index is sent as argument only to get background color in table header
*/ 
 let getMain=(index, year)=>{
    let main=$CE('div');
    let monthNumber=index+1;
    let currentMonthDays= H.getDaysInMonth(year, monthNumber);    
    
    let arr=H.createArrayOfDates(currentMonthDays);      
    let weekDayOfFirstDate=H.getWeekDayOfFirstDate(index, year);    
    arr=H.fillStartingVacantBoxesWithNull(weekDayOfFirstDate, arr); 
    let rows= arr.length%7 === 0 ? arr.length/7 : Math.floor(arr.length/7)+1;        
    arr=H.fillEndingVacantBoxesWithNull(arr, rows);         
    let table=createCalendarTable(arr, index, rows);

    $APC(main, table);
    return main;
 }
 /*
    *This function will -
        *create an div element navbar , sets its class navbar , 
        * get a bgcolor for navbar
        * create left and right spans and add event listeners to them
        * get month name using month index
        * and this month name to title
        * append left span , title and right span to navbar
        * return navbar to calling function
    *     
*/
let createNavbar=(i , y)=>{    
    let navbar=$CE('div');   
    $setClass(navbar, 'navbar');
    navbar.style.backgroundColor=H.getBgColor(i);

    let leftSpan=$CE('span');
    leftSpan.innerHTML='<i class="fas fa-arrow-left"></i>';
    leftSpan.addEventListener('click', ()=> decrementMonth(i , y));

    let rightSpan=$CE('span');
    rightSpan.innerHTML='<i class="fas fa-arrow-right"></i>';
    rightSpan.addEventListener('click', ()=> incrementMonth(i , y));

    let monthName=H.getMonthName(i);
    let title=$CE('span');    
    $setClass(title, 'title');
    title.innerHTML=`${monthName}  ${y}`;

    $APC(navbar, leftSpan);
    $APC(navbar, title);
    $APC(navbar, rightSpan);
    
    return navbar;
}


/* params : index(month index position) and year
 * This function will -
    * grab container by id
    * vacate it if it has earlier content
    * create an div element navbar and append it with container
    * create an div element main which will house calendar
    * append main div with parent container
    * Hence the calendar is complete and showing
*/
let showCalendar=(index, year)=>{ 
    let container=$GID('container');
    container.innerHTML="";
    let navbar=createNavbar(index, year); 
     
    let main=getMain(index, year);
    
    $APC(container, navbar);
    $APC(container, main);
}

//init function : to initiate the program
//Will create date object : to get month index and year

let init=()=>{    
    const dateObj=new Date();
    let year=dateObj.getFullYear();
    let monthIndex=dateObj.getMonth();    
    showCalendar(monthIndex, year);    
}

/* calling init will start the program */

init();

