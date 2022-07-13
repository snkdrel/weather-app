function fetchWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=5deda571d18f02ec7b65336b0502b07c', {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(data => console.log(getDatafromJson(data)))
    .catch(function(err){
        console.log('Ups, an error ocurred');
    })
}

function getDatafromJson(data){
    const tempFarenheit = (data.main.temp - 273.15) * 1.8 + 32.00;
    const tempCelsius = data.main.temp - 273.15;
    const humidity = data.main.humidity;
    return {tempFarenheit, tempCelsius, humidity};
}

const searchBox = document.getElementById('searchLocation');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', fetchWeather(searchBox.textContent));