let weather = {
    apikey:"5587d1f5c31e85363697889da0520f2a",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apikey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data){
        const { name } = data;
        const { icon, discription } = data.weather[0];
        const { temp, humidity} = data.main;
        const{speed}= data.wind;
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".discription").innerText=discription;
        document.querySelector(".temp").innerText= temp+ "°C";
        document.querySelector(".humidity").innerText="humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed: "+speed+"km/h";
        document.querySelector(".Weather").classList.remove("loading");
    },
    search:function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }

}
document.querySelector(".button").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".searchbar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Tokyo");