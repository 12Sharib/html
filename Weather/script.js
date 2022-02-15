let weather = {
    "apiKey" : "da4dee7eddcb62642e89e083064ee13e",
    fetchWeather: function(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "weather in " +name;
        document.querySelector(".temp").innerText = temp+"° C";
        document.querySelector(".weather").innerText =description;
        document.querySelector(".humidity").innerText="humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "wind-speed: " + speed + " km/hr";
        document.body.style.backgroundColor = "black"
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    },
}
document.querySelector(".search button")
.addEventListener("click",function(){
    weather.search()
});
document.querySelector(".search-bar")
.addEventListener("keyup",function(event){ 
    if(event.key == "Enter"){
        weather.search()
    } 
})