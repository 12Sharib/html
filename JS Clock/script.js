const second = document.querySelector(".second-hand")
const min = document.querySelector(".min-hand")
const hour = document.querySelector(".hour-hand")

function setTime(){
    let now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secDegress = ((seconds/60)*360) + 90
    second.style.transform =  `rotate(${secDegress}deg)`

    const minDegress =(minutes/60*360)+ 90 +(seconds/60) * 6
    min.style.transform = `rotate(${minDegress}deg)`

    const hourDegrees = ((hours/12*360))+ 90 +(minutes/60) * 30
    hour.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setTime,10)
setTime()
