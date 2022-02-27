const time2 = document.querySelector('.time2');

const date = new Date();
const hour = date.getHours();
const minu = date.getMinutes();


time2.innerHTML = `${hour}:${minu}`

