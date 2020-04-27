

function countDown(){
    var now = new Date();
    var eventDate = new Date(2020, 4, 1);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    //document.getElementById("days").innerText = d;
    //document.getElementById("hours").innerText = h;
    //document.getElementById("minutes").innerText = m;
    //document.getElementById("seconds").innerText = s;

    setTimeout(countDown, 1000);
}

countDown();