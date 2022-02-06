formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let difference = new Date() - date;
    let sec = Math.round(difference / 1000);
    let min = Math.round(difference / 60000);
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    if (sec < 1) {
        return 'прямо сейчас';
    } else if (sec < 60) {
        return sec + ' сек. назад';
    } else if (min < 60) {
        return min + ' мин. назад';
    } else { return `${day}.${month}.${year} ${hour}:${minutes}`; }
}

alert(formatDate(new Date(new Date - 300)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));