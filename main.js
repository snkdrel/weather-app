function fetchWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=5deda571d18f02ec7b65336b0502b07c', {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
        const parsedData = getDatafromJson(data);
        tempDiv.textContent = parsedData.tempCelsius;
        humDiv.textContent = parsedData.humidity;
        showGif(parsedData.description);
    })
    .catch(function(err){
        console.log('Ups, an error ocurred');
    })
}

function getDatafromJson(data){
    const tempFarenheit = (data.main.temp - 273.15) * 1.8 + 32.00;
    const tempCelsius = data.main.temp - 273.15;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    return {tempFarenheit, tempCelsius, humidity, description};
}

async function showGif(gifToLook) {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=CU3OHPgSnPupXDI0jA8n0SE0uJHibgM6&s='+gifToLook, {mode: 'cors'});
    const parsedData = await response.json();
    document.getElementById('imgTag').src = parsedData.data.images.original.url;
}

const searchBox = document.getElementById('searchLocation');
const searchButton = document.getElementById('searchButton');
const tempDiv = document.getElementById('temperatureContainer');
const humDiv = document.getElementById('humidityContainer');
searchButton.addEventListener('click', () => fetchWeather(searchBox.value));