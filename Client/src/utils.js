
export function getURLString(arr, query, joinSymbol = "&"){
    const value = arr.map(elem => `${query}=${elem}`).join(joinSymbol);
    return value;
}