const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


export default async function getCurrentLocation() {
    let locPromise = new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((pos) => resolve(pos), error, options);
    });
    const { longitude, latitude } = (await locPromise).coords
    return { lat: latitude, lng: longitude }
}