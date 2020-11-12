var date = new Date();

function getCurrentDate() {
    var month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ]
    var now_month = month[date.getMonth()];
    var now_date = date.getDate();
    var now_year = date.getFullYear();

    var actualdate = now_month + ' ' +
        now_date + ', ' +
        now_year

    console.log(actualdate);
    console.log(now_month, now_date, now_year);
    return actualdate;
}

function getCurrentTime() {
    var time = date.getHours();
    var minutes = date.getMinutes();
    var when = 'AM';
    if (time > 12) {
        time = time % 12;
        when = 'PM'
    }
    console.log(time, minutes, when);
    var actualtime = time + ':' + minutes + ' ' + when;
    return actualtime;
}

function printDate() {
    var string1 = JSON.stringify(getCurrentDate());
    var string2 = JSON.stringify(getCurrentTime());

    var holder = document.getElementById('fecha');
    holder.textContent = string1;
    var hold = document.getElementById('tiempo');
    hold.textContent = string2;
}