function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('cityweather').value;
    const apiKey = '7f028d6b8432eafcbf3fa8cd56a9c5e4'; // actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

// Lattitude
function showlatlonDetails(event) {
    event.preventDefault();
    const lattitude = document.getElementById('lat').value;
    const longitude = document.getElementById('lon').value;
    const apiKey = '7f028d6b8432eafcbf3fa8cd56a9c5e4'; // actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('latlonInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>
                                  <p>Feels Like: ${data.main.feels_like}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const latlonInfo = document.getElementById('latlonInfo');
            latlonInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

document.getElementById('latlonForm').addEventListener('submit',showlatlonDetails );