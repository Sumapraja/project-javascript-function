let Name = prompt(`Welcome! dear the chosen one, what's your name?`)
alert(`Hello ${Name}. i'll get your horoscope reading. can i have your details?`)
let BirthMonth = prompt(`What Month were you born?`)
let BirthDate = parseInt(prompt(`What date were you born?`))

const checkZodiac = function (month, date) {
        if ((month == 'December' && date >= 22 && date <= 31) || (month == 'January' && date >= 1 && date <= 19)) {
            alert('You are a Capricorn');
        } else if ((month == 'January' && date >= 20 && date <= 31) || (month == 'February' && date >= 1 && date <= 18)) {
            alert('You are a Aquarius');
        } else if ((month == 'February' && date >= 19 && date <= 29) || (month == 'March' && date >= 1 && date <= 20)) {
            alert('You are a Pisces');
        } else if ((month == 'March' && date >= 21 && date <= 31) || (month == 'April' && date >= 1 && date <= 19)) {
            alert('You are a Aries');
        } else if ((month == 'April' && date >= 20 && date <= 30) || (month == 'May' && date >= 1 && date <= 20)) {
            alert('You are a Taurus');
        } else if ((month == 'May' && date >= 21 && date <= 31) || (month == 'June' && date >= 1 && date <= 20)) {
            alert('You are a Gemini');
        } else if ((month == 'June' && date >= 21 && date <= 30) || (month == 'July' && date >= 1 && date <= 22)) {
            alert('You are a Cancer');
        } else if ((month == 'July' && date >= 23 && date <= 31) || (month == 'August' && date >= 1 && date <= 22)) {
            alert('You are a Leo');
        } else if ((month == 'August' && date >= 23 && date <= 31) || (month == 'September' && date >= 1 && date <= 22)) {
            alert('You are a Virgo');
        } else if ((month == 'September' && date >= 23 && date <= 30) || (month == 'October' && date >= 1 && date <= 22)) {
            alert('You are a Libra');
        } else if ((month == 'October' && date >= 22 && date <= 31) || (month == 'November' && date >= 1 && date <= 21)) {
            alert('You are a Scorpio');
        } else if ((month == 'November' && date >= 22 && date <= 30) || (month == 'December' && date >= 1 && date <= 21)) {
            alert('You are a Sagittarius');
        } else (alert(`Oops!! Something's wrong.
    \n Please input your birth month in english spellings and first letter in uppercase
    \n Example : "January" `))
}

checkZodiac(BirthMonth, BirthDate)