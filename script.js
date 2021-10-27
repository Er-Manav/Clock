
setInterval( () => {
  date = new Date();
  hTime = date.getHours();
  mTime = date.getMinutes();
  sTime = date.getSeconds();
  hrotate = 30*hTime + mTime/2;
  mrotate = 6*mTime;
  srotate = 6*sTime;

  hour.style.transform = `rotate(${hrotate}deg)`;
  minute.style.transform = `rotate(${mrotate}deg)`;
  second.style.transform = `rotate(${srotate}deg)`;
},1000);