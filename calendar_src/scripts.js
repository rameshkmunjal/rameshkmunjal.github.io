
let getDaysInMonth=(m, y)=>{
    m++;
    return new Date(y, m, 0).getDate();
}

let getCalendarTable=(month, year)=>{     
    let arr=create35days(month, year);
    let a=createFiveWeeks(arr);    
    return a;
}

let getMonthNames=()=>{
    let monthArr=["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return monthArr;
}

let getWeekdayNames=()=>{
    let weekArr=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return weekArr;
}

let getCalendar=()=>{
    let month=new Date().getMonth() ;
    let year=new Date().getFullYear() ;
    console.log(month+": "+year);
    let calendarDiv=document.createElement('div');

    let weekArr= getWeekdayNames();
    let monthArr=getMonthNames();
    console.log(weekArr);  
    let calendar= getCalendarTable(month, year) ;
    let table=document.createElement('table'); 
    let thead=getHeadingRow(weekArr);
    let tbody=getTableBody(calendar);
    table.append(thead);
    table.append(tbody);
    //console.log(table);
    //console.log(weekArr);
    //console.log(mon)
    //console.log(monthArr[month]);
    let monthName=monthArr[month];
    console.log(monthName);
    let h2=document.createElement('h2');
    h2.setAttribute("class", "heading")
    let h2Txt=document.createTextNode(monthName+"  "+year)
    h2.append(h2Txt);
    calendarDiv.append(h2);
    calendarDiv.append(table);
    return calendarDiv;
}

let getTableBody=(calendar)=>{
    let tbody=document.createElement('tbody');
    for(let i=0; i<calendar.length; i++){
        let weekArr=calendar[i];
        let tr=document.createElement('tr');
        for(let j=0; j<weekArr.length; j++){
            let td=document.createElement('td');
            let cellTxt=document.createTextNode(weekArr[j]);
            if(j==0){
                td.setAttribute('class', 'holiday');
            }
            td.append(cellTxt);
            tr.append(td);
        }
        tbody.append(tr);
    }
    return tbody;
}

let getHeadingRow=(weekDays)=>{
    let thead=document.createElement('thead');
    let tr=document.createElement('tr');
    for(let i=0; i<weekDays.length; i++){
        let th=document.createElement('th');
        let textNode=document.createTextNode(weekDays[i]);
        if(i==0){
            th.setAttribute('class', 'holiday');
        }
        th.append(textNode);
        tr.append(th);
    } 
    thead.append(tr);
    return thead;   
}




let makeArray=(d)=>{
    let arr=[];
    for(let i=1; i<=d; i++){
        arr.push(i);
    }
    return arr;
}

let create35days=(month, year)=>{
    
    let days=getDaysInMonth(month, year);
    console.log(days);
    let today=new Date(year, month, 1).getDay();
    console.log(today);

    let c=makeArray(days);
    
    for(let i=0; i<today; i++){
        c.unshift("");
    }
    console.log(c);
    if(c.length ===36){
        c.unshift();
        let temp=c.pop();
        console.log(temp);
        c.unshift(temp);        
    } 
    console.log(c);
    if(c.length ===37){
        c.shift();
        c.shift();
        let t1=c.pop();
        let t2=c.pop();
        c.unshift(t1); 
        c.unshift(t2);        
    }   
    console.log(c);
    return c;
}

let createFiveWeeks=(arr)=>{
    let newArr=[];
    let count=0;
    for (let j=0; j<5; j++){
        let temp=[];
        for(let i=1; i<=7; i++){
            temp.push(arr[count]);
            count++;
        }
        newArr.push(temp);
    }
    console.log(newArr);
    return newArr;
}

let addPosterDiv=()=>{
    let posterDiv=document.createElement('div');
    posterDiv.setAttribute('id', 'posterDiv');
    let poster=document.createElement('img');
    poster.setAttribute('poster', 'poster');
    poster.setAttribute('src', 'tiger.jpeg');
    poster.setAttribute('width', '400px');
    poster.setAttribute('height', '300px');
    
    posterDiv.append(poster);
    return posterDiv;
}

let init=()=>{
    let container=document.getElementById("container");
    let posterDiv=addPosterDiv();    
    container.append(posterDiv);    
    let calendar=getCalendar();
    container.append(calendar);
}

window.onload=init;