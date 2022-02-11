window.addEventListener('load',() =>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;
            const api =  fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?${lat},${long}` ,{
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
                    "x-rapidapi-key": "5b5daa2704msh589a2ae7ac73023p16615djsn1c1ede57992b"
                }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
        
        })
    }
    // else{
    //     h1.textContent = 'this is not working'
    // }
})
