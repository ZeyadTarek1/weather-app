const request = require("request");

const getCoordinates = (city, callback) => {
    //inesrt mapbox api
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city
    )}.json?***ACCESSKEYHERE***&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Error! No connection", undefined);
        } else if (!body.features[0]) {
            callback("Error! Unknown location", undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                name: body.features[0].place_name,
            });
        }
    });
};

// export
module.exports = getCoordinates;
