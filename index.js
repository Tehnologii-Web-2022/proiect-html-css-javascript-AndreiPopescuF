const key="e9c0601dcc759dde82bc007b08fa64b6";


function getWeather(cityy)
{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityy +"&units=metric&appid="+ key)
    .then((response) => response.json())
.then((data) => this.displayWeather(data));
}

function displayWeather(data)
{
    const {name}=data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = name + " Weather Now";
    document.querySelector(".icon").src= "http://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
}

function searchCity()
{
    getWeather(document.querySelector(".search-bar").value);
    getWeatherr(document.querySelector(".search-bar").value);
}

document.querySelector(".btn").addEventListener("click",function (){
    searchCity();
})

document.querySelector(".search-bar").addEventListener("keyup",function (event){
    if(event.key=="Enter"){
    searchCity();
    }
})

getWeather("Bucharest");
getWeatherr("Bucharest");


function getWeatherr(cityyy)
{
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityyy+"&appid=e9c0601dcc759dde82bc007b08fa64b6")
.then(response => response.json())
.then(data => {

    
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°C";
        
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°C";
    }
    

    
     for(i = 0; i<5; i++){
        document.getElementById("icn" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    
    for(i = 0; i<5; i++){
        document.getElementById("desc" + (i+1)).innerHTML = data.list[i].weather[0].description;
    }
    console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}





var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("time" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }




    const spinner = document.getElementById("spinner");

    function loadData() {
      spinner.removeAttribute('hidden');
      fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms')
        .then(response => response.json())
        .then(data => {
          spinner.setAttribute('hidden', '');
          console.log(data)
        });
    }


  function activatePlacesSearch(){
    var input = document.getElementById('search_term');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }
  
  autocomplete.addEventListener('keypress', setQuery1);
  function setQuery1(evt) {
      getWeather(autocomplete);
      GetInfo(autocomplete);
  }