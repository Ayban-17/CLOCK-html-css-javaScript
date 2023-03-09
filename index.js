const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDegree = (hour / 12) * 360;
    const minuteDegree = (minute / 60) * 360;
    const secondDegree = (second / 60) * 360;
    hourElement.style.transform = `rotate(${hourDegree}deg)`;
    minuteElement.style.transform = `rotate(${minuteDegree}deg)`;
    secondElement.style.transform = `rotate(${secondDegree}deg)`;
}; 
updateClock();