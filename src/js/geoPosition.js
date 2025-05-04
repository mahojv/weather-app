

export function geoFindMe(callback) {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser")
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let locationArray = [latitude, longitude]

    callback(locationArray)
  }

  function error() {
    alert("Unable to retrieve your location")
  }
}

