let calculateInterest=()=>{
    let table=document.createElement('table');
    let thead=document.createElement('thead');
    let tbody=document.createElement('tbody');
    let tr=document.createElement('tr');
    let th1=document.createElement('th');
    let th2Txt=document.createTextNode('Period/Rate');
    th1.append(th2Txt);
    tr.append(th1);

    for(let k=3; k<=36; k=k+3){ 
        let th=document.createElement('th');
        let thTxt=document.createTextNode(k);
        th.append(thTxt);
        tr.append(th);
        thead.append(tr);
    }
    table.append(thead);

    for(let i=4; i<=8; i=i+0.25){ 
        let amt=(1+i/400).toFixed(4);        
        let mv=1;
        let tr2=document.createElement('tr');
        let td1=document.createElement('td');
        let td1Txt=document.createTextNode(i.toFixed(2));
        td1.append(td1Txt);
        tr2.append(td1);

        for(let j=3; j<=36; j=j+3){
            let td=document.createElement('td');           
            
            mv=(mv*amt).toFixed(4);
            
            console.log(mv);
            let tdTxt=document.createTextNode(mv);
            td.append(tdTxt);
            tr2.append(td);             
        } 
        tbody.append(tr2);
        
    }
    table.append(tbody);
        return table;
}

let init=()=>{
    let container=document.getElementById("container");
    console.log("JS file linked");
    let table=calculateInterest();
    container.append(table);
}

window.onload=init;