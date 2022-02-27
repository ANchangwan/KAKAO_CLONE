const time = document.querySelector('.time');


function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minu = date.getMinutes();
    const seconds =date.getSeconds();
    if (seconds < 10){
        time.innerHTML = `${hour}:${minu}:0${seconds}`;
    }else{
        time.innerHTML = `${hour}:${minu}:${seconds}`;
    }

    
}

getTime();
setInterval(
    getTime,
    1000
);



