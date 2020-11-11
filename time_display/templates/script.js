var date = new Date();

function getCurrentDate() {
    var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    var now_month = month[date.getMonth()];
    var now_date = date.getDate();
    var now_year = date.getFullYear();

    console.log(date);
    console.log(now_month, now_date, now_year);
}
getCurrentDate();

function getCurrentTime() {
    var time = date.getHours();
    var minutes = date.getMinutes();
    var when = 'AM';
    if (time > 12) {
        time = time % 12;
        when = 'PM'
    }
    console.log(time, minutes, when);
}
getCurrentTime();