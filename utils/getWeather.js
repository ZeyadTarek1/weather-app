const request = require("request");

const getWeather = (lat, long, callback) => {
    // insert weatherstack api key concatenated with lat and long
    const url = `http://api.weatherstack.com/current?access_key=***ACCESSKEYHERE***&query=%20${lat},${long}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Error! No Connection!", undefined);
        } else if (body.error) {
            callback("Error! Unknown Location!", undefined);
        } else {
            callback(
                undefined,
                `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
            );
        }
    });
};

// export
module.exports = getWeather;
