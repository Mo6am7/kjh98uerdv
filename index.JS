let tame = document.getElementById("tame")
let fg = "PM"
function Tame(){
    let data = new Date()
    let hours = data.getHours()
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()
    if(hours > 12){
        hours = hours - 12
        hours = "0" + hours
    }else{
        hours = hours
        fg = "AM"
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0"+ seconds
    }
    setInterval(()=>{
        Tame()
    },1000)
    tame.innerHTML = `${hours}:${minutes}:${seconds} ${fg}`
}
Tame()
function More(){
    let mle = ""
    window.location.href = mle
}