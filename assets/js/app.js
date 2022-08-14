'use-scrict';

let hand_second =document.getElementById('seconds-hand');
let hand_minute =document.getElementById('minutes-hand');
let hand_hour =document.getElementById('minutes-hand');

function getTime()
{
    const now = new Date();
    const seconds =now.getSeconds();
    const minutes =now.getMinutes();
    const hours =now.getHours();

    const timeInterval =6;
     hand_second.style.transform='rotate('+ (seconds * timeInterval) +'deg)';
     hand_minute.style.transform='rotate('+ (minutes * timeInterval + seconds /10) +'deg)';
     hand_hour.style.transform='rotate('+ (hours * 30 +minutes /2) +'deg)';

}

setInterval(getTime,100);