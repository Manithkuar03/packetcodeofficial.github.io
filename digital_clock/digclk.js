
function showtime(){
var date = new Date();
var h = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var session = "AM";


if(h>12)
{
    h=h-12;
    session="PM";
}


h=(h<10)?("0"+h):h;
min=(min<10)?("0"+min):min;
sec=(sec<10)?("0"+sec):sec;

document.getElementById("Digitalclk").innerHTML = h +":"+min+":"+sec+" "+session;

setTimeout(showtime,1000);
}

showtime();

