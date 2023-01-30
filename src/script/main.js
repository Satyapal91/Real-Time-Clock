setInterval(() => {
    // get date of today
    dtime = new Date();
    // get today hour minute second
    htime = dtime.getHours();
    mtime = dtime.getMinutes();
    stime = dtime.getSeconds();
    // formula for hour, minute, seconds
    hrotation = (30*htime) + (mtime/2);
    mrotation = 6*mtime;
    srotation = 6*stime;

    // call html element by id 
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);