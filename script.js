const weatherElement = document.querySelector(".weather-data");

async function fetchWeather() {
  const apiKey = "4919b2b09fb1c45b130cbd83cc93e8ff"; // Your API Key
  const lat = "40.3356"; // Latitude for Reading, PA
  const lon = "-75.9269"; // Longitude for Reading, PA
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const temp = Math.round(data.main.temp); // Temperature
    const condition = data.weather[0].description; // Weather condition

    // Update the weather section
    weatherElement.innerHTML = `${temp}°F - ${condition}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherElement.innerHTML = "Unable to fetch weather.";
  }
}

fetchWeather();
