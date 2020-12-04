function getFormattedDate(dateObject) {
    let options = {
        weekday: 'long'
    }
    let my_data = {
        data: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        weekday: dateObject.toLocaleString("en-US", options)
    }
    function hour(a) {
        return String(a).length === 1 ? '0' + a : a
    }
    return `${my_data.data}.${my_data.month}.${my_data.year} ${hour(my_data.hours)}:${hour(my_data.minutes)} ${my_data.weekday}`
}


const date1 = new Date(1998, 0, -33);
const date2= new Date('42 03:24:00');
// console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday