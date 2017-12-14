function meetupDay (year, month, day, pos) {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
]

    /*let dnum = days[day];
    let teenth;
    
    if(pos == 'teenth') {
        teenth = new Date(year, month, 10).getDay() + 1;
        if (teenth == 1 && dnum == 1) {
            day = 17;
        }
        if(teenth < dnum) {
            day = (dnum - teenth) + 10; 
        } 
        if(teenth > dnum) {
            day = (teenth - dnum) - 1  + 10; 
        }
    }*/
    let startMonth = 1;
    const endMonth = daysInMonth(year, month + 1);
    let index = new Date(year, month, startMonth).getDay();
    let monthArr = [];
    for ( let i = startMonth; i <= endMonth; i++) {
        monthArr.push(days[index]);
        if(index == 6) {
            index = 0;
        } else index++
    }
    if(pos == 'teenth') {
        for ( let i = 10; i <= endMonth; i++) {
            if(monthArr[i] == day) {
                day = i + 1;
            }
        }
    }
    if(pos == '4th' || pos == '3rd' || pos == '2nd' || pos == '1st') {
        const number = parseInt(pos);
        let count = 0;
        for ( let i = 0; i <= endMonth; i++) {
            if(monthArr[i] == day) {
                count++;
            }
            if(count == number) {
                day = i + 1;
                break
            }
        }
    }
    if(pos == 'last' || pos == '5th') {
        day = monthArr.lastIndexOf(day) + 1;
    }
    return new Date(year, month, day)
}
function daysInMonth(year,month) {
    return new Date(year, month, 0).getDate();
}

module.exports = meetupDay;