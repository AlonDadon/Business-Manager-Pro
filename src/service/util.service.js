export const utilService = {
    delay,
    getRandomInt,
    makeId,
    getDateFormat,
    getDateString,
    arrayToObject,
    getCelsius,
    setDayStr
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

 function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
function getDateFormat(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currDate = new Date(date)
    const year = currDate.getFullYear();
    const month = months[currDate.getMonth() - 1]
    let day = currDate.getDay();
    // let day = new Date(year, month, 0).getDate();
    if (day === 0) day = 1
    let dateStr = (day < 10) ? `0${day}` : `${day}`
    dateStr += ` ${month}, ${year}`
    return dateStr
}
function getDateString(date) {
    return new Date(date).toLocaleDateString('en-Us', { day: 'numeric', month: 'long', year: 'numeric', })
}
function getCelsius(fahrenheit) {
    return ((fahrenheit - 32) / 1.8).toFixed(1)
}

function arrayToObject(arr, keyName) {
    const obj = arr.reduce((accumulator, currentValue, idx) => {
        accumulator[keyName + idx] = currentValue;
        return accumulator;
    }, {});
    return obj
}
function setDayStr(num) {
   const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekDays[+num]
}