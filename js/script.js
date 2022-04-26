let weather ={"apiKey":"592a3483a47b5a1f396bba3604b65c83",
fetchWeather:function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    +"&units=metric&appid=" 
    +this.apiKey
    )
    .then((response) => response.json())
    .then((data)=> this.displayWeather(data));
},
displayWeather: function(data){
 const {name}=data;
 const {icon,description} = data.weather[0];
 const {temp, humidity,temp_min,temp_max} = data.main;
 const {speed} = data.wind;
 const {sunrise , sunset} = data.sys;
// console.log(name,icon,description,temp, humidity,temp_min,temp_max,speed,sunrise , sunset)

document.querySelector(".city").innerText = "Weather in " + name;

document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";

document.querySelector(".description").innerText =  description;

document.querySelector(".temperature").innerText =  temp + "° C";
document.querySelector(".temp-min").innerText ="Min temperature: "+ temp_min + "° C";
document.querySelector(".temp-max").innerText = "Max temperature: "+ temp_max + "° C";
document.querySelector(".humadity").innerText =  "Humadity : " + humidity + " %";
document.querySelector(".wind").innerText =  "Wind Speed : " + speed + " km/h";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name +"')";
},
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter")
    {
        weather.search();
    }
})
weather.fetchWeather("Dhaka");