const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles  = document.querySelectorAll(".circle")
const progress = document.getElementById("progress")

let currentActive = 1
let numberOfCircles = circles.length

next.addEventListener("click",function(){
    currentActive++;

    if(currentActive>numberOfCircles){
        currentActive = numberOfCircles
    }
    console.log(currentActive)
    updateCSS()
})

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive<1){
        currentActive = 1
    }
    console.log(currentActive)
    updateCSS()
})

function enableDisable(){
    if(CurrentActive === 1){
        prev.disable = true
    }else if(currentActive === numberOfCircles){
        next.disable = true
    }else {
        prev.disable = false
        next.disable = false
    }
}

function updateCSS(){
    for(var i=0;i<numberOfCircles;i++){
        const circle = circles[i]

        if(i<currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    }
    const activexyz = document.querySelectorAll(".active")

    const widthxyz = (activexyz.length-1) / (circles.length-1) * 100

    progress.style.width = widthxyz + "%"
    enableDisable()
}