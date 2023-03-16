const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function error(err) {
    // console.warn(`ERROR(${err.code}): ${err.message}`);
    console.log(err)
    if (err.code === 1) {
        alert("Please allow location services to use this app")
    } else if (err.code === 2) {
        alert("Please enable location services to use this app")
    } else if (err.code === 3) {
        console.log('Reloading in 2 sec')
        setTimeout(() => {
            location.reload();
        }, 2000)
    }
}


export default async function watchUserPosition() {
    let locPromise = new Promise((resolve) => {
        navigator.geolocation.watchPosition((pos) => resolve(pos), error, options);
    });
    const { longitude, latitude } = (await locPromise).coords

    return { lat: latitude, lng: longitude }
}