import { NOMINATIM_URL } from "./constants"

const fetchCoordinates = async(address) => {
    const endpoint = `${NOMINATIM_URL}?q=${encodeURI(address)}&format=json&polygon=1&addressdetails=1`;
    let response = await fetch(endpoint);
    let resp = await response.json();
    if(resp.length !== 0){
        let r = resp[0];
        return {
            lat: r.lat,
            lon: r.lon
        };
    } else {
        return {
            error: 'address_not_found'
        }
    }
}

export {fetchCoordinates};