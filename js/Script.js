

function countUp(){
    var now = new Date();
    var eventDate = new Date(2020, 3, 1);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = currentTime - eventTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    d = "00";
    h = "00";
    m = "00";
    s = "00";

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    //document.getElementById("days").innerText = d;
    //document.getElementById("hours").innerText = h;
    //document.getElementById("minutes").innerText = m;
    //document.getElementById("seconds").innerText = s;

    setTimeout(countUp, 1000);
}

countUp();