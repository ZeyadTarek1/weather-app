const getCoordinates = require("./utils/getCoordinates");
const getWeather = require("./utils/getWeather");

const cityName = process.argv[2]; //get input from user

if (cityName !== undefined) {
    //if no city name is given
    getCoordinates(cityName, (error, { latitude, longitude, name } = {}) => {
        if (error) {
            return console.log(error);
        }

        //use coordinates from first call
        getWeather(latitude, longitude, (error, weatherData) => {
            if (error) {
                return console.log(error);
            }
            //if data is returned
            console.log("Weather Data for", name);
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
            console.log(weatherData);
        });
    });
} else {
    console.log("Please provide a city");
}
