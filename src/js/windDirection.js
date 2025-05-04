

export function windDirection(degree) {
    let direction = "";
    if (degree === 0 ) {
        direction = "N";  
    }else if (degree > 0 && degree < 45) {
        direction = "NNE";
    } else if (degree === 45) {
        direction = "NE";
    }else if (degree > 45 && degree < 90) {
        direction = "ENE";
    }else if (degree === 90) {
        direction = "E";
    }else if (degree > 90 && degree < 135) {
        direction = "ESE";
    }
    else if (degree === 135) {
        direction = "SE";
    }
    else if (degree > 135 && degree < 180) {
        direction = "SSE";
    }
    else if (degree === 180) {
        direction = "S";
    }
    else if (degree > 180 && degree < 225) {
        direction = "SSW";  
    }
    else if (degree === 225) {
        direction = "SW";
    }
    else if (degree > 225 && degree < 270) {
        direction = "WSW";
    }
    else if (degree === 270) {
        direction = "W";
    }
    else if (degree > 270 && degree < 315) {
        direction = "WNW";
    } else if (degree === 315) {
        direction = "NW";
    } else if (degree > 315 && degree < 360) {
        direction = "NNW";
    } else if (degree === 360) {
        direction = "N";

    } else if (degree < 0 || degree >= 360) {
        direction = "Invalid degree value";
   
    }

    return direction;
}