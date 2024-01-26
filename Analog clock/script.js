const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const audio = new Audio("tiktik.mp3");
function clock (){
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
    // element.style.transform = "rotate(30deg)";
    hour.style.transform =`rotate(${hh*30}deg)`;
    minute.style.transform = `rotate(${mm*6}deg)`;
    second.style.transform = `rotate(${ss*6}deg)`;
    audio.playbackRate = 1;
    audio.addEventListener('canplaythrough', function() {
        audio.play();
        audio.preload = 'auto'; 
    });
    audio.play();


}

setInterval(clock,100);