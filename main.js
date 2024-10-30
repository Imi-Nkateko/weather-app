const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".inputEl");
const displayEl = document.querySelector(".weather-data");

const apiKey = "43d15d8eb73938d2c76763c568fafce1";


formEl.addEventListener("submit", async event => {
    event.preventDefault();   
    const  city = inputEl.value;
    inputEl.value = ""
    if (city) {   
            try {
                const weatherData = await getWeatherData(city);
                displayWeatherInfo(weatherData);
            } 
            catch (error) {
                console.error(error);
                handleError(error)
            }
    } 
    else {
        
        handleError("Please Enter City");
    }
})

async function getWeatherData(city) {
  const apiUrl = 
  `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  console.log(response)

  if (!response.ok) {
    throw new Error("Could not fetch weather data")
  } 

  return await response.json();
}

function displayWeatherInfo(data) {

   const { name: city,main: {temp, humidity}, weather: [{description, id}]} = data;
    
    displayEl.textContent = "";
    displayEl.style.display = "block";

    const humidityDiplay = document.createElement("p");
    const cityDisplay = document.createElement("h1");
    
    cityDisplay.classList.add("city");
    humidityDiplay.classList.add("humidity");

    cityDisplay.textContent = city;
    humidityDiplay.textContent = humidity;

    
    displayEl.appendChild(cityDisplay);
    displayEl.appendChild(humidityDiplay)

}

function handleError(message) {
   
    const errorDisplay = document.createElement("p");
    errorDisplay.classList.add("error");
    errorDisplay.textContent = message
     displayEl.style.display ="block"
    displayEl.appendChild(errorDisplay);
}