let search = document.getElementById('search');
let errorMessage = document.getElementById('errorMessage');
let container1 = document.getElementById('container1');
let clouds = document.getElementById('clouds');
let rain = document.getElementById('rain');
let clear = document.getElementById('clear');


search.onchange = ()=>{

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&APPID=34be59f7135178e87afd29051535654a`).then(response =>{
            if(response.status !== 200){
                // document.getElementById('container1').innerHTML = "The city does not exist or it is not in our database";
                // alert("The city does not exist or it is not in our database");
                // errorMessage.style.display = 'block';
            }

            response.json().then(data=>{

                errorMessage.style.display = 'none';
                container1.style.display = 'block';

                let dateSunrise = new Date(1000* data.sys.sunrise);
                let sunrise = dateSunrise.toLocaleTimeString();

                let dateSunset = new Date(1000* data.sys.sunset);
                let sunset = dateSunset.toLocaleTimeString();

                document.getElementById('cityName').innerHTML = data.name;
                document.getElementById('temp').innerHTML = "<b> &#127777; Temp: </b>"+ data.main.temp + ' &#8451;';
                document.getElementById('feelsLike').innerHTML = "<b>Feels like: </b>"+ data.main.feels_like + " &#8451;";
                document.getElementById('minTemp').innerHTML = "<b> &#127777; Min. Temp: </b>" + data.main.temp_min + " &#8451;";
                document.getElementById('maxTemp').innerHTML = "<b>&#127777; Max. Temp: </b>" + data.main.temp_max + " &#8451;";
                document.getElementById('humidity').innerHTML = "<b>&#128167; Humidity: </b>" + data.main.humidity + " %";
                document.getElementById('sunrise').innerHTML = "<b>&#127774; Sunrise: </b>" + sunrise;
                document.getElementById('sunset').innerHTML = "<b>&#127749; Sunset: </b>" + sunset;

                let weather = data.weather[0].main.toString();

                if(weather == "Rain" || weather == "Thunderstorm"){
                    document.body.style.background = "url(img/rain.jpg)";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.getElementById('title').style.color = 'white';
                    document.getElementById('weather').innerHTML = "<b>Weather: </b>" + data.weather[0].main + " &#127783;";
                    document.getElementById('container1').style.color = 'white';
                }else if(weather == "Clear"){
                    document.body.style.background = "url(img/clear.jpg)";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.getElementById('title').style.color = 'black';
                    document.getElementById('weather').innerHTML = "<b>Weather: </b>" + data.weather[0].main + " &#127774;";
                    document.getElementById('container1').style.color = 'black';
                }else if(weather == "Clouds"){
                    document.body.style.background = "url(img/clouds.jpg)";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.getElementById('title').style.color = 'black';
                    document.getElementById('weather').innerHTML = "<b>Weather: </b>" + data.weather[0].main + " &#9925;";
                    document.getElementById('container1').style.color = 'black';
                } else{
                    document.getElementById('weather').innerHTML = "<b>Weather: </b>" + data.weather[0].main;
                    document.getElementById('container1').style.color = 'black';
                }

                document.getElementById('weatherDescription').innerHTML = "<b>Description: </b>" + data.weather[0].description;
                document.getElementById('wind').innerHTML = "<b>&#128168; Wind: </b>" + data.wind.speed + " m/s";

            }).catch(error =>{
                console.log(`This is the ${error}`);
                if(search.value != ''){
                    errorMessage.style.display = 'block';
                }

                container1.style.display = 'none';
                document.body.style.background = "url(img/weather.jpg)";
            })
        })

}