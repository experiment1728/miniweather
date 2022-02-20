let weather ={
   apikey: "7a7c161010cc42b21092f5e587cf12da",
  fetchweather: function(city) {
  fetch
  ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
).then((response) =>response.json())
 .then((data) => this.displayweather(data));
},
displayweather: function(data)
{
 const name = data.name;
 const {icon, description} = data.weather[0];
 const { temp, humidity} = data.main;
 const {speed} = data.wind;
 document.querySelector(".city").innerText = "Weather in " + name;
 document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon +".png";
 document.querySelector(".description").innerText = description;
 document.querySelector(".temp").innerText= temp + "°C";
 document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%";
 document.querySelector(".wind").innerText= "Wind Speed: " + speed + "km/h";
 document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name +"')"
},
search: function(){
  this.fetchweather(document.querySelector(".search-box").value);
}
};
document.querySelector(".search button").addEventListener("click", function()
{
  weather.search();
})
document.querySelector(".search-box").addEventListener("keyup",function(event)
{
  if(event.key=="Enter")
  {
    weather.search();
  }
})
