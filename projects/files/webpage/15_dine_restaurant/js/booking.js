const months=['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const hours=["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
const minutes=["00", "15", "30", "45"];
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

const selectDay = document.getElementById('select-day');
const selectYear = document.getElementById('select-year');
const selectMonth = document.getElementById('select-month');
const selectHour = document.getElementById('select-hour');
const selectMinute = document.getElementById('select-minute');

const guestNumber = document.getElementById('guest-number');

let yearInputValue=undefined;
let monthInputValue=undefined;
let dayInputValue=undefined;
let hourInputValue=undefined;
let minuteInputValue=undefined;

let currentYear=new Date().getFullYear();


createYearOptions();
createMonthOptions();
createHourOptions();
createMinuteOptions();

form.addEventListener('submit', e => {
    e.preventDefault();    
    validateInputs();
});


const validateInputs = () => {
    const usernameValue = username.value.trim();//username value
    const emailValue = email.value.trim();//email value 

    /* reservation date related values */        
    let dateInputDiv=document.getElementById('date-input-div');
    let timeInputDiv=document.getElementById('time-input-div');
    console.log(dayInputValue, monthInputValue, yearInputValue);
    let reservationDate=new Date(yearInputValue, monthInputValue , dayInputValue);
    console.log(reservationDate);         
    reservationDate=Math.floor(reservationDate.getTime()/1000);  
    console.log(reservationDate);  
    let acceptableDate=Math.floor(new Date().getTime()/1000+(60*60*24));
    /* guestNumber related value */
    const guestNumberValue=parseInt(guestNumber.value.trim());
    

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(reservationDate >= acceptableDate){
        setSuccess(dateInputDiv)
    } else {
        setError(dateInputDiv, "Date is invalid");
    }
    
    if(hourInputValue === '') {
        setError(timeInputDiv, 'Guest Number is required');
    } else if(isNaN(hourInputValue)){
        setError(timeInputDiv, "invalid input");   
    }else {
        setSuccess(timeInputDiv);
    }

    if(minuteInputValue === '') {
        setError(timeInputDiv, 'Guest Number is required');
    } else if(isNaN(minuteInputValue)){
        setError(timeInputDiv, "invalid input");   
    }else {
        setSuccess(timeInputDiv);
    }

    if(guestNumberValue === '') {
        setError(guestNumber, 'Guest Number is required');
    } else if(isNaN(guestNumberValue)){
        setError(guestNumber, "invalid input");   
    }
    else {
        setSuccess(guestNumber);
    }

    console.log('userName : ', usernameValue, '  email : ', emailValue, ' reservation date : ', reservationDate);
    console.log('time', hourInputValue, ':', minuteInputValue);
    console.log('number of guests : ', guestNumberValue);
};

const setError = (element, message) => {    
    let inputControl= element.parentElement;    
    const messageDisplay = inputControl.querySelector('small');    
    messageDisplay.classList.add('error');    
    messageDisplay.innerText = message;      
}

const setSuccess = element => {
    let inputControl= element.parentElement;    
    const messageDisplay = inputControl.querySelector('small');
    messageDisplay.innerText = '';
    inputControl.classList.add('success');        
};



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



/* select option event handler */
function selectMonthHandler(option){
    console.log(option.target.value);
    monthInputValue=parseInt(option.target.value.trim());
    let days=undefined;
    let flag=monthInputValue;
    if(flag===0 || flag===2 || flag===4 || flag===6 || flag===7 || flag===9 || flag===11 ){ days=31;}
         else if(flag===3 || flag===5 || flag===8 || flag===10 ){ days=30;}
            else if(flag=1){days=28}
                else{ return}
    
    createDayOptions(days);
}

function selectYearHandler(option){
    yearInputValue=parseInt(option.target.value.trim());    
}

function selectDayHandler(option){
    dayInputValue=parseInt(option.target.value.trim());
}

function selectHourHandler(option){
    hourInputValue=parseInt(option.target.value.trim());
}

function selectMinuteHandler(option){
    minuteInputValue=parseInt(option.target.value.trim());
}
/* functions - creating select options - DOM manipulation */

function createYearOptions(){
    for(let i=0; i< 2; i++){
        let year=currentYear + i;        
        let option=document.createElement('option');
        option.innerText=year;
        option.value=year;        
        selectYear.appendChild(option);        
        selectYear.addEventListener('change',(option)=>{selectYearHandler(option) } );
    }
} 

function createMonthOptions(){
    for(let i=0; i<months.length; i++){        
        let month=months[i];        
        let option=document.createElement('option');
        option.innerText=month;
        option.value=i;        
        selectMonth.appendChild(option);
        selectMonth.addEventListener('change',(option)=>{selectMonthHandler(option) } );
    }   
}


function createDayOptions(days){
    selectDay.addEventListener('change', selectDayHandler);
    for(let i=1; i<=days; i++){        
        let option=document.createElement('option');
        option.innerText=i;
        option.value=i;
        selectDay.appendChild(option);
    }   
}



function createHourOptions(){
    selectHour.addEventListener('change', selectHourHandler);
    for(let i=0; i<hours.length; i++){
        let hour=hours[i];
        let option=document.createElement('option');
        option.innerText=hour;
        option.value=hour;
        selectHour.appendChild(option);
    }   
}

function createMinuteOptions(){
    selectMinute.addEventListener('change', selectMinuteHandler);
    for(let i=0; i<minutes.length; i++){
        let minute=minutes[i];
        let option=document.createElement('option');
        option.innerText=minute;
        option.value=minute;
        selectMinute.appendChild(option);
    }   
}