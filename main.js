//going to need a function that deals with the month and day; I will have to have conditional statements for the months with nested conditional statements that would dictate if the day is before or after the cutoff for that month. 

document.querySelector('#button').addEventListener('click', findHoroscope)



function findHoroscope() {

    const monthInput = document.querySelector('#monthDate').value.toLowerCase()
    const dayInput = document.querySelector('#dayDate').value.toLowerCase()

    if (monthInput === 'december' && dayInput >= 22 && dayInput <= 31 || monthInput === 'january' && dayInput <= 19) {
        document.querySelector('#result').innerText = 'You are a Capricorn!'
    }
    else if (monthInput === 'january' && dayInput >= 20 && dayInput <= 31 || monthInput === 'february' && dayInput <= 18) {
        document.querySelector('#result').innerText = 'You are an Aquarius!'
    }
    else if (monthInput === 'february' && dayInput >= 19 && dayInput <= 28 || monthInput === 'march' && dayInput <= 20) {
        document.querySelector('#result').innerText = 'You are a Pisces!'
    }
    else if (monthInput === 'march' && dayInput >= 21 && dayInput <= 31 || monthInput === 'april' && dayInput <= 19) {
        document.querySelector('#result').innerText = 'You are an Aries just like my son, Theo!'
    }
    else if (monthInput === 'april' && dayInput >= 20 && dayInput <= 30 || monthInput === 'may' && dayInput <= 20) {
        document.querySelector('#result').innerText = 'You are a Taurus!'
    }
    else if (monthInput === 'may' && dayInput >= 21 && dayInput <= 31 || monthInput === 'june' && dayInput <= 20) {
        document.querySelector('#result').innerText = 'You are a Gemini!'
    }
    else if (monthInput === 'june' && dayInput >= 21 && dayInput <= 30 || monthInput === 'july' && dayInput <= 22) {
        document.querySelector('#result').innerText = 'You are a Cancer!'
    }
    else if (monthInput === 'july' && dayInput >= 23 && dayInput <= 31 || monthInput === 'august' && dayInput <= 22) {
        document.querySelector('#result').innerText = 'CONGRATULATIONS! YOU BELONG TO THE ELITE! YOU ARE A LEO!'
    }
    else if (monthInput === 'august' && dayInput >= 23 && dayInput <= 31 || monthInput === 'september' && dayInput <= 22) {
        document.querySelector('#result').innerText = 'You are a Virgo just like Beyonce and my wife haha!'
    }
    else if (monthInput === 'september' && dayInput >= 23 && dayInput <= 30 || monthInput === 'october' && dayInput <= 22) {
        document.querySelector('#result').innerText = 'You are a Libra!'
    }
    else if (monthInput === 'october' && dayInput >= 23 && dayInput <= 31 || monthInput === 'november' && dayInput <= 21) {
        document.querySelector('#result').innerText = 'You are a Scorpio!'
    }
    else if (monthInput === 'november' && dayInput >= 22 && dayInput <= 30 || monthInput === 'december' && dayInput <= 21) {
        document.querySelector('#result').innerText = 'You are a Sagittarius!'
    }
    else if (monthInput !== 'january' || monthInput !== 'february' || monthInput !== 'march' || monthInput !== 'april' || monthInput !== 'may' || monthInput !== 'june' || monthInput !== 'july' || monthInput !== 'august' || monthInput !== 'september' || monthInput !== 'october' || monthInput !== 'november' || monthInput !== 'december') {
        document.querySelector('#result').innerText = 'Please enter a valid month/day!'
    }
    // else if (dayInput < 1 || dayInput > 31) {
    //     document.querySelector('#result').innerText = 'Please enter a valid day!'
    // }


    //WORKS FOR PICKING OUT THE WRONG MONTH BUT CANT GET IT TO RUN THE CODE SPECIFICALLY FOR THE DAY...//

}
















//In other words ill need at least three nested conditionals for each month where one will before "if before first day then not Leo", "if after last day then not leo", "if on or after first day then LEO", "if on or before last day then Leo"

