const input = document.getElementById('search');
const btn = document.getElementById('searchBtn');
let temp;
let desc;
let windSpeed;
let weatherIcon;
const weatherData = document.getElementById('weatherData');
btn.addEventListener('click', () => {
    
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb297914d3b67b25d78c1e810fc3def3&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            temp = data.main.temp;
            desc = data.weather[0].description;
            windSpeed = data.wind.speed;
            weatherIcon = data.weather[0].icon;

            console.log('temp:', temp);
            document.getElementById('temp').textContent = 'Temp: ' + temp + '°C';
            document.getElementById('desc').textContent = desc;
            document.getElementById('windSpeed').textContent = 'Wind Speed: ' + windSpeed + 'm/s';
            let icon = document.getElementById('icon');
            icon.src =  `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        })
        .catch(error => {
            console.log(error);

        });

        
            
});
