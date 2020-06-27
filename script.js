let today = new Date();
let day = today.getDate();
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let bango = daylist[day];



let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

const prepand = (hour >= 12)?"PM ":" AM";
hour = (hour >= 12)? hour - 12: hour;

if(hour === 0 && prepand ===' PM ') {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM ";
  }
}
if (hour === 0 && prepand === ' AM '){
  if (minutes === 0 & seconds === 0) {
    hour = 12;
    prepand = " Midnight";
  }else {
    hour = 12;
    prepand = " AM ";
  }
}

const todayHTML = document.querySelector("#todayHTML");
const timeHTML = document.querySelector("#timeHTML");

todayHTML.innerHTML = `Today is ${bango}.`
timeHTML.innerHTML = `The time is ${hour} ${prepand} ${minutes} ${seconds}`;
