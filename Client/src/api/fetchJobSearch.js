import { getURLString } from "../utils";

export default async function fetchJobSearch(params){
    const arr = [];

    Object.keys(params).forEach(key => {
        let query = []
        switch(key){
            case 'lauCodes':
                console.log("hej")
                query = 'municipality';
                break
            case 'ssykCodes':
                query = 'occupation-group';
                break
            default :
                query = "";
                break
        }
        if(params[key] && params[key].length > 0) arr.push(getURLString(params[key], query));
    })
    const urlStr = arr.join("&");

    const result = await fetch(`https://jobsearch.api.jobtechdev.se/search?${urlStr}`, {
        headers: {
            "content-type": "application/json",
            accept: "application/json"
        }
    })
    const data = await result.json();
    return data.hits;
    
}