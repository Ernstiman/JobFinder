


export function getURLString(arr, query, joinSymbol = "&"){
    const value = arr.map(elem => `${query}=${elem}`).join(joinSymbol);
    return value;
}

export function getAdFromId(id, ads){
    return ads.find(ad => ad.id === id);
}