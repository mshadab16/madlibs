
// countup timer

var startDateTime = new Date(2019, 7, 6, 8, 0, 0); // YYYY (M-1) D H m s (start time and date from separation)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp - startStamp) / 1000);

    var d = Math.floor(diff / (24 * 60 * 60));
    diff = diff - (d * 24 * 60 * 60);
    var h = Math.floor(diff / (60 * 60));
    diff = diff - (h * 60 * 60);
    var m = Math.floor(diff / (60));
    diff = diff - (m * 60);
    var s = diff;

    document.getElementById("time-elapsed").innerHTML = d + " Days, " + h + " Hour" + ((h > 1) ? 's, ' : ', ') + m + " Minute" + ((m > 1) ? 's, ' : ', ') + s + " Second" + ((s > 1) ? 's ' : ' ');
}

timer = setInterval(updateClock, 1000);