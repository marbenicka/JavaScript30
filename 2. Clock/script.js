const secH = document.querySelector('.secHand');
const minH = document.querySelector('.minHand');
const hourH = document.querySelector('.hourHand');

function setDate() {
  const now = new Date;

  const second = now.getSeconds();
  const secondDegrees = (second/60)*360+90;
  secH.style.transform = `rotate(${secondDegrees}deg)`

  const minute = now.getMinutes();
  const minuteDegrees = (minute/60)*360+90;
  minH.style.transform = `rotate(${minuteDegrees}deg)`

  const hour = now.getHours();
  const hourDegrees = (hour/12)*360+90;
  hourH.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(setDate, 1000)
