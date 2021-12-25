let displayxyz = document.getElementById("display")
let buttonxyz = (document.getElementsByClassName("btn"))

function clickingxyz(clickedxyz){
    if(clickedxyz===""){
        if(clickedxyz!='0'){
            displayxyz.innerText=displayxyz.innerText+clickedxyz
    
        }
    }
    else{
        displayxyz.innerText=displayxyz.innerText+clickedxyz
    }
}
function evalx(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText)
    }
    catch(err){
        displayxyz.innerText="Wrong Keyword"
    }
    
}
function clearx(){
    displayxyz.innerText = ""
}
function del(){
    displayxyz.innerText=displayxyz.innerText.slice(0,-1)
}