const cityInput = document.getElementById('cityInput');

const searchBtn = document.getElementById('searchBtn');

const weather = document.getElementById('weather');


searchBtn.addEventListener('click', async function(){

    const city = cityInput.value;

   // const apiKey = "4a0e4e7f361a44cb2ed38a3b7253af02";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        weather.innerHTML = `
            <h2>${data.name}</h2>

            <p>Temperature: ${data.main.temp} °C</p>

            <p>Weather: ${data.weather[0].main}</p>
        `;

    }
    catch(error){

        weather.innerHTML = `
            <p>Error loading weather</p>
        `;

    }

});