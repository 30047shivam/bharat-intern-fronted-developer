function getWeather() {
    const apiKey = '54cb044f1049a1d7602c0981979c82d2'; // Replace with your API key
    const city = document.getElementById('cityInput').value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityElement = document.getElementById('city');
            const weatherIconElement = document.getElementById('weather-icon');
            const temperatureElement = document.getElementById('temperature');
            const descriptionElement = document.getElementById('description');

            cityElement.textContent = `${data.name}, ${data.sys.country}`;
            weatherIconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            temperatureElement.textContent = `${data.main.temp} °C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
