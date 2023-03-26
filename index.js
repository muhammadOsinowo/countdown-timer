const daysEl = document.getElementById('days');
const  hoursEl = document.getElementById('hours');
const  minsEL = document.getElementById('minutes');
const  secondEl = document.getElementById('seconds');

//fix a future date
const examDate = '11 Jun 2023';

function countdown(){
 const ourExamDate = new Date(examDate);
 const currentDate = new Date();

 const totalSeconds = (ourExamDate - currentDate) / 1000;

const days = Math.floor(totalSeconds/ 3600/ 24);
const hours = Math.floor(totalSeconds/3600) % 24;
const mins = Math.floor(totalSeconds/ 60) % 60;
const seconds =  Math.floor(totalSeconds % 60);


daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minsEL.innerHTML = formatTime(mins);
secondEl.innerHTML = formatTime(seconds);

function formatTime (time){
    return time < 10 ? `0${time}` : time;
}
}

//initial call
countdown();
setInterval (countdown, 1000);
