document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '1160af9098aa43af3a70aeda5f7fa621'; // Define your API key obtained from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}&units=metric`; // Construct the URL for the API request
    
    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => { // Handle the data received from the API
            // Extract temperature and description from the data
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            // Get current date and time
            const currentDate = new Date();
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
            const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
            const formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);

            // Select the HTML element where weather information will be displayed
            const weatherInfo = document.getElementById('weather-info');

            // Insert the temperature, description, date, and time into the HTML
            weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p>
                                     <p>Description: ${description}</p>
                                     <p>Date: ${formattedDate}</p>
                                     <p>Time: ${formattedTime}</p>`;
        })
        .catch(error => console.log('Error:', error)); // Log any errors that occur during the fetch operation
});
