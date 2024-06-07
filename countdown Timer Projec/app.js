const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll(".deadline-format h4");

//set the days to always display to show the system is working...yaani haifiki deadline by adding 10 days more to the present day.
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();



//const futureDate = new Date(2024, 5, 5, 17, 32, 0);
//console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 50, 0);

//extract from futureDate the year, month, day, time, mins and secs individually
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
//console.log(hours);
const mins = futureDate.getMinutes();
//console.log(mins);
const secs = futureDate.getSeconds();

let month = futureDate.getMonth();
month = months[month];

//let day = futureDate.getDay();
//day = weekdays[day];

const weekday = weekdays[futureDate.getDay()]; //another way of getting the day

giveaway.textContent = `the giveaway ends on  ${weekday}, ${month}, ${year}, ${hours}:${mins}pm.`;

//future time in millisecs
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    //console.log(today);
    
    const t = futureTime - today; //remaining time
    //1s = 1000ms
    //1m = 60s
    //1h = 60min
    //1d = 24hr

    //ms in a day
    const oneDay = 24*60*60*1000;
    //console.log(oneDay);
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;
    //calc all values
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay) /oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / oneSecond);
    console.log(seconds);

    //set values array;
    const values = [days, hours, minutes, seconds];

    function format (item){
        if(item < 10){
            return `0${item}`;
        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">we umechelewa. IZZA Joh!!</h4>`
    }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
