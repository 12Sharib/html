const btnxyz = Array.from(document.querySelectorAll("btn"))
//they can take all of the buttons

function StopSound(){
    for(var i=0;i<btnxyz.length;i++){
        const sound = document.getElementById(btnxyz[i].innerText)
        sound.pause()
        sound.currentTime=0
    }
}
function PlaySound(btn){
    btn.addEvenListener("click",function(){
        StopSound()
        document.getElementById(btn.innerText).play()

    })
}
for(var i=0;i<btnxyz.length;i++){
    var buttonxyz = btnxyz[i]
    PlaySound(btnxyz)
}
document.querySelector(".stop".addEvenListener)("click",function(){
    StopSound()
})