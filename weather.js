let main = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let humidity = document.querySelector('.humidity');

fetch("https://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&appid=841d57067deb8d1b94461b23e48c2e53")
  .then(res => res.json())
  .then(data => {
    let tempValue = data['main']['temp'];
    let nameValue = data['name'];
    let descValue = data['weather'][0]['description'];
    let windValue = data['wind']['speed'];
    let humidityValue = data['main']['humidity']

    main.innerHTML = nameValue;
    desc.innerHTML = descValue;
    temp.innerHTML = tempValue + " °C";
    wind.innerHTML = "Wind speed: " + windValue + " km/h";
    humidity.innerHTML = "Humidity: " + humidityValue + "%";
  })



