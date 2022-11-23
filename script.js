let arrowHour = document.querySelector('.hour-cont'),
    arrowMin = document.querySelector('.min-cont'),
    arrowSec = document.querySelector('.sec-cont'),

    fullYear = document.querySelector('.fullYear'),
    month = document.querySelector('.month'),
    date = document.querySelector('.date'),
    // design
    container = document.querySelector('.container'),
    secStyle = document.querySelector('.sec'),
    rot_deg = 6;

function timeLogic() {
    // time
    let newDate = new Date
    let hour = newDate.getHours() * 30
    let min = newDate.getMinutes() * rot_deg
    let sec = newDate.getSeconds() * rot_deg

    arrowHour.style.cssText = `transform: rotate(-${hour + min / 12}deg)`
    arrowMin.style.cssText = `transform: rotate(-${min}deg)`
    arrowSec.style.cssText = `transform: rotate(-${sec}deg)`

    arrowSec.classList.add('secanim')
    setTimeout(() => {
        arrowSec.classList.remove('secanim')
    }, 300)

    if (rot_deg == 0) {
        rot_deg = 360
    }

    // ------- data -------
    // fullYear.innerText = newDate.getFullYear() + ' /'
    // month.innerText = newDate.getMonth() + 1 + ' /'
    // date.innerText = newDate.getDate()

    // ------- morning - sunset - nigth --------
    if (newDate.getHours() >= 8 && newDate.getHours() <= 18) {
        morning()
    }
    else if (newDate.getHours() >= 18 && newDate.getHours() <= 20) {
        sunset()
    }
    else if (newDate.getHours() >= 0 && newDate.getHours() <= 7) {
        nigth()
    }
}

function morning() {
    document.body.style.cssText = 'background-image: url(./fons/den.jpg); align-items: flex-start;'
    container.classList.add('container-morning')
}

function sunset() {
    document.body.style.cssText = 'background-image: url(./fons/zakat.jpg);'
    container.classList.add('container-sunset')
}

function nigth() {
    document.body.style.cssText = 'background-image:url(./fons/noch.jpg);'
    container.classList.add('container-nigth')
}

timeLogic()

setInterval(() => {
    timeLogic()
}, 1000);